import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
       
        <a href="#" className="text-2xl font-bold">
          MyLogo
        </a>

       
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>

       
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <ul className="md:hidden bg-blue-700 p-4 space-y-4 text-lg text-center">
          <li>
            <a href="#" className="block hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
