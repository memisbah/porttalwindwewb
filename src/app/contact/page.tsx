<h1>Contact page</h1>// Contact Component
export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl text-blue-600 text-center mb-5">Contact Me</h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        If you have any questions or want to collaborate, feel free to reach out...
      </p>

      <h3 className="text-2xl text-blue-600 mb-4">Social Media</h3>
      <div><ul className="list-none text-center mb-8">
        <li><a href="https://github.com/memisbah" className="text-xl text-blue-600 border-2 border-blue-600 rounded-lg py-2 px-5 transition-colors duration-300 hover:bg-blue-600 hover:text-white">GitHub</a></li>
                                                   <br></br>
        <li><a href="https://vercel.com/memisbahs-projects" className="text-xl text-blue-600 border-2 border-blue-600 rounded-lg py-2 px-5 transition-colors duration-300 hover:bg-blue-600 hover:text-white">Vercel</a></li>
      </ul>
      </div>
      <h3 className="text-2xl text-blue-600 mb-4">Hobbies &amp; Interests</h3>
      <p className="text-lg text-gray-600 text-center mb-8">
        Outside of coding, I enjoy exploring new design trends...
      </p>

      <h3 className="text-2xl text-blue-600 mb-4">Future Goals</h3>
      <p className="text-lg text-gray-600 text-center">
        In the near future, I hope to expand my knowledge in full-stack development...
      </p>
    </div>
  );
}
