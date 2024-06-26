
import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { DashboardContextProvider } from "./DashoardContext";
import DashboardHome from "./home/DashboardHome";
import Profile from "./profile/Profile";
import VendorFinancingForm from "./VendorFinancing/VendorFinancingForm";
import DashboardNav from "./DashboardNav";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const queryParams = new URLSearchParams(location)
  let pathName = window.location.pathname
  let currentWindow = pathName.slice(11, 50)



  // console.log(currentWindow)
  //   let agentId = queryParams.get("agentId")
  //   console.log('location----', location.pathname)
  //   // let uuid = profileDetails.userInfo.uuid
  //   let uuid = 123456

  //   //   useEffect(() => {
  //   //     console.log('agentId----',agentId)
  //   //     console.log('uuid----',uuid)
  //   //     if(agentId!=uuid){
  //   //       history.push('/')
  //   //     }
  //   //  }, [])




  return (<>
    <DashboardContextProvider>
      <DashboardNav />
      <div class="flex overflow-hidden bg-white pt-16">
        <Sidebar />
        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <main>
            {/* <div class="w-full text-end">
              <a href="/" className='cursor-pointer hover:text-blue-500 text-sm text-gray-500'>Home</a>
              <span className='mx-1'>/</span>
              <span className='text-gray-600 text-sm pr-3'>{currentWindow}</span>
            </div> */}
            <div>
              <Switch>
                <Route path="/dashboard/home" component={DashboardHome} />
                <Route path="/dashboard/profile" component={Profile} />
                <Route path="/dashboard/vendorFinancing" component={VendorFinancingForm} />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    </DashboardContextProvider>
  </>
  );
}


// import React, { useEffect } from 'react';
// import { initFlowbite } from 'flowbite';
// import Sidebar from './Sidebar';
// import './Dashboard.css';
// import { useState } from 'react';
// import DashboardNav from './DashboardNav';
// import RightContent from './RightContent';
// import InvoiceDescounting from './Invoice/InvoiceDescounting';
// import LoanForm1 from './VendorFinancing/VendorFinancingForm';
// import 'react-responsive-modal/styles.css';
// import { useHistory, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Profile from './profile/Profile';
// import ShowActiveLoan from './VendorFinancing/ShowActiveLoan';
// import DashboardHome from './home/DashboardHome'



// const Dashboard = () => {
//   const profileDetails = useSelector((state) => state.profile)
//   // let uuid = profileDetails.userInfo.uuid
//   const activeWindow = useSelector((state) => state.dashboard.dashboardInfo.activeWindow)

//   const [open, setOpen] = useState(false)
//   const [formStep, setformStep] = useState(null)
//   const [showActiveLoans, setshowActiveLoans] = useState(true)

//   const history = useHistory()
//   const location = useLocation()

//   const queryParams = new URLSearchParams(location.search)
//   let agentId = queryParams.get("agentId")
//   console.log('location----', location.pathname)


//   let uuid = 123456

//   //   useEffect(() => {
//   //     console.log('agentId----',agentId)
//   //     console.log('uuid----',uuid)
//   //     if(agentId!=uuid){
//   //       history.push('/')
//   //     }
//   //  }, [])

//   return (
//     <div>
//       <DashboardNav />
//       <div class="flex overflow-hidden bg-white pt-16">
//         <Sidebar />
//         <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
//           <main >
//             <div class="w-full text-end">
//               <a href="/" className='cursor-pointer hover:text-blue-500 text-sm text-gray-500'>Home</a>
//               <span className='mx-1'>/</span>
//               <span className='text-gray-500 text-sm pr-3'>{activeWindow}</span>
//             </div>
//             <div class="px-3 pt-2">
//               {activeWindow == 'home' ? (
//                 <DashboardHome />
//               ) : activeWindow == 'vendorFinancing' ? (
//                 <LoanForm1 />
//               ) : activeWindow == 'profile' ? (
//                 <Profile />
//               ) : (
//                 <InvoiceDescounting />
//               )
//               }
//             </div>
//           </main>
//         </div>
//       </div >
//       <div>
//       </div>
//     </div >
//   )


// };
// export default Dashboard;


