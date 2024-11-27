import Image from 'next/image';

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
                    <Image
                    src="/Lionstech.png"
                    alt="Project Screenshot"
                    className="w-full rounded-lg"
                    width={500} // specify the width
                    height={500} // specify the height
                    />
                    <span className="block text-sm text-center mt-2 bg-gray-700 px-2 py-1 ">
                    Marketing Website
                    </span>
                </div>
                </div>
                {/* Div 2 - Content */}
                <div className="mt-10 md:mt-0 md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4">A Marketing website integrated with chatbot</h3>
                    <p className="mb-6 text-gray-300">
                    This is a marketing website that features an integrated chatbot. Built with HTML,
                     CSS, JavaScript, and Bootstrap, the site offers users an interactive experience with a 
                     chatbot powered by Botpress. Visitors can leave real-time reviews using Firebase as a Database, where 
                     comments from other users are visible to everyone. To ensure the reviews are authentic, 
                     users must log in with their Google account before they can post a comment.
                    </p>
                    <div className="mb-6">
                        <p>
                            <span className="font-semibold">Year: </span>2024
                        </p>
                        <p>
                            <span className="font-semibold">Role: </span>Full-stack developer
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a
                            target="_blank" href="https://shop.lionstech.shop/"
                            className="px-6 py-2 bg-[#b3ff00] text-black font-semibold rounded-md hover:bg-green-600"
                        >
                            Live Demo
                        </a>
                        {/* <a
                            href="#"
                            className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600"
                        >
                            See on GitHub
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
