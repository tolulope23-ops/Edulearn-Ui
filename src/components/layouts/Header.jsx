import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo placeholder */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            <img
                src={logo}
                alt="EduLearn logo"
                className="h-4 w-4 object-contain"
            />
          </div>

          <span className="text-lg font-bold text-heading">
            EduLearn
          </span>
        </a>

        {/* Authentication action */}
        <a href="/signin"
            className="rounded-full bg-primary-light px-6 py-2 text-sm font-semibold text-primary transition-colors hover:bg-blue-100">
            Sign in
        </a>
      </nav>
    </header>
  );
}

export default Header;
