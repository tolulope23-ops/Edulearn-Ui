import { useState } from "react";

function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        location: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    //Update the form whenever a user types into an input.
    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prev) => ({ ...prev, [name]: value}));
    }

    //A simple password-strength indicator.
    const passwordRequirements = [
        {
            label: "At least 8 characters",
            met: formData.password.length >= 8,
        },
        {
            label: "One uppercase letter (A-Z)",
            met: /[A-Z]/.test(formData.password),
        },
        {
            label: "One lowercase letter (a-z)",
            met: /[a-z]/.test(formData.password),
        },
        {
            label: "At least one number (0-9)",
            met: /[0-9]/.test(formData.password),
        },
        {
            label: "At least one special character (!@#$%)",
            met: /[^A-Za-z0-9]/.test(formData.password),
        },
    ];

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Registration data:", formData);
    }

    return (
        <main className="flex min-h-dvh items-center justify-center bg-[#f7f9fc] px-4 py-2">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:px-7">
                {/* Page heading */}
                <section className="mt-3 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-heading">
                        Create an account
                    </h1>

                    <p className="mt-1 text-base leading-5 text-body">
                        Join our community of learners today.
                    </p>
                </section>

                {/* Registration form */}
                <form onSubmit={handleSubmit} className="mt-4 space-y-2">

                    {/* Full name */}
                    <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-heading">
                        Full Name
                    </label>

                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="h-10 w-full rounded-2xl border border-slate-200 bg-transparent px-4 text-sm text-heading outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                    </div>

                    {/* Email */}
                    <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-heading">
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        // autoComplete="email"
                        placeholder="johndoe@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-10 w-full rounded-2xl border border-slate-200 bg-transparent px-4 text-sm text-heading outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-semibold text-heading">
                            Password
                        </label>

                        <div className="relative">
                            <input id="password" name="password" type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="h-10 w-full rounded-2xl border border-slate-200 bg-transparent px-4 pr-12 text-sm text-heading outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />

                            <button type="button" onClick={() => setShowPassword((prev) => !prev)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                            >
                            {showPassword ? (
                                <span className="text-xs font-medium">Hide</span>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            )}
                            </button>
                        </div>

                        {/* Password requirements */}
                        {formData.password.length > 0 && (
                            <div className="mt-2 space-y-2">

                                {/* Requirements summary */}
                                <div className="flex items-center justify-between text-xs">
                                    <span className="font-semibold text-heading"> Password requirements </span>
                                </div>

                                {/* Individual requirements */}
                                <div className="space-y-1.5" aria-live="polite">
                                    {passwordRequirements.map((requirement) => (
                                        <div key={requirement.label} className="flex items-center gap-2">
                                            {requirement.met ? (
                                                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-green-600" aria-hidden="true">
                                                    <path
                                                        d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    />
                                                </svg>
                                            ) : (
                                                <span className="h-4 w-4 shrink-0 rounded-full border border-slate-300" />
                                            )}

                                            <span className={`text-xs ${requirement.met ? "text-green-600" : "text-slate-500"}`}>
                                                {requirement.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Location */}
                    <div>
                        <label htmlFor="location" className="mb-2 block text-sm font-semibold text-heading">
                            Location
                        </label>

                        <input id="location" name="location" type="text"
                            autoComplete="address-level2"
                            placeholder="Enter your country, city, eg. Ghana, Nigeria"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="h-10 w-full rounded-2xl border border-slate-200 bg-transparent px-4 text-sm text-heading outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                    </div>

                    {/* Terms and conditions
                    <div className="flex items-start gap-3 pt-2">
                    <input
                        id="terms"
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={(event) => setAcceptedTerms(event.target.checked)}
                        required
                        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-primary"
                    />

                    <label
                        htmlFor="terms"
                        className="text-sm leading-[18px] text-body"
                    >
                        By creating an account, I agree to the
                        <a href="/terms" className="text-primary hover:underline">
                        Terms &amp; Conditions
                        </a>
                        {" "}and{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                        </a>.
                    </label>
                    </div> */}

                    {/* Create account button */}
                    <button type="submit" className="h-10 w-full rounded-2xl bg-primary text-base font-bold text-white shadow-sm transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                        Create Free Account
                    </button>
                </form>

                {/* Social sign-up
                <section className="mt-8">
                    <p className="text-center text-sm text-slate-400">
                    Or continue with
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-transparent text-sm font-semibold text-heading transition hover:bg-slate-100"
                    >
                        Replace with your Google icon
                        <span className="text-lg font-bold text-blue-600">G</span>
                        Google
                    </button>

                    <button
                        type="button"
                        className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-transparent text-sm font-semibold text-heading transition hover:bg-slate-100"
                    >
                        Replace with your Apple icon
                        <span className="text-lg text-heading">●</span>
                        Apple
                    </button>
                    </div>
                </section> */}

                {/* Login link */}
                <p className="mt-3 text-center text-sm text-body">
                    Already have an account?{" "}
                    <a href="/signin" className="font-bold text-primary hover:text-primary-hover"> SignIn </a>
                </p>
            </div>
        </main>
    );
}

export default RegisterPage;