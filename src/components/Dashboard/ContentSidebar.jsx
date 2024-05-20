import { Card, Flex, Typography } from 'antd';
import React from 'react';
import './Dashboard.css';

const ContentSidebar = () => {
  return (
    <div>
      <Card className="card" style={{ background: 'linear-gradient(135deg, #5cdbd3 0%, #8ee4af 100%)' }}>
        <Flex vertical gap="large">
          <Typography.Title level={4} strong>
            Today's <br /> 5 orders
          </Typography.Title>
          <Typography.Title level={4} strong>
            Last week <br /> 240 orders
          </Typography.Title>
        </Flex>
      </Card>
    </div>
  );
};

export default ContentSidebar;
