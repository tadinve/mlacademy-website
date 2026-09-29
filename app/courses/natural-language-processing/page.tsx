import { Metadata } from "next";
import Image from "next/image";
import DisqusComments from "../../components/DisqusComments";

export const metadata: Metadata = {
  title: "Natural Language Processing - ML Academy",
  description: "Dive deep into language models, transformers, and modern NLP techniques. Build applications that understand and generate human language with state-of-the-art methods.",
  keywords: "natural language processing, NLP, transformers, language models, text analysis, sentiment analysis, machine learning, deep learning",
};

export default function NaturalLanguageProcessing() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <div className="w-full h-64 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-2">NLP</h1>
                <p className="text-xl">Natural Language Processing</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">Coming Soon</span>
            <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm">Intermediate to Advanced</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Natural Language Processing
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Dive deep into language models, transformers, and modern NLP techniques. Build applications that understand 
            and generate human language using state-of-the-art methods and frameworks.
          </p>
        </header>

        {/* Course Content */}
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              What You&apos;ll Master
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Core NLP Techniques</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Text preprocessing and tokenization</li>
                  <li>• Named Entity Recognition (NER)</li>
                  <li>• Part-of-speech tagging and parsing</li>
                  <li>• Sentiment analysis and classification</li>
                  <li>• Topic modeling and clustering</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Models</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Transformer architectures and attention</li>
                  <li>• BERT, GPT, and T5 model families</li>
                  <li>• Large language model fine-tuning</li>
                  <li>• Building conversational AI systems</li>
                  <li>• Multilingual and cross-lingual NLP</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Comprehensive Curriculum
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 1-3: NLP Fundamentals</h3>
                <p className="text-gray-700">Text processing, linguistic foundations, and classical NLP techniques</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 4-6: Machine Learning for NLP</h3>
                <p className="text-gray-700">Feature engineering, traditional ML models, and evaluation metrics</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 7-9: Deep Learning & Transformers</h3>
                <p className="text-gray-700">Neural networks for NLP, attention mechanisms, and transformer architecture</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 10-12: Modern Language Models</h3>
                <p className="text-gray-700">BERT, GPT models, fine-tuning strategies, and transfer learning</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 13-14: Applications & Projects</h3>
                <p className="text-gray-700">Building end-to-end NLP applications and capstone project development</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Hands-On Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Projects</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sentiment analysis system</li>
                  <li>• News classification pipeline</li>
                  <li>• Named entity extraction tool</li>
                  <li>• Text summarization engine</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Projects</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chatbot with intent recognition</li>
                  <li>• Question-answering system</li>
                  <li>• Language translation model</li>
                  <li>• Document search and retrieval</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Tools & Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Python Libraries</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• NLTK & spaCy</li>
                  <li>• Hugging Face Transformers</li>
                  <li>• scikit-learn</li>
                  <li>• Gensim</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Deep Learning</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• PyTorch</li>
                  <li>• TensorFlow</li>
                  <li>• Keras</li>
                  <li>• FastAPI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Cloud & Deployment</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Docker containers</li>
                  <li>• AWS/GCP services</li>
                  <li>• Model deployment</li>
                  <li>• API development</li>
                </ul>
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
                  <p className="text-gray-700">Proficiency in Python, data structures, and object-oriented programming</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-yellow-600 text-sm font-bold">+</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Machine Learning Basics</h3>
                  <p className="text-gray-700">Understanding of ML concepts, supervised learning, and basic statistics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm font-bold">~</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Deep Learning Knowledge</h3>
                  <p className="text-gray-700">Familiarity with neural networks and deep learning frameworks (helpful but not required)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Master Natural Language Processing?
              </h2>
              <div className="space-y-3">
                <p className="text-lg font-medium text-gray-800">Duration: 14 weeks • Projects: 8+ Hands-on Applications</p>
                <p className="text-gray-600">Build powerful NLP applications that understand and generate human language.</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Disqus Comments */}
        <DisqusComments
          url="https://mlacademy.io/courses/natural-language-processing"
          identifier="natural-language-processing"
          title="Natural Language Processing"
        />
      </div>
    </div>
  );
}