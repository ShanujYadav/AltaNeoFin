import { createSlice } from "@reduxjs/toolkit";
import {  getProfileData } from "../action/ProfileAction";


const initialState = {
    userInfo:{
        userId: '',
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
    }
}


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        getLogin: (state, action) => {
            state.userInfo.userId = action.payload.uuid
        },
    },
    extraReducers: (builder) => {
      builder.addCase(getProfileData.fulfilled, (state, action) => {
            console.log('action.payload---',action.payload)
            state.userInfo.phone = action.payload.mobileNumber
            state.userInfo.name = action.payload.fullName
            state.userInfo.panCard= action.payload.panCardNumber
            state.userInfo.gender = action.payload.gender
            state.userInfo.DOB = action.payload.dateOfBirth
            state.userInfo.pinCode = action.payload.pincCode
            state.userInfo.email = action.payload.email
            state.userInfo.gstRegistered = action.payload.gstRegistered
            state.userInfo.gstNumber = action.payload.gstNumber
            state.userInfo.businessAge = action.payload.businessAge
            state.userInfo.businessPinCode = action.payload.businessPincode
            state.userInfo.businessType = action.payload.businessType
            state.userInfo.yearlySales = action.payload.yearlySales
        })
    }
})

export const { increment, decrement, getLogin } = profileSlice.actions
export default profileSlice.reducer
