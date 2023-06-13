import React from "react";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {

    const [state, handleSubmit] = useForm("xwkjgkje");

    if (state.succeeded) {
        return (
            <div className='text-center'>
                <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center'>
                    Thank you! I will contact you shortly.
                </p>
            </div>
        );
    }

    return (
        <section id='contact' className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=1910+State+Street,+San+Diego,+CA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                Address
                            </h2>
                            <p className="mt-1">
                                1910 State St. <br />
                                San Diego, CA 92101
                            </p>
                        </div>
                        <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                E-Mail
                            </h2>
                            <a className="text-indigo-400 leading-relaxed" href="mailto: jeremy.lehmann06@icloud.com">
                                jeremy.lehmann06@icloud.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                Phone
                            </h2>
                            <p className="leading-relaxed">
                                619-928-1372
                            </p>
                            <a className="title-font font-semibold text-white tracking-widest text-xs mt-4"
                                href='https://www.linkedin.com/in/jeremy-lehmann/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me!
                    </h2>
                    <p className="leading-relaxed mb-5">
                        I am fueled by a genuine passion for programming and a love for continuous learning. As a full-stack developer, I bring a versatile skill set and a collaborative mindset to the table. I thrive in fast-paced environments and I am excited to contribute my skills to create exceptional software solutions.
                        <br />
                        <br />
                        Let's connect! If you are seeking a passionate and dedicated full-stack developer who loves to learn and contribute to innovative projects, I would be thrilled to explore opportunities where I can help drive your organization's success.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            style={{
                                background: 'none',
                                boxShadow: 'inset 0 0 0px 1000px rgb(31, 41, 55)',
                                WebkitTextFillColor: '#fff',
                            }}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            E-Mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            style={{
                                background: 'none',
                                boxShadow: 'inset 0 0 0px 1000px rgb(31, 41, 55)',
                                WebkitTextFillColor: '#fff',
                            }}
                        />
                        <ValidationError
                            prefix='Email'
                            type='email'
                            name='email'
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            style={{
                                background: 'none',
                                boxShadow: 'inset 0 0 0px 1000px rgb(31, 41, 55)',
                                WebkitTextFillColor: '#fff',
                            }}
                        />
                        <ValidationError
                            prefix='Message'
                            field='message'
                            errors={state.errors}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}