import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ArrowLeft, LockKeyhole, Mail, Shield } from "lucide-react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your password reset authentication logic here
    console.log("Requesting password reset link for:", email);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 text-foreground">
      <div className="w-full max-w-md">
        {/* Navigation Link */}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 sm:mb-8 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Sign In
        </Link>

        {/* Form Container Card */}
        <div className="rounded-2xl sm:rounded-3xl border bg-card p-5 sm:p-8 shadow-sm">
          <div className="mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl sm:rounded-2xl border bg-muted" aria-hidden="true">
              <LockKeyhole className="h-6 w-6 text-foreground" />
            </div>

            <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight">
              Reset Password
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Enter your email address and we'll send you a secure
              password reset link.
            </p>
          </div>

          {/* Form Setup */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email-input" className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />

                <input
                  type="email"
                  id="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border bg-background py-3 pl-10 pr-4 outline-none text-sm sm:text-base focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-primary py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Send Reset Link
            </button>
          </form>

          <div className="my-6 border-t" aria-hidden="true" />

          {/* Context Advisory Block */}
          <div className="flex items-start gap-3 rounded-2xl border bg-muted/30 p-4" aria-label="Security Notice">
            <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />

            <div>
              <p className="text-sm font-medium text-foreground">
                Security Notice
              </p>

              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Password reset links expire automatically and can only
                be used once for security purposes.
              </p>
            </div>
          </div>

          {/* Alternative Direct Link */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="font-medium text-foreground hover:underline rounded px-1 outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}