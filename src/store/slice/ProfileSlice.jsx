import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "../action/ProfileAction";


const initialState = {
    userInfo:{
        name:'' ,
        panNo: '',
        annualTurnover: '',
        mobile: '',
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
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getUserDetails.fulfilled, (state, action) => {
            state.userInfo.name=action.payload
        })
    }
})

export const { increment, decrement, incrementByAmount } = profileSlice.actions
export default profileSlice.reducer
