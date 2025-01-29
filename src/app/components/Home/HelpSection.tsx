'use client'
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";
import fglawkit from '../../../assets/fg.png'
import sortmylaw from '../../../assets/sortmyschool.png'
import pwp from '../../../assets/pwp.jpg'
import free from '../../../assets/free.jpg'
const HelpSection: React.FC = () => {
    return (
        <div className="bg-white py-16 px-6 lg:px-6 2xl:px-40 lg:mt-20">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6 lg:space-y-10">
                    <div className="mb-12 flex items-center justify-center">
                        <h1 className="text-4xl lg:text-7xl font-bold text-gray-800 leading-tight">
                            How Can <br /><span className="text-blue-600 text-5xl lg:text-7xl underline">I Help You?</span>
                        </h1>
                    </div>


                    <a href="https://www.youtube.com/@fglawkit" className="bg-stone-100 hover:bg-[#FD976D] hover:scale-105 hover:transform hover:transition hover:ease-in-out p-6 lg:p-10 rounded-3xl shadow-md flex flex-col justify-between">
                        <div className="flex items-center justify-start text-5xl mb-4 rounded-lg p-1 bg-stone-100 w-fit">
                            <Image width={100} height={100} src={fglawkit} alt="fg" className="rounded-full" />
                        </div>
                        <h2 className="text-2xl lg:text-4xl font-semibold text-black mb-4 font-serif">FG Lawkit</h2>
                        <p className="text-black mb-6">
                            Provides opportunities and free resources in accessible formats to lawyers & students in northern India.
                        </p>
                        <p className="text-blue-600 font-semibold flex items-center">
                            Click Here <span className="ml-1">&rarr;</span>
                        </p>
                    </a>
                    <a href="https://sortmylawschool.com/subject" className="bg-stone-100 hover:bg-[#C9B1FB] hover:scale-105 hover:transform hover:transition hover:ease-in-out p-6 lg:p-10 rounded-3xl shadow-md flex flex-col justify-between">
                        <div className="flex items-center justify-center text-purple-500 text-5xl mb-4 rounded-lg p-1 bg-stone-100 w-fit">
                        <Image width={100} height={100} src={sortmylaw} alt="sortmylaw" />
                        </div>
                        <h2 className="text-2xl lg:text-4xl font-semibold text-black mb-4 font-serif">sortmylawschool.com</h2>
                        <p className="text-black mb-6">
                            Offers free notes to help students across India excel in their semester and competitive exams.                        </p>
                        <p className="text-blue-600 font-semibold flex items-center">
                            Click Here <span className="ml-1">&rarr;</span>
                        </p>
                    </a>
                </div>
                <div className="space-y-6 lg:space-y-10">
                    <a href="https://www.youtube.com/@Placement_Without_Politics/featured" className=" bg-stone-100 hover:bg-[#FDD46B] hover:scale-105 hover:transform hover:transition hover:ease-in-out p-6 lg:p-10 rounded-3xl shadow-md flex flex-col justify-between">
                        <div className="flex items-center justify-start text-yellow-600 text-5xl mb-4 rounded-lg p-1 bg-stone-100 w-fit">
                        <Image width={100} height={100} src={pwp} alt="pwp" className="rounded-full" />
                        </div>
                        <h2 className="text-2xl lg:text-4xl font-semibold text-black mb-4 font-serif">Placement Without Politics (PWP)</h2>
                        <p className="text-black mb-6">
                            Creates awareness about internships and job opportunities, especially for students from smaller towns and cities in the finance, tech, and sustainability domains.
                        </p>
                        <p className="text-blue-600 font-semibold flex items-center">
                            Click Here <span className="ml-1">&rarr;</span>
                        </p>
                    </a>


                    <a href="https://www.linkedin.com/in/parthjain98/" className="bg-stone-100 hover:bg-[#5DCDF1] hover:scale-105 hover:transform hover:transition hover:ease-in-out p-6 lg:p-10 rounded-3xl shadow-md flex flex-col justify-between">
                        <div className="flex items-center justify-start text-blue-500 text-5xl mb-4 rounded-lg p-1 bg-stone-100 w-fit">
                        <Image width={100} height={100} src={free} alt="free" />
                        </div>
                        <h2 className="text-2xl lg:text-4xl font-semibold text-black mb-4 font-serif">Resources for All !</h2>
                        <p className="text-black mb-6">
                            All resources are free for those from marginalized backgrounds or first-generation learners. For more info, connect with me on LinkedIn!
                        </p>
                        <p className="text-blue-600 font-semibold flex items-center">
                            Click Here <span className="ml-1">&rarr;</span>
                        </p>
                    </a>

                    <a href="https://www.linkedin.com/in/parthjain98/" className="bg-stone-100 hover:bg-[#FDD46B] hover:scale-105 hover:transform hover:transition hover:ease-in-out p-6 lg:p-10 rounded-3xl shadow-md flex flex-col justify-between">
                        {/* <div className="flex items-center justify-start text-gray-500 text-5xl mb-4">
                            <i className="fas fa-ellipsis-h"></i>
                        </div> */}
                        <h2 className="text-2xl lg:text-4xl font-semibold text-black mb-4 font-serif">... let's talk :)</h2>
                        <p className="text-black mb-6">
                            Connect with me on LinkedIn
                        </p>
                        <p className="text-blue-600 font-semibold flex items-center">
                            Click Here <span className="ml-1">&rarr;</span>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
