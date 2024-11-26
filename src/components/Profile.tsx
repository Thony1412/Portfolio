import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import Image from 'next/image';

export default function Profile() {
    return (
      <div className="flex flex-col md:flex-row w-screen h-full">
        {/* Div 1: Profile Section */}
        <div className="bg-[#0a0a0a] w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center p-8 text-center lg:mt-20 2xl:mt-48">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            HI, I AM <br></br><span className="text-[#b3ff00]">Thony Ivan Briza.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl lg:ml-14">
          I am a passionate front-end developer dedicated to creating 
          user-friendly and responsive websites. This portfolio was built using Next.js.
          </p>
          <div className="flex space-x-4 mt-8">
            <button className="bg-[#b3ff00] text-black font-semibold py-2 px-4 rounded-full hover:bg-[#a0e600]">
              Contact Me
            </button>
            <a target="_blank" href="https://www.linkedin.com/in/thony-ivan-briza-58325a244/" className="p-3">
             <BsLinkedin size={40} />
            </a>
            <a target="_blank" href="https://github.com/Thony1412" className="p-3">
             <IoLogoGithub size={40} />
            </a>
          </div>
        </div>
  
        {/* Div 2: Profile Picture */}
        <div className="bg-[#0a0a0a] w-full md:w-1/2 h-1/2 md:h-full flex justify-center p-4 ">
        <Image
            src="/Profile-picture.png"
            alt="Profile"
            className="rounded-2xl w-full h-96 md:h-5/6 md:w-3/4 lg:w-2/3 object-cover shadow-lg"
            width={500} // specify the width
            height={500} // specify the height
        />
        </div>
      </div>
    );
  }
  