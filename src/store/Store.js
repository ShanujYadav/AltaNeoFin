import { configureStore } from '@reduxjs/toolkit'
import  profileSlice  from './slice/ProfileSlice'

export const store = configureStore({
  reducer: {
    profile: profileSlice,
  },
})