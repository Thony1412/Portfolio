"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")!.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-[#0a0a0a] text-white p-6">
      <div className="container mx-auto md:flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:underline">Thony Ivan Briza</Link>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-md md:flex-grow md:flex md:justify-end">
            <a href="#project" onClick={handleSmoothScroll} className="block mt-4 md:inline-block md:mt-0 hover:underline mr-4">Work</a>
            <a href="#skills" onClick={handleSmoothScroll} className="block mt-4 md:inline-block md:mt-0 hover:underline mr-4">Skills</a>
            <a href="#about" onClick={handleSmoothScroll} className="block mt-4 md:inline-block md:mt-0 hover:underline mr-4">About</a>
            <a href="#contacts" onClick={handleSmoothScroll} className="block mt-4 md:inline-block md:mt-0 hover:underline">Contacts</a>
          </div>
        </div>
      </div>
    </nav>
  );
}