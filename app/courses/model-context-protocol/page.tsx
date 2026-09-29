import { Metadata } from "next";
import Image from "next/image";
import DisqusComments from "../../components/DisqusComments";

export const metadata: Metadata = {
  title: "Model Context Protocol (MCP) - ML Academy",
  description: "Master the Model Context Protocol for building robust AI applications. Learn to integrate multiple AI models, manage context effectively, and create scalable AI systems.",
  keywords: "Model Context Protocol, MCP, AI integration, context management, AI architecture, model orchestration, AI systems",
};

export default function ModelContextProtocol() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <div className="w-full h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">MCP</h1>
                <p className="text-xl">Model Context Protocol</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">Coming Soon</span>
            <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Advanced Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Model Context Protocol (MCP)
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master the Model Context Protocol for building robust, scalable AI applications. Learn to integrate multiple AI models, 
            manage context effectively, and create enterprise-grade AI systems that can handle complex workflows.
          </p>
        </header>

        {/* Course Content */}
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              What You&apos;ll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Core MCP Concepts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Understanding Model Context Protocol architecture</li>
                  <li>• Context management and state handling</li>
                  <li>• Multi-model integration patterns</li>
                  <li>• Protocol design and implementation</li>
                  <li>• Error handling and recovery strategies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Applications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Building AI agent orchestration systems</li>
                  <li>• Implementing context-aware applications</li>
                  <li>• Scaling MCP for enterprise use</li>
                  <li>• Security and privacy considerations</li>
                  <li>• Performance optimization techniques</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Course Structure
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 1-2: MCP Fundamentals</h3>
                <p className="text-gray-700">Introduction to Model Context Protocol, architecture overview, and basic concepts</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 3-4: Implementation Basics</h3>
                <p className="text-gray-700">Setting up MCP servers, client implementation, and basic protocol communication</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 5-6: Advanced Features</h3>
                <p className="text-gray-700">Context management, state persistence, and complex integration patterns</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 7-8: Production Deployment</h3>
                <p className="text-gray-700">Scaling, monitoring, security best practices, and real-world applications</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Prerequisites
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm font-bold">!</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Strong Programming Background</h3>
                  <p className="text-gray-700">Proficiency in Python or TypeScript, understanding of APIs and web protocols</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-yellow-600 text-sm font-bold">+</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">AI/ML Experience</h3>
                  <p className="text-gray-700">Basic understanding of AI models, API integration, and machine learning concepts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm font-bold">~</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">System Architecture Knowledge</h3>
                  <p className="text-gray-700">Understanding of distributed systems, microservices, and protocol design</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Master Model Context Protocol?
              </h2>
              <div className="space-y-3">
                <p className="text-lg font-medium text-gray-800">Duration: 8 weeks</p>
                <p className="text-gray-600">Build enterprise-grade AI systems with robust context management.</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Disqus Comments */}
        <DisqusComments
          url="https://mlacademy.io/courses/model-context-protocol"
          identifier="model-context-protocol"
          title="Model Context Protocol (MCP)"
        />
      </div>
    </div>
  );
}