import React from 'react';
import { Layout, Flex } from 'antd';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import MainContent from './MainContent';
import SideContent from './SideContent';
import './Dashboard.css';
import LoanForm1 from './InstantLoan/LoanForm1';
import { useState } from 'react';

const { Sider, Header, Content } = Layout;


const Dashboard = () => {
  const [item,setItem]=useState(null)

  return (
    <Layout>
      <Sider theme="light" collapsible collapsed={false} className="sider">
        <Sidebar item={item} setItem={setItem}/>
      </Sider>
      <Layout>
        <Header className="Dashboardheader">
          <DashboardHeader />
        </Header>
        <Content className="content">
          <Flex gap="large">
            {item=='Instant Loan' ? <>
            <LoanForm1/>
            </> : <>
            <MainContent />
            </>
            } 
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
