import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { doLogin } from "src/app/actions";
import { auth } from "src/auth";
export default async function Navbar() {
  const session = await auth();
  return (
    <div className="d-flex mb-auto flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <Link
        href="/"
        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <Image
          className="bi me-2"
          alt="tortoise icon"
          width="48"
          height="32"
          role="img"
          aria-label="Tortoise"
          src="/assets/logo-icones/icone-light.png"
        />
      </Link>

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link href="/" className="nav-link px-2 text-secondary">
            Tortoise
          </Link>
        </li>
        <li>
          <Link href="/features" className="nav-link px-2 text-white">
            Features
          </Link>
        </li>
        <li>
          <Link href="/docs" className="nav-link px-2 text-white">
            Docs
          </Link>
        </li>
        <li>
          <Link href="/faq" className="nav-link px-2 text-white">
            FAQs
          </Link>
        </li>
        <li>
          <Link href="/about" className="nav-link px-2 text-white">
            About
          </Link>
        </li>
        <li>
          <Link href="/members" className="nav-link px-2 text-white">
            Members
          </Link>
        </li>
        <li>
          <Link href="/projects" className="nav-link px-2 text-white">
            Projects
          </Link>
        </li>
      </ul>

      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <SearchBar />
      </form>

      <div className="text-end">
        <form className="" action={doLogin}>
          <a
            href="https://github.com/tortoiselinux"
            className="btn btn-outline-light me-2"
            target="_blank"
          >
            GitHub
          </a>
          {!session?.user && (
            <button
              type="submit"
              className="btn btn-warning"
              name="action"
              value="github"
            >
              Login
            </button>
          )}
          {session?.user?.image && (
            <Link href="/perfil">
              <Image
                alt="Avatar do usuário"
                src={session.user.image}
                width={48}
                height={48}
                className="rounded-circle"
              />
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}

/*

*/
