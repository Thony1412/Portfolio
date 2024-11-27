// pages/about.js
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 lg:px-20 py-10">
      {/* Left Section with Image */}
      <div className="flex-shrink-0 lg:w-1/3 w-full mb-8 lg:mb-0">
        <Image
          src="/Profile-picture.png" // Replace with your image path in the public folder
          alt="Profile Picture"
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right Section with Text */}
      <div className="lg:w-2/3 w-full">
        <h1 className="text-4xl font-bold mb-6">ABOUT ME</h1>
        <p className="text-2xl font-semibold mb-4">
          I am a front-end developer based in Sydney. Has Mechanical Engineering background.
        </p>
        <p className="text-lg leading-7 mb-6">
          I am a front-end developer based in Sydney looking for exciting opportunities. 
          Has Mechanical Engineering background. Likes to focus on accessibility when 
          developing. Passionate and curious about solving problems. Currently, I&apos;m exploring 
          ReactJS, Webflow, and a bit of designing. While I am not programming, I enjoy playing 
          football, photography, and playing Valorant. Learning more to improve skills.
        </p>
        <a
          href="#"
          className="text-yellow-500 hover:text-yellow-600 font-medium text-lg"
        >
          MORE ABOUT ME
        </a>
      </div>
    </div>
  );
}
