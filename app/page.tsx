import { SetStateAction, useState } from 'react';

function Home() {
 

  return (
    <div className="container mx-auto px-4 py-8">
      <img className="" alt="" src="/Logo.png" />
      <form  className="flex -mt-8 justify-center ml-[50%]">
        <input
          type="text"
          placeholder="Search Trademark Here eg. Mickey Mouse"
  
       
          className="px-8 w-[70%] py-1 border rounded-md mr-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Search
        </button>
      </form>

      
      <hr className="m-8"></hr>

      <div className={`text-black-50 font-bold text-size-`}>
      <span className="">About 159 Trademarks found for “nike”</span>
      <div
      className={`relative flex items-center justify-center w-full h-full overflow-hidden bg-gray-800 text-white font-bold text-2xl cursor-pointer transition-all duration-300 ease-in-out
      }`} >
        
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <p>About 153</p>
        <p className="mt-1">Incredible</p>
        <p className="mt-1">Experience</p>
      </span>
    </div>

    
     
    </div>
    
    


    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-4 font-semibold text-gray-600">Mark</th>
            <th className="text-left p-4 font-semibold text-gray-600">Details</th>
            <th className="text-left p-4 font-semibold text-gray-600">Status</th>
            <th className="text-left p-4 font-semibold text-gray-600">Class/Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            {/* Mark Column */}
            <td className="p-4">
              <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-md">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </td>
            {/* Details Column */}
            <td className="p-4">
              <div className="text-lg font-semibold text-gray-900">Meta Logo</div>
              <p className="text-sm text-gray-500">Facebook Inc.</p>
              <p className="text-sm text-gray-500">887778, 26th June 2020</p>
            </td>
            {/* Status Column */}
            <td className="p-4">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                Live/Registered
              </div>
              <p className="text-sm text-gray-500 mt-2">on 26 Jun 2020</p>
              <p className="text-sm text-red-500 mt-1">Expires: 26 Dec 2027</p>
            </td>
            {/* Class/Description Column */}
            <td className="p-4">
              <div className="text-sm text-gray-700">
                Computer services, Social Media, Networking, Virtual Communities, Community
              </div>
              <div className="mt-2 space-x-3">
                <span className="text-xs text-gray-600">Class 45</span>
                <span className="text-xs text-gray-600">Class 9</span>
                <span className="text-xs text-gray-600">Class 38</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


    </div>
  );
}

export default Home;



