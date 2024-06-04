import { configureStore } from '@reduxjs/toolkit'
import  profileSlice  from './slice/ProfileSlice'
import  dashboardSlice  from './slice/DashboardSlice'

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    dashboard:dashboardSlice,
  },
})