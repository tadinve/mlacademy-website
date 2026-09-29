"use client";

import Link from "next/link";
import { useState } from "react";
import DisqusComments from "../../components/DisqusComments";

export default function Class24Sept2025() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Class Overview", icon: "📚" },
    { id: "presentation", label: "Presentation", icon: "📊" },
    { id: "notebook", label: "Jupyter Notebook", icon: "📓" },
    { id: "routing", label: "Routing-Notebook", icon: "🗺️" },
    { id: "quiz", label: "Quiz", icon: "📝" },
    { id: "video", label: "Class Recording", icon: "🎥" }
  ];
  return (
    <main>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-4xl font-semibold mb-2">Class 2 - September 24, 2025</h1>
            <p className="text-xl text-[var(--muted)]">
              Branching: Decision Paths in Agentic Workflows
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link 
              className="btn !bg-green-600 hover:!bg-green-700 !text-white font-semibold px-6 py-3"
              href="/schedule"
            >
              🚀 Register for Future Classes
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Class Summary</h3>
          <p className="text-blue-800">
            Day 2 explores branching logic in agentic design: how to create workflows that adapt and make decisions. Includes slides, Colab notebook, quiz, and recording.
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
                    <li>• What is branching in agentic workflows?</li>
                    <li>• When and why to use decision paths</li>
                    <li>• Implementing conditional logic in chains</li>
                    <li>• Debugging and testing branches</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">Hands-on Practice</h3>
                  <ul className="space-y-2 text-[var(--muted)]">
                    <li>• Build a branching workflow in Colab</li>
                    <li>• Experiment with different decision criteria</li>
                    <li>• Analyze real-world branching use cases</li>
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
            <DisqusComments
              url="https://mlacademy.io/classes/sept-24-2025"
              identifier="class-sept-24-2025-overview"
              title="Class 2 Overview - Sept 24, 2025"
            />
          </div>
        )}

        {/* Presentation Tab */}
        {activeTab === "presentation" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">📊 Class Presentation</h2>
              <p className="text-[var(--muted)] mb-6">
                Slides covering branching logic, decision paths, and real-world agentic workflows.
              </p>
              {/* Google Slides Embed */}
              <div className="w-full">
                <iframe 
                  src="https://docs.google.com/presentation/d/1CyCjGHC_v5r6feu841Ars7zJxriJaHQJfTLLeNpgKBY/embed?start=false&loop=false&delayms=3000"
                  frameBorder="0" 
                  width="100%" 
                  height="600"
                  allowFullScreen={true}
                  className="rounded-lg shadow-lg"
                  title="Branching - Class 2"
                ></iframe>
              </div>
            </div>
            <DisqusComments
              url="https://mlacademy.io/classes/sept-24-2025/presentation"
              identifier="class-sept-24-2025-presentation"
              title="Class 2 Presentation - Sept 24, 2025"
            />
          </div>
        )}

        {/* Jupyter Notebook Tab */}
        {activeTab === "notebook" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">📓 Jupyter Notebook</h2>
              <p className="text-[var(--muted)] mb-6">
                Interactive Colab notebook: build and test branching workflows in agentic design.
              </p>
              <div className="w-full bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📓</div>
                  <h3 className="text-2xl font-semibold text-orange-900 mb-3">Colab Notebook</h3>
                  <p className="text-orange-800 mb-6 max-w-2xl mx-auto">
                    This notebook includes all code and exercises for Day 2. Open in Colab to run and experiment.
                  </p>
                  <a 
                    href="https://colab.research.google.com/drive/1tAZM9VnBsFL7nMqHCreZA15ICHAkspk6"
                    className="btn bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 Open in Colab
                  </a>
                </div>
              </div>
            </div>
            <DisqusComments
              url="https://mlacademy.io/classes/sept-24-2025/notebook"
              identifier="class-sept-24-2025-notebook"
              title="Class 2 Jupyter Notebook - Sept 24, 2025"
            />
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">📝 Knowledge Check Quiz</h2>
              <p className="text-[var(--muted)] mb-6">
                Test your understanding of branching and decision paths in agentic workflows.
              </p>
              {/* Google Forms Embed (replace with your link) */}
              <div className="w-full">
                <iframe 
                  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                  frameBorder="0" 
                  width="100%" 
                  height="600"
                  className="rounded-lg shadow-lg"
                  title="Class 2 Knowledge Check Quiz"
                ></iframe>
              </div>
            </div>
            <DisqusComments
              url="https://mlacademy.io/classes/sept-24-2025/quiz"
              identifier="class-sept-24-2025-quiz"
              title="Class 2 Quiz - Sept 24, 2025"
            />
          </div>
        )}

        {/* Video Tab */}
        {activeTab === "video" && (
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">🎥 Class Recording</h2>
              <p className="text-[var(--muted)] mb-6">
                Full recording of Day 2: Branching and Decision Paths in Agentic Design.
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
                  title="Class 2 Recording - Branching"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
            <DisqusComments
              url="https://mlacademy.io/classes/sept-24-2025/video"
              identifier="class-sept-24-2025-video"
              title="Class 2 Recording - Sept 24, 2025"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/classes/sept-22-2025"
            className="btn bg-gray-600 text-white hover:bg-gray-700"
          >
            ← Previous Class
          </Link>
          <div className="text-center">
            <p className="text-[var(--muted)] mb-2">Next Class</p>
            <p className="font-semibold">October 6, 2025</p>
            <p className="text-sm text-[var(--muted)]">Advanced Patterns</p>
          </div>
          <Link 
            href="/schedule"
            className="btn bg-[var(--accent)] text-[#0b0f17] hover:bg-[var(--accent)]/90"
          >
            Next Class →
          </Link>
        </div>
      </div>
    </main>
  );
}
