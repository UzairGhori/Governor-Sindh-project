import React from 'react'
import Image from 'next/image'

const CoreCourses = () => {
  return (
    <div>
        <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mx-5 mt-10 mb-10">  
            <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main text-blue-900 font-extrabold mt-10">  
                Core Courses Sequence  
            </h1>  
            <div className="grid xl-lg:grid-cols-0 sm:grid-cols-4 grid-cols-1 xl-lg:gap-10 gap-5 m-0 mt-10">  
                <a className="hover:scale-105 duration-200 transition-all rounded-md w-64 shadow-md shadow-black" href="/compulsory/1">  
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">  
                        <div>  
                            <Image   
                                alt="programming fundamentals"   
                                loading="lazy"   
                                width={450}   
                                height={300}   
                                decoding="async"   
                                className="object-cover w-full h-72"   
                                src="/Images/d1.jpeg"   
                            />  
                        </div>  
                        <div className="px-4 flex justify-center items-center h-[70px]">  
                            <span>Programming Fundamentals</span>  
                        </div>  
                    </div>  
                </a>  
                <a className="hover:scale-105 duration-200 transition-all rounded-md w-64 shadow-md shadow-black mr-0" href="/compulsory/2">  
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">  
                        <div>  
                            <Image   
                                alt="nextjs"   
                                loading="lazy"   
                                width={450}   
                                height={300}   
                                decoding="async"   
                                className="object-cover w-full h-72"   
                                src="/Images/d2.jpeg"   
                            />  
                        </div>  
                        <div className="px-4 flex justify-center items-center h-[70px]">  
                            <span>Web2 Using NextJS</span>  
                        </div>  
                    </div>  
                </a>  
                <a className="hover:scale-105 duration-200 transition-all rounded-md w-64 shadow-md shadow-black " href="/compulsory/3">  
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">  
                        <div>  
                            <Image   
                                alt="Earn as You Learn"   
                                loading="lazy"   
                                width={450}   
                                height={300}   
                                decoding="async"   
                                className="object-cover w-full h-72"   
                                src="/Images/d3.jpeg"   
                            />  
                        </div>  
                        <div className="px-4 flex justify-center items-center h-[70px]">  
                            <span>Earn as You Learn</span>  
                        </div>  
                    </div>  
                </a>  
            </div>  
        </div> 
    </div>
  )
}

export default CoreCourses