import React from 'react';

export default function Skills() {
  return (
    <div className="min-h-full bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Front-End */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Front-End</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-lg">HTML and CSS3</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">JavaScript</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">React</span>
              </li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Frameworks</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-lg">Next.js</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">Tailwind CSS</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">Bootstrap</span>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Tools</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-lg">Git</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">GitHub</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">GitHub Desktop</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">Visual Studio Code</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
