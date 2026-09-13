// Components/Navbar.tsx

import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <div>
          <img src={Logo} alt="Dev Stack" className="w-28" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-3">
          <button>Sign In</button>

          <button className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 px-5 py-2 text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;