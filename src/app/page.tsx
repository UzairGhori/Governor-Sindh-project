
import Image from "next/image";
import AdvancedCourses from "./AdvanceC/page";
import CoreCourses from "./CoreCourses/page";

const GovernorInfo: React.FC = () => {  
  return (  
    <div className="w-100% h-100% m-0 ">
          
  <div className="pt-10   h-screen bg-cover bg-center bg-transparent-50 bg-[url('/Images/GSHouse.jpeg')] ">  
  <Image  
      src="/Images/governorsindh.png"  
      alt="Giaic"  
      loading="lazy"  
      width={1600}  
      height={1100}  
      decoding="async"  
      data-nimg="1"  
      className="w-full h-auto max-w-[800px] justify-items-end ml-auto"  
/>

<div className=" relative h-fit w-full align-top justify-self-start  -top-40 -mt-96 -mb-96 md:w-1/2 -py-96 ml-6 ">  
  <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider  text-main sm:text-5xl sm:leading-none md:text-left text-blue-800 lg:text-6xl  mt-0">Governor Sindh</h1>  
  <h1 className="whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider text-main sm:text-4xl sm:leading-[3rem] md:text-left text-blue-800 lg:text-[2.5rem]">Kamran Khan Tessori</h1>  
  <h1 className="whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left text-blue-400">  
  Certified Cloud <br />  
  Applied Generative AI <br />  
  Engineer (GenEng)  
  </h1>  
  <p className="my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-3xl text-blue-900 md:text-left">Earn up to $5,000 / month</p>  
  <p className="my-5 w-full text-center text-[2.25rem] font-bold tracking-wider text-main sm:text-3xl md:w-[80%] md:text-left text-blue-900">Now admissions are <br /> open in Hyderabad</p>  
  <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">  
  <a className="w-full text-white bg-blue-900 rounded-md md:w-auto" href="/Apply">  
  <button className="w-full rounded-md bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">APPLY NOW</button>  
  </a>  
  <div className="mt-4 flex w-full flex-col items-center sm:mt-0">  
  <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">  
  <div className="w-40 font-extrabold text-blue-900">562,143</div>  
  </div>  
  <div className="text-center text-1xl font-semibold text-blue-900 tracking-wider text-main sm:mb-0 sm:text-sm">Accepted <br /> Applications</div>  
  </div>  
  </div>  
  </div> 
</div>
  
  <br /><br />
  
  
  
    <h1 className="text-center text-blue-950 xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%]  mt-10">
      Certified Cloud Applied Generative AI Engineer <br /> (GenEng) and Solopreneur Developing Billion- <br /> Dollar Valued Developers and Solopreneurs
    </h1>
    <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.4rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 font-sans sm:tracking-wider tracking-normal text-justify mx-5">
      The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for a new era of entrepreneurship.
    </p>
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 mx-40  sm:m-0 animate-slider animate-slick-initialzed">
      <Image
        alt="solo1"
        loading="lazy"
        width="1088"
        height="896"
        decoding="async"
        data-nimg="1"
        className="shadow-2xl shadow-black rounded-lg h-[300px] ml-3 object-cover w-full"
        src="/Images/p1.jpg"
        style={{ color: 'transparent' }}
      />
      <Image
        alt="solo2"
        loading="lazy"
        width="500"
        height="375"
        decoding="async"
        data-nimg="1"
        className="shadow-2xl shadow-black rounded-lg h-[300px] w-full"
        src="/Images/p2.jpg"
        style={{ color: 'transparent' }}
      />
      <Image
        alt="solo3"
        loading="lazy"
        width="1088"
        height="896"
        decoding="async"
        data-nimg="1"
        className="shadow-2xl shadow-black rounded-lg h-[300px] -ml-3 object-cover w-full"
        src="/Images/p3.jpg"
        style={{ color: 'transparent' }}
      />
      <Image
        alt="solo3"
        loading="lazy"
        width="1088"
        height="896"
        decoding="async"
        data-nimg="1"
        className="shadow-2xl shadow-black rounded-lg h-[300px] ml-3 object-cover w-full"
        src="/Images/d4.jpeg"
        style={{ color: 'transparent' }}
      />
<Image
        alt="solo3"
        loading="lazy"
        width="1088"
        height="896"
        decoding="async"
        data-nimg="1"
        className="shadow-2xl shadow-black rounded-lg h-[300px] mr-3 object-cover w-full"
        src="/Images/d5.jpeg"
        style={{ color: 'transparent' }}
      />
<Image
        alt="solo3"
        loading="lazy"
        width="1088"
        height="896"
        decoding="async"
        data-nimg="1"
        className="shadow-2xl shadow-black rounded-lg h-[300px] -ml-3 object-cover w-full"
        src="/Images/d6.jpeg"
        style={{ color: 'transparent' }}
      />


 
          </div>
                   <CoreCourses />

                    <AdvancedCourses />

                    
        </div>

        
    

  );  
}  

 
 export default GovernorInfo;  