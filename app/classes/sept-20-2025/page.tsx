"use client";

import Link from "next/link";
import { useState } from "react";
import DisqusComments from "../../components/DisqusComments";

export default function Class20Sept2025() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Class Overview", icon: "📚" },
    { id: "presentation", label: "Presentation", icon: "📊" },
    { id: "notebook", label: "Jupyter Notebook", icon: "📓" },
    { id: "quiz", label: "Quiz", icon: "📝" },
    { id: "video", label: "Class Recording", icon: "🎥" }
  ];

  return (
    <main>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-4xl font-semibold mb-2">Class 0 - September 20, 2025</h1>
            <p className="text-xl text-[var(--muted)]">
              Introduction to Agentic Design Patterns
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link 
              className="btn !bg-green-600 hover:!bg-green-700 !text-white font-semibold px-6 py-3"
              href="/register"
            >
              🚀 Register for Future Classes
            </Link>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Class Summary</h3>
          <p className="text-blue-800">
            Welcome to our first class! Today we covered the fundamentals of AI agents and introduced 
            the core concepts that will guide us through the next 12 weeks. This session includes our 
            presentation slides, hands-on Jupyter notebook, knowledge quiz, and full class recording.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">Today&apos;s Learning Objectives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">Core Concepts</h3>
                  <ul className="space-y-2 text-[var(--muted)]">
                    <li>• What are AI agents and why they matter</li>
                    <li>• Fundamental agent architectures</li>
                    <li>• Key components of agentic systems</li>
                    <li>• Real-world applications and use cases</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">Hands-on Practice</h3>
                  <ul className="space-y-2 text-[var(--muted)]">
                    <li>• Setting up your development environment</li>
                    <li>• Building your first simple agent</li>
                    <li>• Understanding agent communication patterns</li>
                    <li>• Testing and debugging agent behavior</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tabs.slice(1).map((tab) => (
                <div key={tab.id} className="card text-center">
                  <div className="text-3xl mb-2">{tab.icon}</div>
                  <h3 className="font-semibold mb-2">{tab.label}</h3>
                  <button 
                    onClick={() => setActiveTab(tab.id)}
                    className="btn w-full"
                  >
                    View {tab.label}
                  </button>
                </div>
              ))}
            </div>

            {/* Disqus Comments for Overview */}
            <DisqusComments
              url="https://mlacademy.io/classes/sept-20-2025"
              identifier="class-sept-20-2025-overview"
              title="Class 0 Overview - Sept 20, 2025"
            />
          </div>
        )}

        {/* Presentation Tab */}
        {activeTab === "presentation" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">📊 Class Presentation</h2>
              <p className="text-[var(--muted)] mb-6">
                Today&apos;s slides covering the introduction to agentic design patterns and foundational concepts.
              </p>
              
              {/* Google Slides Embed */}
              <div className="w-full">
                <iframe 
                  src="https://docs.google.com/presentation/d/1pkRQ3enmrqcAIW4N6ByXs5BhP1_I0rXM9sL1mTagFZ4/embed?start=false&loop=false&delayms=3000"
                  frameBorder="0" 
                  width="100%" 
                  height="600"
                  allowFullScreen={true}
                  className="rounded-lg shadow-lg"
                  title="Introduction to Agentic Design Patterns - Class 0"
                ></iframe>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">📝 To Use Your Google Slides:</h4>
                <ol className="text-blue-800 space-y-1 text-sm">
                  <li>1. Open your Google Slides presentation</li>
                  <li>2. Click &quot;File&quot; → &quot;Share&quot; → &quot;Publish to web&quot;</li>
                  <li>3. Choose &quot;Embed&quot; and copy the iframe code</li>
                  <li>4. Replace &quot;YOUR_PRESENTATION_ID&quot; above with your actual presentation ID</li>
                </ol>
              </div>

              <div className="mt-6 flex gap-3">
                <a 
                  href="https://docs.google.com/presentation/d/1pkRQ3enmrqcAIW4N6ByXs5BhP1_I0rXM9sL1mTagFZ4/export/pdf" 
                  className="btn bg-blue-600 text-white hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 Download PDF
                </a>
                <a 
                  href="https://docs.google.com/presentation/d/1pkRQ3enmrqcAIW4N6ByXs5BhP1_I0rXM9sL1mTagFZ4/edit" 
                  className="btn bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Open in New Tab
                </a>
              </div>
            </div>

            {/* Disqus Comments for Presentation */}
            <DisqusComments
              url="https://mlacademy.io/classes/sept-20-2025/presentation"
              identifier="class-sept-20-2025-presentation"
              title="Class 0 Presentation - Sept 20, 2025"
            />
          </div>
        )}

        {/* Jupyter Notebook Tab */}
        {activeTab === "notebook" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">📓 Jupyter Notebook</h2>
              <p className="text-[var(--muted)] mb-6">
                Interactive coding exercises and examples from today&apos;s class. Follow along with the code 
                and experiment with the concepts we covered.
              </p>
              
              {/* Notebook Preview with Colab Link */}
              <div className="w-full bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📓</div>
                  <h3 className="text-2xl font-semibold text-orange-900 mb-3">Interactive Jupyter Notebook</h3>
                  <p className="text-orange-800 mb-6 max-w-2xl mx-auto">
                    This notebook contains hands-on coding exercises from today&apos;s class. Click &quot;Open in Colab&quot; below 
                    to access the full interactive notebook where you can run and modify code cells.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-left text-sm text-orange-800 mb-6 max-w-2xl mx-auto">
                    <div>
                      <h4 className="font-semibold mb-2">📚 What&apos;s Included:</h4>
                      <ul className="space-y-1">
                        <li>• Setting up your development environment</li>
                        <li>• Building your first simple agent</li>
                        <li>• Agent communication patterns</li>
                        <li>• Testing and debugging examples</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">� Learning Objectives:</h4>
                      <ul className="space-y-1">
                        <li>• Understand agent architectures</li>
                        <li>• Implement basic agent behaviors</li>
                        <li>• Practice with real code examples</li>
                        <li>• Apply concepts from the presentation</li>
                      </ul>
                    </div>
                  </div>
                  
                  <a 
                    href="https://colab.research.google.com/drive/1tgyyRi8n-54ZBFyxXroBYV7ooT4TbQFu" 
                    className="btn bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 Open Interactive Notebook in Colab
                  </a>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a 
                  href="https://colab.research.google.com/drive/1tgyyRi8n-54ZBFyxXroBYV7ooT4TbQFu" 
                  className="btn bg-orange-600 text-white hover:bg-orange-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🚀 Open in Colab
                </a>
                <a 
                  href="https://drive.google.com/file/d/1tgyyRi8n-54ZBFyxXroBYV7ooT4TbQFu/view" 
                  className="btn bg-transparent border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📥 Download .ipynb
                </a>
                <a 
                  href="https://drive.google.com/file/d/1tgyyRi8n-54ZBFyxXroBYV7ooT4TbQFu/view" 
                  className="btn bg-gray-600 text-white hover:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  👁️ View on Drive
                </a>
              </div>
            </div>

            {/* Disqus Comments for Notebook */}
            <DisqusComments
              url="https://mlacademy.io/classes/sept-20-2025/notebook"
              identifier="class-sept-20-2025-notebook"
              title="Class 0 Jupyter Notebook - Sept 20, 2025"
            />
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">📝 Knowledge Check Quiz</h2>
              <p className="text-[var(--muted)] mb-6">
                Test your understanding of today&apos;s concepts with this interactive quiz. 
                Take your time and feel free to refer back to the materials.
              </p>
              
              {/* Google Forms Embed */}
              <div className="w-full">
                <iframe 
                  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                  frameBorder="0" 
                  width="100%" 
                  height="600"
                  className="rounded-lg shadow-lg"
                  title="Class 0 Knowledge Check Quiz"
                ></iframe>
              </div>
              
              <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">📝 To Use Your Google Forms Quiz:</h4>
                <ol className="text-purple-800 space-y-1 text-sm">
                  <li>1. Create your quiz in Google Forms</li>
                  <li>2. Click the &quot;Send&quot; button and select the embed icon (&lt;&gt;)</li>
                  <li>3. Copy the iframe code</li>
                  <li>4. Replace &quot;YOUR_FORM_ID&quot; above with your actual form ID</li>
                  <li>5. Optionally enable &quot;Make this a quiz&quot; for automatic grading</li>
                </ol>
              </div>

              <div className="mt-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Quiz Instructions:</h4>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Take your time - there&apos;s no time limit</li>
                    <li>• You can retake the quiz as many times as needed</li>
                    <li>• Refer back to the presentation and notebook for help</li>
                    <li>• Ask questions in the comments if you&apos;re stuck</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Disqus Comments for Quiz */}
            <DisqusComments
              url="https://mlacademy.io/classes/sept-20-2025/quiz"
              identifier="class-sept-20-2025-quiz"
              title="Class 0 Quiz - Sept 20, 2025"
            />
          </div>
        )}

        {/* Video Tab */}
        {activeTab === "video" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">🎥 Class Recording</h2>
              <p className="text-[var(--muted)] mb-6">
                Full recording of today&apos;s class session. Perfect for review or if you missed any part of the live session.
              </p>
              
              {/* YouTube Embed */}
              <div className="w-full">
                <iframe 
                  src="https://www.youtube.com/embed/0WI8tWK9xcw"
                  frameBorder="0" 
                  width="100%" 
                  height="450"
                  allowFullScreen={true}
                  className="rounded-lg shadow-lg"
                  title="Class 0 Recording - Introduction to Agentic Design Patterns"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">🎥 To Use Your YouTube Video:</h4>
                <ol className="text-red-800 space-y-1 text-sm">
                  <li>1. Upload your class recording to YouTube</li>
                  <li>2. Set the video privacy to &quot;Unlisted&quot; or &quot;Public&quot;</li>
                  <li>3. Copy the video ID from the URL (after /watch?v=)</li>
                  <li>4. Replace &quot;YOUR_VIDEO_ID&quot; above with your actual video ID</li>
                  <li>5. Consider adding timestamps in the video description</li>
                </ol>
              </div>

              <div className="mt-6">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">⏱️</div>
                    <div className="font-semibold">Duration</div>
                    <div className="text-[var(--muted)]">2 hours 15 mins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📅</div>
                    <div className="font-semibold">Recorded</div>
                    <div className="text-[var(--muted)]">Sept 20, 2025</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="font-semibold">Attendees</div>
                    <div className="text-[var(--muted)]">32 students</div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Video Chapters:</h4>
                  <ul className="text-green-800 space-y-1">
                    <li>• 00:00 - Welcome & Introductions</li>
                    <li>• 15:30 - What are AI Agents?</li>
                    <li>• 45:00 - Agent Architecture Deep Dive</li>
                    <li>• 1:20:00 - Hands-on Coding Session</li>
                    <li>• 1:50:00 - Q&A and Next Steps</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Disqus Comments for Video */}
            <DisqusComments
              url="https://mlacademy.io/classes/sept-20-2025/video"
              identifier="class-sept-20-2025-video"
              title="Class 0 Recording - Sept 20, 2025"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/courses/agentic-design-patterns"
            className="btn bg-gray-600 text-white hover:bg-gray-700"
          >
            ← Back to Course
          </Link>
          <div className="text-center">
            <p className="text-[var(--muted)] mb-2">Next Class</p>
            <p className="font-semibold">September 22, 2025</p>
            <p className="text-sm text-[var(--muted)]">Prompt Chaining for Agentic Design</p>
          </div>
          <Link 
            href="/classes/sept-22-2025"
            className="btn bg-[var(--accent)] text-[#0b0f17] hover:bg-[var(--accent)]/90"
          >
            Next Class →
          </Link>
        </div>
      </div>
    </main>
  );
}