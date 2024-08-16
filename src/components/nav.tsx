export default function Navbar() {
  return (
    <nav className="pt-10 font-heading uppercase fw-3 font-semibold text-3xl tracking-wider px-24 flex">
      <ul className="flex ml-auto mr-0">
        <li className="me-8">
          <a>About</a>
        </li>
        <li className="me-8">
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
