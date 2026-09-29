import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="space-y-6">
        <section className="card">
          <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
          
          {/* Venkatesh Tadinada */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-6 mb-4">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <Image
                  src="/images/team/venkatesh.webp"
                  alt="Venkatesh Tadinada - Chief Instructor"
                  width={200}
                  height={200}
                  sizes="200px"
                  quality={80}
                  className="rounded-lg shadow-md mx-auto md:mx-0"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-[var(--accent)]">Venkatesh Tadinada - Chief Instructor</h3>
                <div className="text-[var(--muted)] space-y-4">
                  <p>
                    Venkatesh Tadinada is passionate about data, driven by Edward Deming&apos;s philosophy: &quot;In God we trust, all others bring data.&quot;
                    For 25 years, he has been at the forefront of data innovation with Fortune 100 companies.
                  </p>
                  <p>
                    As a strategic AI consultant, he defines and implements AI strategies that transform business operations. 
                    His journey from Data Warehouses to Machine Learning and AI positions him uniquely to architect enterprise-scale solutions.
                  </p>
                  <p>
                    His AI solutions are deployed across major semiconductor and pharmaceutical corporations, saving millions of dollars 
                    and dramatically improving operational efficiencies. Venkatesh has co-founded and exited multiple startups, combining 
                    his Masters in Computer Science and MBA to deliver transformational results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Peeya Iwagoshi */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-6 mb-4">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <Image
                  src="/images/team/peeya.webp"
                  alt="Peeya Iwagoshi - Co-Instructor"
                  width={200}
                  height={200}
                  sizes="200px"
                  quality={80}
                  className="rounded-lg shadow-md mx-auto md:mx-0"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-[var(--accent)]">Peeya Iwagoshi - Co-Instructor</h3>
                <div className="text-[var(--muted)] space-y-4">
                  <p>
                    Peeya is a Senior Cloud Systems Architect with extensive Machine Learning and AI Engineering experience. 
                    As a GCP Certified Cloud Architect and Data Engineer, he brings deep technical expertise in cloud-native 
                    AI solutions and scalable system design.
                  </p>
                  <p>
                    A certified PMP, PSM I, ASM, and ASPO, Peeya excels at technical program management of cross-functional teams 
                    developing solutions under tight deadlines. He works directly with customers to assess needs, gather requirements, 
                    and translate them into actionable development work.
                  </p>
                  <p>
                    His leadership experience includes serving as technical VP of a startup, leading SW/HW teams that developed 
                    world-class products generating over $20 million in new sales. From 10GE transport systems to fleet management 
                    solutions, Peeya&apos;s diverse background in both hardware and software engineering provides unique insights for 
                    our AI and machine learning curriculum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>• Comprehensive ML and AI courses with hands-on approach</li>
            <li>• Real-world project implementations and case studies</li>
            <li>• Industry best practices from experienced practitioners</li>
            <li>• Community-driven learning environment</li>
            <li>• Regular updates with latest research and techniques</li>
            <li>• Direct mentorship from industry experts</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">Learn by Doing</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>• Build real projects, not just follow tutorials</li>
                <li>• Implement algorithms from first principles</li>
                <li>• Work on industry-relevant problems</li>
                <li>• Deploy your models to production</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">Comprehensive Support</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>• Expert instructors with 25+ years of experience</li>
                <li>• Active community of learners and practitioners</li>
                <li>• Regular live sessions and office hours</li>
                <li>• Personalized feedback on your projects</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-[var(--muted)]">
            Have questions or want to learn more? Reach out to us at{" "}
            <a href="mailto:info@mlacademy.io" className="text-[var(--accent)] hover:underline">
              info@mlacademy.io
            </a>
          </p>
          <p className="text-[var(--muted)] mt-3">
            Follow us on social media for the latest updates and insights in machine learning and AI.
          </p>
        </section>
      </div>
    </main>
  );
}