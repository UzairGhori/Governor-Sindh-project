import React from 'react'

const Apply = () => {
  return (
    <div>
        
        <div className="flex justify-center items-center mt-10 min-h-screen ">  
      <form className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">  
        <h2 className="text-center text-4xl animate-bounce text-blue-800 font-bold font-serif">Apply Now</h2>  
        <br />
        <label className="block mt-4 text-black">Name</label>  
        <input type="text" placeholder="Name" className="mt-1 p-2 border border-gray-300  text-black rounded w-full" />  

        <label className="block mt-4  text-black">Email</label>  
        <input type="email" placeholder="Email" className="mt-1 p-2 border border-gray-300  text-black rounded w-full" />  

        <label className="block mt-4  text-black">Phone</label>  
        <input type="tel" placeholder="Phone" className="mt-1 p-2 border border-gray-300  text-black rounded w-full" />  

        <label className="block mt-4  text-black">Course</label>  
        <select className="mt-1 p-2 border border-gray-300  text-black rounded w-full">  
          <option value="">Select Course</option>  
          <option value="1">Programming Fundamentals</option>  
          <option value="2">Web Development</option>  
          <option value="3">Artificial Intelligence</option>  
          <option value="4">Web 3 and Metaverse</option>  
          <option value="5">Blockchain Development</option>  
          <option value="6">Cybersecurity</option>  
          <option value="7">Python Programming</option>  
          <option value="8">Data Science</option>  
          <option value="9">Machine Learning</option>  
          <option value="10">Natural Language Processing</option>  
        </select>  

        <label className="block mt-4  text-black">Address</label>  
        <textarea placeholder="Address" rows={4} className="mt-1 p-2 border  text-black border-gray-300 rounded w-full"></textarea>  

        <label className="bloc  text-black mt-4">Preferred Language</label>  
        <select className="mt-1 p-2  text-black border border-gray-300 rounded w-full">  
          <option value="">Select Language</option>  
          <option value="1">English</option>  
          <option value="2">Urdu</option>  
          <option value="3">Spanish</option>  
          <option value="4">French</option>  
          <option value="5">German</option>  
          <option value="6">Italian</option>  
          <option value="7">Chinese</option>  
          <option value="8">Japanese</option>  
          <option value="9">Russian</option>  
          <option value="10">Portuguese</option>  
        </select>  

        <label className="block mt-4  text-black">Additional Information</label>

        <textarea placeholder="Additional Information" rows={4} className="mt-1 p-2  text-black border border-gray-300 rounded w-full"></textarea>  

        <label className="block  text-black mt-4">State/Province</label>
        <select className="mt-1 p-2 border border-gray-300  text-black rounded w-full">
            <option value="">Select State/Province</option>
            <option value="1">Sindh</option>
            <option value="2">Punjab</option>
            <option value="3">Balocistan</option>
            <option value="4">Khyber Paktunkha</option>
            <option value="5">Gilgit Baltistan</option>
            </select>    

        <label className="block mt-4  text-black">Country</label>  
        <select className="mt-1 p-2 border border-gray-300  text-black rounded w-full">  
          <option value="">Select Country</option>  
          <option value="1">United States</option>  
          <option value="2">Pakistan</option>  
          <option value="3">United Kingdom</option>  
          <option value="4">Canada</option>  
          <option value="5">Australia</option>  
          <option value="6">Germany</option>  
          <option value="7">France</option>  
          <option value="8">Japan</option>  
          <option value="9">Russia</option>  
          <option value="10">Brazil</option>  
        </select>  

        <label className="block mt-4  text-black">City</label>  
        <input type="text" placeholder="City" className="mt-1 p-2  text-black border border-gray-300 rounded w-full" />  

        <label className="block mt-4  text-black">Zip/Postal Code</label>  
        <input type="text" placeholder="Zip/Postal Code" className="mt-1 p-2  text-black border border-gray-300 rounded w-full" />  

        <label className="block  text-black mt-4">Preferred Contact Method</label>  
        <select className="mt-1 p-2  text-black border border-gray-300 rounded w-full">  
          <option value="">Select Method</option>  
          <option value="1">Email</option>  
          <option value="2">Phone</option>  
          <option value="3">Skype</option>  
          <option value="4">LinkedIn</option>  
          <option value="5">Facebook</option>  
          <option value="6">Instagram</option>  
          <option value="7">Twitter</option>  
          <option value="8">WhatsApp</option>  
          <option value="9">Other</option>  
          <option value="10">No preference</option>  
        </select>  

        <label className="flex items-center  text-black mt-4">  
          <input type="checkbox" className="mr-2" />  
          I agree to the <a href="#" className="text-blue-500  underline">Terms & Conditions</a>  
        </label>  

        <label className="flex items-center  text-black mt-1">  
          <input type="checkbox" className="mr-2" />  
          I have read and understood the <a href="#" className="text-blue-500 underline">Privacy Policy</a>  
        </label>  

        <button type="submit" className="mt-6 bg-green-500 text-white rounded px-4 py-2 w-full hover:bg-green-600 focus:outline-none">  
          Submit  
        </button>  
      </form>  
    </div>  
    </div>
  )
}

export default Apply;