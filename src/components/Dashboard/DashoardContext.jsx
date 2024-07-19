import React, { useState, createContext } from "react";

export const DashboardContext = createContext()

export const DashboardContextProvider = ({ children }) => {
    // let Billers = useSelector((state) => state.biller.broadband.broadbandBillers.datList)
    let Billers = []

    const [data, setData] = useState({
        biller: "",
        billPeriod: "",
        receipt: false,
        option: [],
        billParam: "",
    })
    return (
        <DashboardContext.Provider value={[data, setData, Billers]}>
            {children}
        </DashboardContext.Provider>
    );
};
