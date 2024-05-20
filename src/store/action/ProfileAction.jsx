import { createAsyncThunk } from "@reduxjs/toolkit"


export const getUserDetails = createAsyncThunk("getUserDetails", async (info) => {
    console.log('info---', info)
    return info;
})