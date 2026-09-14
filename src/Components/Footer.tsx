const Footer = () => {
  return (
    <footer
      id="contact"
      className="mt-20 border-t border-gray-200 bg-gray-50"
    >
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="brand-gradient">
              Dev Stack
            </span>
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Explore modern development technologies and build the
            perfect technology stack for your next project.
          </p>

          <div className="mt-5 flex gap-4 text-sm font-medium">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500"
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-bold text-gray-800">
            Product
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-gray-500">
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>Projects</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Company */}
        <div id="about">
          <h3 className="font-bold text-gray-800">
            Company
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-gray-500">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-gray-800">
            Legal
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-gray-500">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Security</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto flex flex-col justify-between gap-3 px-4 py-5 text-sm text-gray-500 sm:flex-row">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;