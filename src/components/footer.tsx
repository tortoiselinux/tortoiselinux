import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer mt-auto d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      {" "}
      <div className="col-md-4 d-flex align-items-center">
        {" "}
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          aria-label="Bootstrap"
        >
          {" "}
          <Image
            src="/assets/logo-icones/icone-light.png"
            alt="tortoise icon"
            className="bi"
            width={38}
            height={24}
            aria-hidden="true"
          />{" "}
        </a>{" "}
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2025 Wellyton Barbosa
        </span>{" "}
      </div>{" "}
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        {" "}
        <li className="ms-3">
          <a
            className="text-body-secondary"
            href="https://www.youtube.com/watch?v=uG9HuLuhbK4"
            aria-label="youtube"
          >
            <i className="bi bi-youtube" aria-hidden="true"></i>
          </a>
        </li>{" "}
        <li className="ms-3">
          <a
            className="text-body-secondary"
            href="https://www.instagram.com/tortoiselinux/"
            aria-label="instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </li>{" "}
        <li className="ms-3">
          <a
            className="text-body-secondary"
            href="https://www.reddit.com/r/tortoiselinux/"
            aria-label="reddit"
          >
            <i className="bi bi-reddit"></i>
          </a>
        </li>{" "}
        <li className="ms-3">
          <a
            className="text-body-secondary"
            href="https://github.com/tortoiselinux"
            aria-label="github"
          >
            <i className="bi bi-github"></i>
          </a>
        </li>{" "}
      </ul>{" "}
    </footer>
  );
}
