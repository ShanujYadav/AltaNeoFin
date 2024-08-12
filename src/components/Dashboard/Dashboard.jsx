
import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { DashboardContextProvider } from "./DashoardContext";
import DashboardHome from "./home/DashboardHome";
import Profile from "./profile/Profile";
import VendorFinancingForm from "./VendorFinancing/VendorFinancingForm";
import DashboardNav from "./DashboardNav";
import UserDashboard from "./UserDashboard";

export default function Dashboard() {
  return (
    <>
      <DashboardContextProvider>
      <DashboardNav />
        <Switch>
          <Route path="/dashboard/home" component={DashboardHome} />
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/vendorFinancing" component={VendorFinancingForm} />
          <Route path="/dashboard/UserHome" component={UserDashboard} />
        </Switch>
      </DashboardContextProvider>
    </>
  );
}