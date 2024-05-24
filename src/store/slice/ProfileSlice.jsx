import { createSlice } from "@reduxjs/toolkit";
import { getLogin } from "../action/ProfileAction";


const initialState = {
    userInfo:{
        phone: '',
        uuid: '',
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
        builder.addCase(getLogin.fulfilled, (state, action) => {
            console.log('action.payload---',action.payload)
            state.userInfo.phone=action.payload.mobileNumber
            state.userInfo.uuid=action.payload.uuid
        })
    }
})

export const { increment, decrement, incrementByAmount } = profileSlice.actions
export default profileSlice.reducer
