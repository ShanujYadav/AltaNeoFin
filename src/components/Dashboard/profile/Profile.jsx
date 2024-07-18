import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileData } from '../../../store/action/ProfileAction'

const Profile = () => {
    const dispatch = useDispatch()
    const profileDetails = useSelector((state) => state.profile.userInfo)
    // const userId = profileDetails.uuid
    const name = profileDetails.name
    const userId = 12345

    const [profileData, setprofileData] = useState({
        phone: '',
        name: '',
        panCard: '',
        gender: '',
        DOB: '',
        pinCode: '',
        email: '',
        gstRegistered: '',
        gstNumber: '',
        businessType: '',
        businessAge: '',
        businessPinCode: '',
        yearlySales: '',
    })

    useEffect(() => {
        dispatch(getProfileData(userId))
        var gstStatus = profileData.gstRegistered ? 'Yes' : 'No'
        setprofileData({
            ...profileData,
            phone: profileDetails.phone,
            name: profileDetails.name,
            panCard: profileDetails.panCard,
            gender: profileDetails.gender,
            DOB: profileDetails.DOB,
            pinCode: profileDetails.pinCode,
            email: profileDetails.email,
            gstRegistered: gstStatus,
            gstNumber: profileDetails.gstNumber,
            businessType: profileDetails.businessType,
            businessAge: profileDetails.businessAge,
            businessPinCode: profileDetails.businessPinCode,
            yearlySales: profileDetails.yearlySales,
        })
    }, [])


    return (
        <div class="max-w-6xl mx-auto p-4 overflow-hidden">
            <h1 class="text-4xl font-bold ml-8 mb-1">User profile</h1>
            <div class="bg-gray-100 p-6 rounded-lg flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
                <div class="w-full lg:w-1/2 bg-white p-6 lg:p-12 rounded-3xl shadow h-auto lg:h-[40rem] overflow-hidden">
                    <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                        <img class="w-24 h-24 lg:w-32 lg:h-32 rounded-full" src="https://via.placeholder.com/150" alt="User Image" />
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl lg:text-3xl font-bold truncate">Soham Kumar</h2>
                            <p class="text-gray-600 text-base truncate">Smith.k@gmail.com</p>
                            <p class="text-gray-600 text-base truncate">+91 XXXXXXXXXX</p>
                            <p class="bg-blue-100 text-blue-600 rounded px-2 inline-block mt-2 text-base truncate">UserId: 12345</p>
                        </div>
                    </div>
                    <div class="mt-4 border-t pt-4 space-y-2">
                        <p class="text-base"><strong>DOB:</strong> June 23 1984</p>
                        <p class="text-base"><strong>Pan Card:</strong> XXXX XXXX XX52</p>
                        <p class="text-base"><strong>Pin Code:</strong> 262122</p>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 bg-white p-6 lg:p-12 rounded-3xl shadow h-  lg:h-[40rem] overflow-hidden">
                    <h3 class="text-2xl lg:text-3xl font-bold mb-2">Business Info</h3>
                    <hr class="bg-gray-400 mb-4" />
                    <div class="space-y-2">
                        <p class="text-base"><strong>GST Registered:</strong> No</p>
                        <hr class="bg-gray-400" />
                        <p class="text-base"><strong>GST Number:</strong> GST123456789</p>
                        <hr class="bg-gray-400" />
                        <p class="text-base"><strong>Business Type:</strong> GST123456789</p>
                        <hr class="bg-gray-400" />
                        <p class="text-base"><strong>Business Age:</strong> GST123456789</p>
                        <hr class="bg-gray-400" /> 
                        <p class="text-base"><strong>Business PinCode:</strong> 123456</p>
                        <hr class="bg-gray-400" />
                        <p class="text-base"><strong>Yearly Sales:</strong> ₹ 4,23,242</p>
                        <hr class="bg-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile



// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getProfileData } from '../../../store/action/ProfileAction'

// const Profile = () => {
//     const dispatch = useDispatch()
//     const profileDetails = useSelector((state) => state.profile.userInfo)
//     // const userId = profileDetails.uuid
//     const name = profileDetails.name
//     const userId = 12345

//     const [profileData, setprofileData] = useState({
//         phone: '',
//         name: '',
//         panCard: '',
//         gender: '',
//         DOB: '',
//         pinCode: '',
//         email: '',
//         gstRegistered: '',
//         gstNumber: '',
//         businessType: '',
//         businessAge: '',
//         businessPinCode: '',
//         yearlySales: '',
//     })

//     useEffect(() => {
//             dispatch(getProfileData(userId))
//             var gstStatus = profileData.gstRegistered ? 'Yes' : 'No'
//             setprofileData({
//                 ...profileData,
//                 phone: profileDetails.phone,
//                 name: profileDetails.name,
//                 panCard: profileDetails.panCard,
//                 gender: profileDetails.gender,
//                 DOB: profileDetails.DOB,
//                 pinCode: profileDetails.pinCode,
//                 email: profileDetails.email,
//                 gstRegistered: gstStatus,
//                 gstNumber: profileDetails.gstNumber,
//                 businessType: profileDetails.businessType,
//                 businessAge: profileDetails.businessAge,
//                 businessPinCode: profileDetails.businessPinCode,
//                 yearlySales: profileDetails.yearlySales,
//             })
//     }, [])

    
//     return (
//         <div class="flex flex-col h-screen ">
//             <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
//                 <div class="bg-white p-4 rounded-md">
//                     <h2 class="block text-sm text-muted leading-6 text-black pb-2"><b className='text-blue-500'>PERSONAL </b> Details</h2>
//                     <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
//                     <div class="max-w-2xl">
//                         <div class="grid grid-cols-2 gap-x-10 gap-y-10 mx-4 sm:grid-cols-3">
//                             <div>
//                                 <img src="https://www.w3schools.com/howto/img_avatar.png"
//                                     alt="Avatar"
//                                     className="rounded-circle  h-20 w-20"
//                                 />
//                             </div>
//                             <div className='py-3'>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">UserId</label>
//                                 <h6 className='text-gray-600 text-sm'>{userId}</h6>
//                             </div>
//                             <div className='py-3'>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Name</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.name}</h6>
//                             </div>
//                             <div className='py-3'>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Phone</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.phone}</h6>
//                             </div>

//                             <div className=''>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Pan Card</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.panCard}</h6>
//                             </div>
//                             <div className=''>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Gendar</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.gender}</h6>
//                             </div>
//                             <div className=''>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">DOB</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.DOB}</h6>
//                             </div>
//                             <div className=''>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Pin Code</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.pinCode}</h6>
//                             </div>
//                             <div className=''>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Email</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.email}</h6>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="bg-white p-4 rounded-md ">
//                     <h2 class="block text-sm leading-6 text-muted pb-2"><b className='text-blue-500'>BUSINESS </b> Details</h2>
//                     <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
//                     <div class="max-w-2xl">
//                         <div class="grid grid-cols-2 gap-x-10 gap-y-10 mx-4 sm:grid-cols-3">
//                             <div className='py-3'>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Gst Registered</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.gstRegistered}</h6>
//                             </div>
//                             <div className='py-3'>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Gst Number</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.gstNumber}</h6>
//                             </div>
//                             <div className='py-3'>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Business Type</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.businessType}</h6>
//                             </div>
//                             <div className='py-3'>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Business Age</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.businessAge}</h6>
//                             </div>

//                             <div className=''>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Business PinCode</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.businessPinCode}</h6>
//                             </div>
//                             <div className=''>
//                                 <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Yearly Sales</label>
//                                 <h6 className='text-gray-600 text-sm'>{profileData.yearlySales}</h6>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div >
//     )
// }

// export default Profile