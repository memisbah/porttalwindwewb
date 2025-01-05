// Footer Component
export default function Footer() {
  return (
    <footer className="bg-black text-white py-5 text-center fixed bottom-0 left-0 w-full">
      <div className="mb-5">
        <h3 className="text-xl mb-3">FOR MORE DETAIL:</h3>
        <p>
          <a href="https://github.com/memisbah" className="hover:underline">
            Github
          </a>
        </p>
        <p>
          <a href="https://vercel.com/memisbahs-projects" className="hover:underline">
            Vercel
          </a>
        </p>
      </div>
    </footer>
  );
}
