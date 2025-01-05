// Navbar Component
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <ul className="flex justify-center list-none m-0 p-0">
        <li className="mx-5">
          <Link href="/home" className="text-white text-xl transition-colors duration-300 hover:text-blue-500">Home</Link>
        </li>
        <li className="mx-5">
          <Link href="/about" className="text-white text-xl transition-colors duration-300 hover:text-blue-500">About</Link>
        </li>
        <li className="mx-5">
          <Link href="/contact" className="text-white text-xl transition-colors duration-300 hover:text-blue-500">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
