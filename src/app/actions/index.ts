"use server";
import { signIn, signOut } from "src/auth";
export async function doLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/perfil" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
