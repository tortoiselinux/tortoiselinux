import React from "react";
import { redirect } from "next/navigation";
import { auth } from "src/auth";
import Image from "next/image";
import { doLogout } from "../actions";

export default async function PerfilPage() {
  const session = await auth();
  if (!session?.user) redirect("/");

  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-3">
          {session.user.image && (
            <Image
              alt="Avatar do usuário"
              src={session.user.image}
              width={96}
              height={96}
              className="rounded-circle shadow"
            />
          )}
        </div>
        <div className="text-center">
          <h2 className="h4">{session.user.name}</h2>
          {session.user.email && (
            <p className="text-muted">{session.user.email}</p>
          )}
        </div>
        <form action={doLogout} className="mt-4">
          <button type="submit" className="btn btn-danger w-100">
            Sair
          </button>
        </form>
      </div>
    </main>
  );
}
