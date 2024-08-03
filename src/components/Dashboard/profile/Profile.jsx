import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileData } from '../../../store/action/ProfileAction'
import { useHistory } from 'react-router-dom'
import profileImg from '../../../../public/assets/img/profileImgDemo.jpg'

let baseUrl = import.meta.env.VITE_SOME_KEY

const Profile = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    const phone = sessionStorage.getItem('phone')
    const uuid = sessionStorage.getItem('uuid')

    // const profileDetails = useSelector((state) => state.profile.userInfo)

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
        uuid: '',
    })


    const getProfileData = async () => {
        try {
            const response = await fetch(`${baseUrl}/customerProfile?uuid=${uuid}`, {
                method: 'GET',
            });
            const res = await response.json()
            console.log('res---', res)
            if (res.statuscode == 200) {
                var gstStatus = res.gstRegistered ? 'Yes' : 'No'
                setprofileData({
                    ...profileData,
                    phone: res.mobileNumber,
                    uuid: res.uuid,
                    name: res.name,
                    panCard: res.panCardNumber,
                    gender: res.gender,
                    DOB: res.DOB,
                    pinCode: res.pinCode,
                    email: res.email,
                    gstRegistered: gstStatus,
                    gstNumber: res.gstNumber,
                    businessType: res.businessType,
                    businessAge: res.businessAge,
                    businessPinCode: res.businessPinCode,
                    yearlySales: res.yearlySales,
                })
            }
        }
        catch (e) {
            console.log(e)
        }


    }

    useEffect(() => {
        if (!uuid || !phone) {
            history.push('/')
            toast.error('Not a Valid User')
        }
        else {
            getProfileData()
        }
        console.log(profileData);
        
    }, [])

    return (
        <div class="max-w-6xl mx-auto p-4 overflow-hidden">
            <h1 class="text-4xl font-bold ml-8 mb-1">User profile</h1>
            <div class="bg-gray-100 p-6 rounded-lg flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
                <div class="w-full lg:w-1/2 bg-white p-6 lg:p-12 rounded-3xl shadow h-auto lg:h-[30rem] overflow-hidden">
                    <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                        <img class="w-24 h-24 lg:w-32 lg:h-32 rounded-full" src={profileImg} alt="User Image" />
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl lg:text-3xl font-bold truncate">{profileData.name}</h2>
                            <p class="text-gray-600 text-base truncate">{profileData.email}</p>
                            <p class="text-gray-600 text-base truncate">+91 {profileData.phone}</p>
                            <p class="bg-blue-100 text-blue-600 rounded px-2 inline-block mt-2 text-base truncate">uuId: {uuid}</p>
                        </div>
                    </div>
                    <div class="mt-4 border-t pt-4 space-y-2">
                        <p class="text-base"><strong>DOB:</strong>{profileData.DOB}</p>
                        <p class="text-base"><strong>Pan Card:</strong> {profileData.panCard}</p>
                        <p class="text-base"><strong>Pin Code:</strong> {profileData.pinCode}</p>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 bg-white p-6 lg:p-12 rounded-3xl shadow h-auto lg:h-[30rem] overflow-hidden">
                    <h3 class="text-2xl lg:text-3xl font-bold mb-2">Business Info</h3>
                    <hr class="bg-gray-400 mb-4" />
                    <div class="space-y-2">
                        <p class="text-base"><strong>GST Registered:</strong>{profileData.gstRegistered}</p>
                        <hr class="bg-gray-400" />
                        <p class="text-base"><strong>GST Number:</strong> {profileData.gstNumber}</p>
                        <hr class="bg-gray-400" />
                        <p class="text-base"><strong>Business Type:</strong> {profileData.businessType}</p>
                        <hr class="bg-gray-400" />
                        <p class="text-base"><strong>Business Age:</strong>{profileData.businessAge}</p>
                        <hr class="bg-gray-400" />
                        <p class="text-base"><strong>Business PinCode:</strong> {profileData.businessPinCode}</p>
                        <hr class="bg-gray-400" />
                        <p class="text-base"><strong>Yearly Sales:</strong> ₹ {profileData.yearlySales}</p>
                        <hr class="bg-gray-400" />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile