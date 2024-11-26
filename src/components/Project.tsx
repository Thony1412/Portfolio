export default function Project() {
    return (
        <div className="bg-black text-white py-10 px-4 md:px-20">
            <h2 className="text-4xl font-bold text-center mb-10">Featured Projects</h2>
            <p className="text-center text-lg mb-10">
                Here are some of the selected projects that showcase my passion for front-end development.
            </p>
            <div className="md:flex md:items-center md:gap-10">
                {/* Div 1 - Image */}
                <div className="md:w-96">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <img
                            src="/Profile-picture.png"
                            alt="Project Screenshot"
                            className="w-full rounded-lg"
                        />
                        <span className="block text-sm text-center mt-2 bg-gray-700 px-2 py-1 rounded-full">
                            Conceptual Work
                        </span>
                    </div>
                </div>
                {/* Div 2 - Content */}
                <div className="mt-10 md:mt-0 md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4">Promotional landing page for our favorite show</h3>
                    <p className="mb-6 text-gray-300">
                        Teamed up with a designer to breathe life into a promotional webpage for our beloved show,
                        Adventure Time. Delivered a fully responsive design with dynamic content capabilities,
                        seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
                    </p>
                    <div className="mb-6">
                        <p>
                            <span className="font-semibold">Year: </span>2023
                        </p>
                        <p>
                            <span className="font-semibold">Role: </span>Front-end Developer
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="px-6 py-2 bg-green-500 text-black font-semibold rounded-md hover:bg-green-600"
                        >
                            Live Demo
                        </a>
                        <a
                            href="#"
                            className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600"
                        >
                            See on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
