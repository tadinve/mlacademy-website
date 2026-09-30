"use client";

import Link from "next/link";
import { useState } from "react";
import DisqusComments from "../../components/DisqusComments";

export default function Class22Sept2025() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Class Overview", icon: "📚" },
    { id: "presentation", label: "Presentation", icon: "📊" },
    { id: "notebook", label: "Jupyter Notebook", icon: "📓" },
    { id: "homework", label: "Homework", icon: "🏠" },
    { id: "quiz", label: "Quiz", icon: "📝" },
    { id: "video", label: "Class Recording", icon: "🎥" }
  ];
        {/* Homework Tab */}
        {activeTab === "homework" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">🏠 Homework</h2>
              <p className="text-[var(--muted)] mb-6">
                Complete the assigned exercises in the homework Colab notebook.
              </p>
              <div className="w-full text-center">
                <a 
                  href="https://colab.research.google.com/drive/1Yliia9XFS3uOxkgwdcMPfybt8e10gUCt"
                  className="btn bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🏠 Open Homework in Colab
                </a>
              </div>
            </div>
          </div>
        )}

  return (
    <main>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-4xl font-semibold mb-2">Class 1 - September 22, 2025</h1>
            <p className="text-xl text-[var(--muted)]">
              Prompt Chaining for Agentic Design
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
            Day 1 dives into prompt chaining: why single prompts fail, how to build robust chains, and hands-on use cases. Includes slides, Colab notebook, quiz, and recording.
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
                className={`$ {
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
                    <li>• Why single prompts fail for complex tasks</li>
                    <li>• Building robust prompt chains</li>
                    <li>• Structured outputs (JSON) between steps</li>
                    <li>• Seven use cases with runnable scaffolds</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">Hands-on Practice</h3>
                  <ul className="space-y-2 text-[var(--muted)]">
                    <li>• Summarize → Quiz → Reflection chain</li>
                    <li>• Colab-ready notebook walkthrough</li>
                    <li>• Experiment with your own data</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
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
              {/* Homework Card */}
              <div className="card text-center">
                <div className="text-3xl mb-2">🏠</div>
                <h3 className="font-semibold mb-2">Homework</h3>
                <a
                  href="https://colab.research.google.com/drive/1Yliia9XFS3uOxkgwdcMPfybt8e10gUCt"
                  className="btn w-full bg-green-600 text-white hover:bg-green-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Homework
                </a>
              </div>
            </div>
            <DisqusComments
              url="https://mlacademy.io/classes/sept-22-2025"
              identifier="class-sept-22-2025-overview"
              title="Class 1 Overview - Sept 22, 2025"
            />
          </div>
        )}

        {/* Presentation Tab */}
        {activeTab === "presentation" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">📊 Class Presentation</h2>
              <p className="text-[var(--muted)] mb-6">
                Slides covering prompt chaining, structured outputs, and use cases.
              </p>
              {/* Google Slides Embed */}
              <div className="w-full">
                <iframe 
                  src="https://docs.google.com/presentation/d/1V1RHVM1X_6W5VregAgxXJxjCNV32m9HWiuer1E-Io5U/embed?start=false&loop=false&delayms=3000"
                  frameBorder="0" 
                  width="100%" 
                  height="600"
                  allowFullScreen={true}
                  className="rounded-lg shadow-lg"
                  title="Prompt Chaining - Class 1"
                ></iframe>
              </div>
            </div>
            <DisqusComments
              url="https://mlacademy.io/classes/sept-22-2025/presentation"
              identifier="class-sept-22-2025-presentation"
              title="Class 1 Presentation - Sept 22, 2025"
            />
          </div>
        )}

        {/* Jupyter Notebook Tab */}
        {activeTab === "notebook" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">📓 Jupyter Notebook</h2>
              <p className="text-[var(--muted)] mb-6">
                Interactive Colab notebook: prompt chaining, robust chains, structured outputs, and use cases.
              </p>
              <div className="w-full bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📓</div>
                  <h3 className="text-2xl font-semibold text-orange-900 mb-3">Colab Notebook</h3>
                  <p className="text-orange-800 mb-6 max-w-2xl mx-auto">
                    This notebook includes all code and exercises for Day 1. Open in Colab to run and experiment.
                  </p>
                  <a 
                    href="https://colab.research.google.com/drive/1_KL-hzucqPDgqTaYexRQyyHHCC71tskZ"
                    className="btn bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 Open in Colab
                  </a>
                </div>
              </div>
            </div>
            {/* Homework Section */}
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">🏠 Homework</h2>
              <p className="text-[var(--muted)] mb-6">
                Complete the assigned exercises in the homework Colab notebook.
              </p>
              <div className="w-full text-center">
                <a 
                  href="https://colab.research.google.com/drive/1Yliia9XFS3uOxkgwdcMPfybt8e10gUCt"
                  className="btn bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🏠 Open Homework in Colab
                </a>
              </div>
            </div>
            <DisqusComments
              url="https://mlacademy.io/classes/sept-22-2025/notebook"
              identifier="class-sept-22-2025-notebook"
              title="Class 1 Jupyter Notebook - Sept 22, 2025"
            />
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">📝 Knowledge Check Quiz</h2>
              <p className="text-[var(--muted)] mb-6">
                Test your understanding of prompt chaining and structured outputs.
              </p>
              {/* Google Forms Embed (replace with your link) */}
              <div className="w-full">
                <iframe 
                  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                  frameBorder="0" 
                  width="100%" 
                  height="600"
                  className="rounded-lg shadow-lg"
                  title="Class 1 Knowledge Check Quiz"
                ></iframe>
              </div>
            </div>
            <DisqusComments
              url="https://mlacademy.io/classes/sept-22-2025/quiz"
              identifier="class-sept-22-2025-quiz"
              title="Class 1 Quiz - Sept 22, 2025"
            />
          </div>
        )}

        {/* Video Tab */}
        {activeTab === "video" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">🎥 Class Recording</h2>
              <p className="text-[var(--muted)] mb-6">
                Full recording of Day 1: Prompt Chaining for Agentic Design.
              </p>
              {/* YouTube Embed (replace with your link) */}
              <div className="w-full">
                <iframe 
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  frameBorder="0" 
                  width="100%" 
                  height="450"
                  allowFullScreen={true}
                  className="rounded-lg shadow-lg"
                  title="Class 1 Recording - Prompt Chaining"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
            <DisqusComments
              url="https://mlacademy.io/classes/sept-22-2025/video"
              identifier="class-sept-22-2025-video"
              title="Class 1 Recording - Sept 22, 2025"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/classes/sept-20-2025"
            className="btn bg-gray-600 text-white hover:bg-gray-700"
          >
            ← Previous Class
          </Link>
          <div className="text-center">
            <p className="text-[var(--muted)] mb-2">Next Class</p>
            <p className="font-semibold">September 24, 2025</p>
            <p className="text-sm text-[var(--muted)]">Branching: Decision Paths in Agentic Workflows</p>
          </div>
          <Link 
            href="/classes/sept-24-2025"
            className="btn bg-[var(--accent)] text-[#0b0f17] hover:bg-[var(--accent)]/90"
          >
            Next Class →
          </Link>
        </div>
      </div>
    </main>
  );
}
