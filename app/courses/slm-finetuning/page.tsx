import { Metadata } from "next";
import Image from "next/image";
import DisqusComments from "../../components/DisqusComments";

export const metadata: Metadata = {
  title: "SLM & FineTuning - ML Academy",
  description: "Master Small Language Models and advanced fine-tuning techniques. Learn efficient model training, optimization strategies, and deployment of specialized language models.",
  keywords: "small language models, SLM, fine-tuning, model optimization, efficient training, specialized models, model compression, PEFT",
};

export default function SLMFineTuning() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <div className="w-full h-64 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl font-bold mb-2">SLM</h1>
                <p className="text-xl">Small Language Models & FineTuning</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">Coming Soon</span>
            <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm">Advanced Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            SLM & FineTuning
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master Small Language Models and advanced fine-tuning techniques. Learn efficient model training, optimization strategies, 
            and deployment of specialized language models for specific domains and tasks.
          </p>
        </header>

        {/* Course Content */}
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Why Small Language Models?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advantages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lower computational requirements</li>
                  <li>• Faster inference and training</li>
                  <li>• Edge deployment capabilities</li>
                  <li>• Cost-effective operations</li>
                  <li>• Specialized domain expertise</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Applications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mobile and IoT devices</li>
                  <li>• Real-time applications</li>
                  <li>• Privacy-sensitive use cases</li>
                  <li>• Industry-specific solutions</li>
                  <li>• Resource-constrained environments</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              What You&apos;ll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Small Language Models</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• SLM architecture and design principles</li>
                  <li>• Model compression techniques</li>
                  <li>• Knowledge distillation strategies</li>
                  <li>• Pruning and quantization methods</li>
                  <li>• Efficient training approaches</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Fine-Tuning</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Parameter-Efficient Fine-Tuning (PEFT)</li>
                  <li>• LoRA and QLoRA techniques</li>
                  <li>• Adapter-based fine-tuning</li>
                  <li>• Multi-task and continual learning</li>
                  <li>• Domain adaptation strategies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Course Structure
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 1-3: SLM Fundamentals</h3>
                <p className="text-gray-700">Introduction to small language models, architecture design, and efficiency principles</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 4-6: Model Compression</h3>
                <p className="text-gray-700">Pruning, quantization, knowledge distillation, and optimization techniques</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 7-9: Fine-Tuning Mastery</h3>
                <p className="text-gray-700">PEFT methods, LoRA, adapters, and parameter-efficient training strategies</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 10-12: Deployment & Production</h3>
                <p className="text-gray-700">Model deployment, inference optimization, and real-world applications</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Hands-On Projects
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom SLM Development</h3>
                  <p className="text-gray-700">Build a small language model from scratch for a specific domain or task</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Model Compression Pipeline</h3>
                  <p className="text-gray-700">Implement compression techniques to reduce model size while maintaining performance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">LoRA Fine-Tuning System</h3>
                  <p className="text-gray-700">Develop a parameter-efficient fine-tuning system using LoRA and QLoRA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Edge Deployment Solution</h3>
                  <p className="text-gray-700">Deploy optimized models for edge devices and mobile applications</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Technologies & Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Frameworks</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• PyTorch & Transformers</li>
                  <li>• PEFT Library</li>
                  <li>• BitsAndBytes</li>
                  <li>• TensorRT</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Optimization</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• ONNX & OpenVINO</li>
                  <li>• TensorFlow Lite</li>
                  <li>• Neural Compressor</li>
                  <li>• Quantization tools</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Deployment</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Docker & Kubernetes</li>
                  <li>• Edge runtime engines</li>
                  <li>• Mobile frameworks</li>
                  <li>• Cloud platforms</li>
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
                  <h3 className="text-lg font-medium text-gray-900">Deep Learning Expertise</h3>
                  <p className="text-gray-700">Strong understanding of neural networks, transformers, and PyTorch</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-yellow-600 text-sm font-bold">+</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Language Model Experience</h3>
                  <p className="text-gray-700">Prior experience with language models, training, or our LLM course</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm font-bold">~</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Advanced Python & MLOps</h3>
                  <p className="text-gray-700">Advanced programming skills and familiarity with model deployment pipelines</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Master Efficient Language Models?
              </h2>
              <div className="space-y-3">
                <p className="text-lg font-medium text-gray-800">Duration: 12 weeks • Focus: Efficiency & Specialization</p>
                <p className="text-gray-600">Build powerful, efficient language models that run anywhere.</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Disqus Comments */}
        <DisqusComments
          url="https://mlacademy.io/courses/slm-finetuning"
          identifier="slm-finetuning"
          title="SLM & FineTuning"
        />
      </div>
    </div>
  );
}