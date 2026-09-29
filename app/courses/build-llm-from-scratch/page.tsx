import { Metadata } from "next";
import Image from "next/image";
import DisqusComments from "../../components/DisqusComments";

export const metadata: Metadata = {
  title: "Build LLM from Scratch - ML Academy",
  description: "Learn how to create, train, and tweak large language models (LLMs) by building one from the ground up! Master the complete process from initial design to fine-tuning.",
  keywords: "LLM, large language models, machine learning, deep learning, transformers, neural networks, AI, PyTorch, training, fine-tuning",
};

export default function BuildLLMFromScratch() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <Image
              src="/images/courses/llm-from-scratch.webp"
              alt="Build LLM from Scratch Course"
              width={800}
              height={400}
              sizes="(max-width: 1024px) 100vw, 800px"
              quality={70}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-4">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">Coming Soon</span>
            <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Advanced Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Build LLM from Scratch
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Learn how to create, train, and tweak large language models (LLMs) by building one from the ground up! 
            Master the complete process from initial design and creation, to pretraining on a general corpus, and fine-tuning for specific tasks.
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
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Plan and code all the parts of an LLM</li>
                  <li>• Prepare datasets suitable for LLM training</li>
                  <li>• Fine-tune LLMs for text classification</li>
                  <li>• Implement attention mechanisms and transformers</li>
                  <li>• Build tokenizers and embedding layers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Topics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pretraining strategies and techniques</li>
                  <li>• Model optimization and scaling</li>
                  <li>• Instruction tuning and RLHF</li>
                  <li>• Evaluation metrics and benchmarking</li>
                  <li>• Deployment and inference optimization</li>
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
                <h3 className="text-lg font-semibold text-gray-800">Weeks 1-4: Foundation</h3>
                <p className="text-gray-700">Understanding transformer architecture, attention mechanisms, and basic language modeling</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 5-8: Implementation</h3>
                <p className="text-gray-700">Building your first LLM from scratch, tokenization, and embedding strategies</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 9-12: Training</h3>
                <p className="text-gray-700">Pretraining on large datasets, optimization techniques, and distributed training</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 13-16: Advanced</h3>
                <p className="text-gray-700">Fine-tuning, instruction following, safety alignment, and deployment strategies</p>
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
                  <h3 className="text-lg font-medium text-gray-900">Strong Python Programming</h3>
                  <p className="text-gray-700">Proficiency in Python, object-oriented programming, and experience with data structures</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-yellow-600 text-sm font-bold">+</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">PyTorch Experience</h3>
                  <p className="text-gray-700">Familiarity with PyTorch for deep learning, neural network training, and GPU programming</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm font-bold">~</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Machine Learning Background</h3>
                  <p className="text-gray-700">Understanding of basic ML concepts, neural networks, and deep learning fundamentals</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Build Your Own LLM?
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Based on{" "}
                <a 
                  href="https://www.amazon.com/Build-Large-Language-Model-Scratch/dp/1633437167/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  &quot;Build a Large Language Model (From Scratch)&quot;
                </a>
                {" "}by Sebastian Raschka
              </p>
              <div className="space-y-3">
                <p className="text-lg font-medium text-gray-800">Course launches soon!</p>
                <p className="text-gray-600">Sign up for updates to be notified when registration opens.</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Disqus Comments */}
        <DisqusComments
          url="https://mlacademy.io/courses/build-llm-from-scratch"
          identifier="build-llm-from-scratch"
          title="Build LLM from Scratch"
        />
      </div>
    </div>
  );
}