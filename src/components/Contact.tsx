import Link from 'next/link';
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col items-left min-h-screen bg-[#0a0a0a] text-white 2xl:px-48">
      <div className="max-w-md w-full 2xl:mt-80 xl:mt-72 lg:mt-60 md:mt-52 sm:mt-32 mt-10">
        {/* Heading */}
        <h1 className="2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold mb-4">LET&apos;S CONNECT</h1>

        {/* Email */}
        <p className="text-lg mb-2">
          Say hello at{' '}
          <a
            href="mailto:robertgarcia@gmail.com"
            className="text-lime-400 underline hover:text-lime-500"
          >
            brizathonyivand@gmail.com
          </a>
        </p>

        {/* Resume */}
        <p className="text-lg mb-6">
          For more info, here&apos;s my{' '}
          <Link href="#" legacyBehavior>
            <a className="text-lime-400 underline hover:text-lime-500">
              resume
            </a>
          </Link>
        </p>
        <div className="flex">
          <a target="_blank" href="https://www.linkedin.com/in/thony-ivan-briza-58325a244/" className="p-3">
            <BsLinkedin size={40} />
          </a>
          <a target="_blank" href="https://github.com/Thony1412" className="p-3">
            <FaGithubSquare size={40} />
          </a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100009465007679" className="p-3">
            <FaFacebookSquare size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}