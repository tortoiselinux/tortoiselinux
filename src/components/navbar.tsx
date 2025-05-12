import SearchBar from "./SearchBar";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="d-flex mb-auto flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a
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
      </a>

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/" className="nav-link px-2 text-secondary">
            Tortoise
          </a>
        </li>
        <li>
          <a href="/features" className="nav-link px-2 text-white">
            Features
          </a>
        </li>
        <li>
          <a href="/docs" className="nav-link px-2 text-white">
            Docs
          </a>
        </li>
        <li>
          <a href="/faq" className="nav-link px-2 text-white">
            FAQs
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link px-2 text-white">
            About
          </a>
        </li>
        <li>
          <a href="/members" className="nav-link px-2 text-white">
            Members
          </a>
        </li>
        <li>
          <a href="/projects" className="nav-link px-2 text-white">
            Projects
          </a>
        </li>
      </ul>

      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <SearchBar />
      </form>

      <div className="text-end">
        <a
          href="https://github.com/tortoiselinux"
          className="btn btn-outline-light me-2"
        >
          GitHub
        </a>
        <a
          href="https://www.reddit.com/r/tortoiselinux/"
          className="btn btn-warning"
        >
          Reddit
        </a>
      </div>
    </div>
  );
}

/*

*/
