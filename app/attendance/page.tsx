export default function Attendance() {
  return (
    <main>
      <div className="card">
        {/* Google Form Iframe */}
        <div className="w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdeR0sduQND5Ain3W5C6mzvq9tKkKJCqB4forE8Cbp4xk6rSw/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-lg border border-gray-200"
            title="Attendance Form"
          >
            Loading attendance form...
          </iframe>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-blue-800">Having trouble with the form?</h3>
          <p className="text-blue-700 mb-3">
            If the form doesn&apos;t load properly, you can access it directly using the link below:
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdeR0sduQND5Ain3W5C6mzvq9tKkKJCqB4forE8Cbp4xk6rSw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-blue-600 text-white hover:bg-blue-700"
          >
            Open Attendance Form in New Tab
          </a>
        </div>
      </div>

      <div className="card mt-6">
        <h2 className="text-xl font-semibold mb-4">Attendance Policy</h2>
        <div className="space-y-3 text-[var(--muted)]">
          <p>
            • Please mark your attendance at the beginning of each session
          </p>
          <p>
            • Attendance is required for course completion and certification
          </p>
          <p>
            • If you&apos;re joining late, please still mark your attendance
          </p>
          <p>
            • For technical issues, contact us at{" "}
            <a href="mailto:info@mlacademy.io" className="text-[var(--accent)] hover:underline">
              info@mlacademy.io
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}