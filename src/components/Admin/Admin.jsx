import React from 'react'
import Header from './Header'
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