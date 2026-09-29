import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Course Schedule - ML Academy",
  description: "View our upcoming course schedule and register for Machine Learning and AI courses. Check course dates, duration, and registration details.",
  keywords: "course schedule, machine learning courses, AI training, registration, course dates, ML Academy",
};

export default function Schedule() {
  const courses = [
    {
      id: "agentic-patterns",
      title: "Agentic Patterns",
      duration: "12 weeks",
      startDate: "Sept 20, 2025",
      endDate: "Dec 13, 2025",
      link: "/courses/agentic-design-patterns",
      status: "Open for Registration"
    },
    {
      id: "llm-from-scratch",
      title: "Build LLM from Scratch",
      duration: "16 weeks",
      startDate: "TBD",
      endDate: "TBD",
      link: "/courses/build-llm-from-scratch",
      status: "Coming Soon"
    },
    {
      id: "ai-content-pipeline",
      title: "AI Content Creation Pipeline",
      duration: "10 weeks",
      startDate: "TBD",
      endDate: "TBD",
      link: "/courses/ai-content-creation-pipeline",
      status: "Coming Soon"
    },
    {
      id: "mcp",
      title: "Model Context Protocol (MCP)",
      duration: "8 weeks",
      startDate: "TBD",
      endDate: "TBD",
      link: "/courses/model-context-protocol",
      status: "Coming Soon"
    },
    {
      id: "nlp",
      title: "Natural Language Processing",
      duration: "14 weeks",
      startDate: "TBD",
      endDate: "TBD",
      link: "/courses/natural-language-processing",
      status: "Coming Soon"
    },
    {
      id: "slm-finetuning",
      title: "SLM & FineTuning",
      duration: "12 weeks",
      startDate: "TBD",
      endDate: "TBD",
      link: "/courses/slm-finetuning",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Course Schedule
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Plan your learning journey with our upcoming courses. All courses include live sessions, 
            hands-on projects, and expert guidance from industry professionals.
          </p>
        </header>

        {/* Course Schedule Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">Upcoming Courses</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    End Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link 
                        href={course.link}
                        className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                      >
                        {course.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.startDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.endDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.status === "Open for Registration" ? (
                        <Link 
                          href="https://gdg.community.dev/events/details/google-gdg-cloud-san-jose-presents-learn-to-build-ai-agents/"
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors inline-block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register Now
                        </Link>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {course.status}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Registration Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-900 mb-2">
                Ready to Register?
              </h3>
              <p className="text-blue-800 mb-4">
                To secure your spot in any of our courses, please reach out to us directly. We&apos;ll guide you through 
                the registration process and answer any questions you may have about the curriculum, schedule, or requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="mailto:contact@mlacademy.io" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <Link 
                  href="/about"
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-2-4h4m-4 0l-1-1m1 1l-1 1M3 12h2m0 0l1-1m-1 1l1 1m-1-1h4" />
                  </svg>
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Prerequisites</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-red-600 text-sm font-bold">1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Strong Knowledge of Python (Required)
                </h3>
                <p className="text-gray-700">
                  You should be comfortable with Python programming fundamentals, object-oriented programming, 
                  and have experience building projects with Python.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-yellow-600 text-sm font-bold">2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Pandas and NumPy Experience (Helpful)
                </h3>
                <p className="text-gray-700">
                  Familiarity with data manipulation using Pandas and numerical computing with NumPy will 
                  accelerate your learning in our courses.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-green-600 text-sm font-bold">3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  PyTorch and CUDA Knowledge (Great to Have)
                </h3>
                <p className="text-gray-700">
                  Experience with PyTorch for deep learning and CUDA for GPU programming will be valuable, 
                  especially for our advanced courses, but we&apos;ll cover these topics as needed.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Don&apos;t worry if you don&apos;t meet all the &quot;helpful&quot; or &quot;great to have&quot; prerequisites.
              Our courses are designed to build up your skills progressively, and our instructors provide comprehensive 
              support throughout the learning journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}