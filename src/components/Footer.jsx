import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 px-7">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ashish Raj.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/AshishRaj04"
            className="hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-raj-230239280"
            className="hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://x.com/adven_raj?t=sqLgHxyDIOxlT5yJsC-fUw&s=09"
            className="hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter size={28} />
          </a>
        </div>

        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-xs">Designed & Developed by Ashish Raj</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
