import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Brand */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt=""
            className="h-9 w-auto"
          />

        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 text-sm font-medium text-gray-600 md:flex">
          <li>
            <a
              href="#home"
              className="transition hover:text-orange-500"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="transition hover:text-orange-500"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="transition hover:text-orange-500"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition hover:text-orange-500"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition hover:text-orange-500"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden px-3 py-2 text-sm font-medium text-gray-700 sm:block">
            Sign In
          </button>

          <button className="brand-button rounded-full px-5 py-2 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;