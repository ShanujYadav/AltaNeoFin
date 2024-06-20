import { createAsyncThunk } from "@reduxjs/toolkit"

const baseUrl = import.meta.env.VITE_SOME_KEY

export const getProfileData = createAsyncThunk("getLogin", async (userId) => {

    
    // const response = await fetch(`${baseUrl}/customerProfile/?uuid=${userId}`, {
    //     method: 'GET',
    //     headers: { 'Content-type': 'application/json' }
    // })
    // let res = await response.json()

    let res = {
        "yearlySales": 1000000.0,
        "mobileNumber": "9587581686",
        "gstRegistered": true,
        "fullName": "dhiren",
        "uuid": "49bb280",
        "gstNumber": "GST123456789",
        "businessPincode": "123456",
        "panCardNumber": 'jbjnnnini',
        "businessAge": 5,
        "id": 1,
        "businessType": "Retail",
        "turnover": "10000",
        "email": "nishu777777@gmail.com",
        "pincCode": "262122",
        "dateOfBirth": "13/25/20115",
        "gender": "male"
    }

    return res;
})