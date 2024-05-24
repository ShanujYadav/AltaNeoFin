import { createAsyncThunk } from "@reduxjs/toolkit"

export const getLogin = createAsyncThunk("getLogin", async (info) => {
    console.log('info---', info)

    // return info;
})