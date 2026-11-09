import logo from "../../assets/images/logo.png";

const footerLinks = [
    {
        title: "Platform",
        links: [
        { label: "Home", href: "/" },
        { label: "Explore Courses", href: "/courses" },
        { label: "About Us", href: "/about" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Learning Resources", href: "/resources" },
            { label: "Help Center", href: "/help" },
            { label: "FAQs", href: "/faqs" },
        ],
    },
    {
        title: "Account",
        links: [
            { label: "Sign In", href: "/login" },
            { label: "Create Account", href: "/register" },
        ],
    },
];

function Footer() {
  return (
    <footer className="bg-slate-950 px-4 pb-6 pt-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand information */}
          <div>
            <a href="/" className="inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                <img
                  src={logo}
                  alt="EduLearn logo"
                  className="h-4 w-4 object-contain"
                />
              </div>

              <span className="text-xl font-bold">
                EduLearn
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Making quality education accessible to everyone,
              everywhere. Learn at your own pace, even offline.
            </p>
          </div>

          {/* Navigation groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">
                {group.title}
              </h3>

              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="my-9 border-t border-slate-800" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} EduLearn. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Learn Anywhere. Even Offline.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
