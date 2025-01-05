// About Component
export default function About() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl text-blue-600 text-center mb-5">About Me</h2>
        <p className="text-lg text-gray-600 text-justify leading-loose mb-8">
          I am an enthusiastic IT professional with a strong passion for technology...
        </p>
  
        <h3 className="text-2xl text-blue-600 mb-4">Education</h3>
        <ul className="list-none pl-5 mb-8">
          <li className="text-lg mb-2">Matriculation: 80% (FBISE Board)</li>
          <li className="text-lg mb-2">First Year: 71% (FBISE Board)</li>
        </ul>
  
        <h3 className="text-2xl text-blue-600 mb-4">Certifications and Courses</h3>
        <ul className="list-none pl-5 mb-8">
          <li className="text-lg mb-2">Completed English Language Courses</li>
          <li className="text-lg mb-2">MS Office Training</li>
          <li className="text-lg mb-2">Participated in Figma Hackathon</li>
        </ul>
  
        <h3 className="text-2xl text-blue-600 mb-4">Technical Skills</h3>
        <ul className="list-none pl-5 mb-8">
          <li className="text-lg mb-2">HTML, CSS</li>
          <li className="text-lg mb-2">TypeScript</li>
          <li className="text-lg mb-2">JavaScript</li>
          <li className="text-lg mb-2">Next.js (Currently Learning)</li>
          <li className="text-lg mb-2">C Language (Currently Learning)</li>
        </ul>
  
        <h3 className="text-2xl text-blue-600 mb-4">Notable Projects</h3>
        <ul className="list-none pl-5 mb-8">
          <li className="text-lg mb-2"><strong>Figma Hackathon Project</strong> - A fully responsive design built as part of a hackathon event.</li>
          <li className="text-lg mb-2"><strong>TypeScript Assignments</strong> - Completed 45 assignments to strengthen my knowledge in TypeScript.</li>
          <li className="text-lg mb-2"><strong>Portfolio Website</strong> - Showcasing my work and learning progress.</li>
        </ul>
  
        <h3 className="text-2xl text-blue-600 mb-4">Why IT?</h3>
        <p className="text-lg text-gray-600 text-justify leading-loose">
          Technology has always been my passion. I am excited about the endless possibilities that IT offers...
        </p>
      </section>
    );
  }
  