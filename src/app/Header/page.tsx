import React from 'react'; 
import Image from 'next/image'; 

const Navbar: React.FC = () => {  
 return (  
       <div className="flex flex-col md:flex-row justify-around items-center bg-blue-600 w-full h-20 py-3">  
       <Image  
         alt="solo2"  
         loading="lazy"  
         width={200}  
         height={200}  
         className="w-36 h-40 mt-0 md:mt-20"  
         src="/Images/logoG.jpg"  
         style={{ color: 'transparent' }}  
       />  
 
       <div className="text-center mb-2 md:mb-0">  
         <h1 className="text-shadow text-2xl font-serif text-white py-2">  
           Tuition Free Education Program on Latest Technologies   
         </h1>  
       </div>  
 
       <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 font-semibold text-xl text-center">  
         <a href="/" className="mb-2 md:mb-0">  
           <div className="border-b border-[#1468a5] py-2 capitalize hover:underline">Home</div>  
         </a>  
         <a href="/Apply" className="mb-2 md:mb-0">  
           <div className="border-b border-[#1468a5] py-2 capitalize hover:underline">Apply</div>  
         </a>  
         <a href="/Jobs" className="mb-2 md:mb-0">  
           <div className="border-b border-[#1468a5] py-2 capitalize hover:underline">Jobs</div>  
         </a>  
         <a href="/Result" className="mb-2 md:mb-0">  
           <div className="border-b border-[#1468a5] py-2 capitalize hover:underline">Result</div>  
         </a>  
         <a href="/Courses" className="mb-2 md:mb-0">  
           <div className="border-b border-[#1468a5] py-2 capitalize hover:underline">Courses</div>  
         </a>  
       </div>  
     </div> 
 );  
};  

export default Navbar;