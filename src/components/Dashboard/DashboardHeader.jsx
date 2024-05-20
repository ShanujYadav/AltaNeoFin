import { Avatar, Flex, Typography } from 'antd';
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const DashboardHeader = () => {
  return (
    <Flex justify="space-between" alignItems="center">
      <Typography.Title level={2} type="secondary">
        Welcome Back, Customer
      </Typography.Title>
      <Flex gap="14px" align="center">
        <MessageOutlined className='header-icon'/>
        <NotificationOutlined className='header-icon'/>
        <Avatar icon={<UserOutlined />} />
      </Flex>
    </Flex>
  );
}
export default DashboardHeader;