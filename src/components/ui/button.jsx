import { Link } from "react-router-dom";

function Button({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  fullWidth = false,
  onClick,
  to,
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-button font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary-light",
    light: "bg-white text-primary hover:bg-slate-100",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-5 py-3 text-sm",
    large: "px-6 py-4 text-base",
  };

  const className = [
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

   return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
