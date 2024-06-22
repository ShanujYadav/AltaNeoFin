// import React, { createContext } from 'react'


// export const BlogContext = createContext()

// const BlogContext = () => {

//     const [data, setData] = useState({
//         gateway: "",
//         amount: "",
//     })

//     return (
//         <BlogContext.Provider value={[data, setData]}>
//             {props.children}
//         </BlogContext.Provider>
//     )
// }
// export default BlogContext


// import React, { useState, createContext } from "react";
// import { useSelector } from "react-redux";

// export const EmpContext = createContext()

// export const EmpContextProvider = (props) => {
//   const profileDetails = useSelector((state) => state.profile.empInfo)

//   const [data, setData] = useState({
//     gateway: "",
//     amount: "",
//   })

//   return (
//     <EmpContext.Provider value={[data, setData, profileDetails]}>
//       {props.children}
//     </EmpContext.Provider>
//   );
// };
