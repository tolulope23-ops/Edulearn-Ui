import { useState } from "react";
import { Link } from "react-router-dom";

function SignInPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

  const [showPassword, setShowPassword] = useState(false);

    //Update form values as the user types.
    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prev) => ({...prev, [name]: value}));
    };

    // Handle form submission.
    function handleSubmit(event) {
        event.preventDefault();

        // Connect to the login API later.
        console.log("Login data:", formData);
    }

    return (
        <main className="flex min-h-dvh items-center justify-center bg-[#f7f9fc] px-4 py-2 sm:px-6">
            <div className="flex w-full max-w-md flex-col rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm sm:px-7">

                {/* Page heading */}
                <section className="mt-3 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-heading">
                        Welcome back
                    </h1>

                    <p className="mt-1 text-base leading-5 text-body">
                        SignIn to continue your learning experience.
                    </p>
                </section>

                {/* Sign in form */}
                <form onSubmit={handleSubmit} className="mt-4 space-y-3">

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-heading">
                            Email
                        </label>

                        <input id="email" name="email" type="email" autoComplete="email"
                            placeholder="johndoe@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-10 w-full rounded-xl border border-slate-200 bg-transparent px-4 text-sm text-heading outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-semibold text-heading">
                            Password
                        </label>

                        <div className="relative">

                            {/* Lock icon */}
                            {/* <svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                                aria-hidden="true"
                            >
                                <rect x="4" y="10" width="16" height="11" rx="2" />
                                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                                <circle cx="12" cy="15" r="1" />
                            </svg> */}

                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="h-10 w-full rounded-xl border border-slate-200 bg-transparent pl-3 pr-12 text-sm text-heading outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />

                            {/* Show / hide password */}
                            <button type="button" onClick={() => setShowPassword((prev) => !prev)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                            >
                                {showPassword ? (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                                    <path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c6.5 0 10 7 10 7a16 16 0 0 1-3.1 3.9M6.2 6.2C3.5 8 2 12 2 12s3.5 7 10 7c1.1 0 2.1-.2 3-.5" />
                                </svg>
                                ) : (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Forgot password */}
                    {/* <div className="flex justify-end">
                        <Link to="/forgot-password"
                            className="text-sm font-semibold text-primary hover:text-primary-hover">
                            Forgot Password?
                        </Link>
                    </div> */}

                    {/* Sign in button */}
                   <button type="submit" className="h-10 w-full rounded-2xl bg-primary text-base font-bold text-white shadow-sm transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                        Sign In
                    </button>
                </form>

                {/* Social sign in
                <section className="mt-10">

                    <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-slate-200"/>
                        <span className="text-sm text-slate-400">
                            Or continue with
                        </span>
                        <div className="h-px flex-1 bg-slate-200"/>
                    </div>

                <div className="mt-8 grid grid-cols-2 gap-4">

                    Google
                    <button type="button" className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-transparent text-sm font-semibold text-heading transition hover:bg-slate-100">
                        <span className="text-xl font-bold text-blue-600">G</span>
                        Google
                    </button>

                    Apple
                    <button type="button" className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-transparent text-sm font-semibold text-heading transition hover:bg-slate-100">
                        Replace with your Apple icon
                        <span className="text-xl text-heading">●</span>
                        Apple
                    </button>

                </div>
                </section> */}

                {/* Create account link */}
                <footer className="mt-auto pt-5 text-center text-sm text-body">
                    Don't have an account?{" "}
                    <Link to="/register" className="font-bold text-primary hover:text-primary-hover">
                        Create one
                    </Link>
                </footer>
            </div>
        </main>
    );
}

export default SignInPage;



