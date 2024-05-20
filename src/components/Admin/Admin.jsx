import React from 'react'
import Banner from '../Dashboard/Banner'
import Header from './Header'
import Navbar from '../Navbar/Navbar'
import AdminSidebar from './AdminSidebar'
import AdminDasdboard from './AdminDasdboard'

const Admin = () => {
  return (
    <>
      <div >
        <Header />
      </div>
      <div className='row'>
        <div className='col-3'>
          <AdminSidebar />
        </div>
        <div className='col-9'>
          <AdminDasdboard />
        </div>
      </div>
    </>
  )
}

export default Admin