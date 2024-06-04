import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dashboardInfo:{
        activeWindow:'home',
        value:1,
    }

    // userInfo: {
    //     phone: '',
    //     uuid: '',
    // }

}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        getactiveWindow: (state, action) => {
            state.dashboardInfo.activeWindow = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(getLogin.fulfilled, (state, action) => {
    //         console.log('action.payload---',action.payload)
    //         state.userInfo.phone=action.payload.mobileNumber
    //         state.userInfo.uuid=action.payload.uuid
    //     })
    // }

})
export const { increment, decrement, getactiveWindow } = dashboardSlice.actions

export default dashboardSlice.reducer
