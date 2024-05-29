import React, { useEffect, useState } from 'react';
import './Rmbox.css';

let baseUrl = import.meta.env.VITE_SOME_KEY

const Rmbox = () => {
  const [rmData, setrmData] = useState({
    name: 'Hi,',
    img: 'https://www.w3schools.com/howto/img_avatar.png',
    contactLink: 'https://wa.me/9817741345',
    meetingLink: 'kkkk',
    message: 'How can i Help You',
    isOnline: false,
  })

  
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`${baseUrl}/api/relationship-managers/1`, {
          method: 'GET',
          headers: { 'Content-type': 'application/json' }
        })
        const res = await response.json()
        console.log('res----', res)
        setrmData({
          ...rmData,
          name: res.name,
          contactLink: res.contactLink,
          meetingLink: res.meetingLink,
          message: res.message,
          isOnline: res.online,
        })
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

 

  return (
    <div>
      <h5 className='leading-6 text-black text-lg py-4'>
        We have a dedicated Relationship Manager assigned for all your queries and doubts, during business hours.
      </h5>
      <div className='grid grid-flow-col mt-2'>
        <div className='mx-2 col-span-1'>
          <img src={rmData.img}
            alt="Avatar"
            className="rounded-circle  h-10 w-10"
          />
        </div>
        <div className='col-span-4'>
          <h6 className='font-semibold'>{rmData.name}</h6>
          <small className='text-sm'>{rmData.message}</small>
        </div>
      </div>
      <div className='mt-4 pl-3 grid-cols-2 grid xl:grid-cols-2'>
        <a
          href={rmData.contactLink}
          target="_blank"
          rel="noopener noreferrer">
          <button
            type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 md:px-2 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >What's App
          </button>
        </a>
        <a
          href={rmData.meetingLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            class="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Schedule Meet
          </button>
        </a>
      </div>
    </div>
  )
}

export default Rmbox;

// const RelationshipManager = () => {
//   const [relationshipManager, setRelationshipManager] = useState(null);

//   useEffect(() => {
//     // Fetch data from your API endpoint using Axios
//     axios.get('http://localhost:8080/api/relationshipManagers/5')
//       .then(response => {
//         setRelationshipManager(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching relationship manager data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {relationshipManager && (
//         <Rmbox
//           contactLink={relationshipManager.contactLink}
//           image={relationshipManager.image}
//           isOnline={relationshipManager.isOnline} 
//           meetingLink={relationshipManager.meetingLink}
//           message={relationshipManager.message}
//           name={relationshipManager.name}
//         />
//       )}
//     </div>
//   );
// };





   {/* <table class="overflow-auto">
              <thead>
                <tr>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                      <span class="relative text-xs">active</span>
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                      <span class="relative text-xs">active</span>
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                      <span class="relative text-xs">not active</span>
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                      <span class="relative text-xs">active</span>
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span aria-hidden class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                      <span class="relative text-xs">disabled</span>
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                  </td>
                </tr>
              </tbody>
            </table> */}