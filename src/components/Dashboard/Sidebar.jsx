import React from 'react';
import { Flex, Menu } from 'antd';
import logo from '../../assets/logo.png';
import { UserOutlined, OrderedListOutlined, ClockCircleOutlined } from '@ant-design/icons';

const Sidebar = (props) => {


  const onSelectType = (key) => {
    if(key==3){
      props.setItem('Instant Loan')
    }
    else{
      props.setItem(null)
    }
  }

  return (
    <>
      <Flex align="" justify="" className='' style={{backgroundColor:'' }}>
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: '190px' }} className='mt-3' />
        </div>
      </Flex>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} className="menu-bar" onClick={({ key }) => onSelectType(key)}  items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'Invoice Discounting',
        },
        {
          key: '2',
          icon: <OrderedListOutlined />,
          label: 'Bonds',
        },
        {
          key: '3',
          icon: <ClockCircleOutlined />,
          label: 'Instant Loan',
        }

      ]} />
    </>
  );
};

export default Sidebar;
