import React from "react";
import Image from "next/image";

const AdvancedCourses: React.FC = () => {  

  return (
  <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mx-5 mt-10 mb-10">

            <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main text-blue-900 font-extrabold mt-10">  
                Advanced Courses   
            </h1>  
            <div className="grid xl-lg:grid-cols-0 sm:grid-cols-4 grid-cols-1 xl-lg:gap-10 gap-5 m-0 mt-10">  
                <a className="hover:scale-105 duration-200 transition-all rounded-md w-72  shadow-md shadow-black" href="/compulsory/1">  
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">  
                        <div>  
                            <Image   
                                alt="programming fundamentals"   
                                loading="lazy"   
                                width={450}   
                                height={300}   
                                decoding="async"   
                                className="object-cover w-screen"   
                                src="/Images/Ac1.jpeg"   
                            />  
                        </div>  
                        <div className="px-4 flex justify-center items-center h-[70px]">  
                            <span>Artificial Intelligence</span>  
                        </div>  
                    </div>  
                </a>  
                <a className="hover:scale-105 duration-200 transition-all rounded-md w-72 shadow-md shadow-black mr-0" href="/compulsory/2">  
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">  
                        <div>  
                            <Image   
                                alt="nextjs"   
                                loading="lazy"   
                                width={450}   
                                height={300}   
                                decoding="async"   
                                className="object-cover h-auto w-screen"   
                                src="/Images/Ac2.jpeg"   
                            />  
                        </div>  
                        <div className="px-4 flex justify-center items-center h-[70px]">  
                            <span>Web 3 and Metaverse</span>  
                        </div>  
                    </div>  
                </a>  
                <a className="hover:scale-105 duration-200 transition-all rounded-md w-72 shadow-md shadow-black " href="/compulsory/3">  
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">  
                        <div>  
                            <Image   
                                alt="Earn as You Learn"   
                                loading="lazy"   
                                width={450}   
                                height={300}   
                                decoding="async"   
                                className="object-cover h-72 w-screen "   
                                src="/Images/Ac3.jpg"   
                            />  
                        </div>  
                        <div className="px-4 flex justify-center items-center h-[90px]">  
                            <span>Cloud-Native <br /> Computing</span>  
                        </div>  
                    </div>  
                </a>
                <a className="hover:scale-105 duration-200 transition-all rounded-md w-72 shadow-md shadow-black " href="/compulsory/3">  
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">  
                        <div>  
                            <Image   
                                alt="Earn as You Learn"   
                                loading="lazy"   
                                width={450}   
                                height={300}   
                                decoding="async"   
                                className="object-cover w-screen "   
                                src="/Images/Ac4.jpeg"   
                            />  
                        </div>  
                        <div className="px-4 flex justify-center items-center h-[70px]">  
                            <span>Ambient Computing <br /> and IoT</span>  
                        </div>  
                    </div>  
                </a>
                <a className="hover:scale-105 duration-200 transition-all rounded-md w-72 shadow-md shadow-black " href="/compulsory/3">  
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">  
                        <div>  
                            <Image   
                                alt="Earn as You Learn"   
                                loading="lazy"   
                                width={450}   
                                height={300}   
                                decoding="async"   
                                className="object-cover w-screen "   
                                src="/Images/Ac5.jpeg"   
                            />  
                        </div>  
                        <div className="px-4 flex justify-center items-center h-[70px]">  
                            <span>Genomics and Bioinformatics</span>  
                        </div>  
                    </div>  
                </a>
                <a className="hover:scale-105 duration-200 transition-all rounded-md w-72 shadow-md shadow-black  " href="/compulsory/3">  
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">  
                        <div>  
                            <Image   
                                alt="picture"   
                                loading="lazy"   
                                width={450}   
                                height={300}   
                                decoding="async"   
                                className="object-cover h-64 w-screen "   
                                src="/Images/Ac6.jpeg"   
                            />  
                        </div>  
                        <div className="px-4 flex justify-center items-center h-[90px]">  
                            <span>Network Programmability and Automation</span>  
                        </div>  
                    </div>  
                </a>  
            </div>  
            </div>
);
};
   export default AdvancedCourses;  

  