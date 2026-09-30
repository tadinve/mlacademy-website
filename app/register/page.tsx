import type { Metadata } from "next";
import Link from "next/link";
import { currentRegistrationUrl } from "../../lib/registration";

export const metadata: Metadata = {
  title: "Register - ML Academy",
  description:
    "Use ML Academy's permanent registration page to access the current live registration flow for upcoming classes.",
  keywords: "ML Academy registration, AI course registration, machine learning class signup",
};

export default function RegisterPage() {
  return (
    <main>
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-4">Register for ML Academy</h1>
        <p className="text-lg text-[var(--muted)] max-w-3xl">
          This page is the permanent ML Academy registration URL. Use it to reach the current live registration flow even if the downstream event listing changes.
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-semibold mb-3">Current Registration Flow</h2>
        <p className="text-[var(--muted)] mb-6">
          Registration for the active cohort is handled through our current event listing. If you arrived from an older email, QR code, or bookmark, you are in the right place.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={currentRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn !bg-green-600 hover:!bg-green-700 !text-white font-semibold px-6 py-3"
          >
            Open Registration
          </a>
          <Link
            href="/schedule"
            className="btn bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17] px-6 py-3"
          >
            View Full Schedule
          </Link>
        </div>
      </div>

      <div className="card mt-6">
        <h2 className="text-xl font-semibold mb-3">Need Help?</h2>
        <p className="text-[var(--muted)] mb-4">
          If the external registration page does not load, review the course schedule or contact ML Academy directly and we will route you to the current enrollment option.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/schedule" className="btn">
            Browse Schedule
          </Link>
          <a
            href="mailto:info@mlacademy.io"
            className="btn bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17]"
          >
            Email ML Academy
          </a>
        </div>
      </div>
    </main>
  );
}