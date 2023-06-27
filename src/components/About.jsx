import React from "react";
const ResumeFile = process.env.PUBLIC_URL + "/jeremy-lehmann-resume.pdf";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Jeremy.
                        <br className="hidden lg:inline-block" /> I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I was born in Lausanne, in the French part of Switzerland. I found a passion for software development and decided to enroll in a bootcamp with San Diego State University. During this bootcamp, I learned about various languages and technologies, front-end and back-end. I am fueled by a love for continuous learning, and I thoroughly enjoy collaborating and working in teams. I find it invigorating to leverage the collective expertise and diverse perspectives of my fellow developers to tackle challenges and achieve shared goals.
                        <br />
                        <br />
                        <i>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”</i> - Martin Fowler
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                        >
                            Work With Me!
                        </a>
                        <div>
                            <a
                                href={ResumeFile}
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                                download
                            >
                                Download My Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}