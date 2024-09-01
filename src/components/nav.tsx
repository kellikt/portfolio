export default function Navbar() {
  return (
    <nav className="pt-10 font-heading uppercase fw-3 font-semibold md:text-3xl text-base tracking-wider md:px-24 px-5 flex">
      <ul className="flex ml-auto mr-0">
        <li className="me-8">
          <a href="#about">About</a>
        </li>
        <li className="me-8">
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
