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
                <div class="w-full lg:w-1/2 bg-white p-6 lg:p-12 rounded-3xl shadow h-auto lg:h-[30rem] overflow-hidden">
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
                <div class="w-full lg:w-1/2 bg-white p-6 lg:p-12 rounded-3xl shadow h-auto lg:h-[30rem] overflow-hidden">
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