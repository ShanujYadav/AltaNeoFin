import {Card,Flex, Typography } from 'antd'
import React from 'react'

const Banner = () => {
  return (
  <Card style={{height:260,padding:'20px'}}>
    <Flex vertical gap="30px">
        <Flex vertical align="flex-start"> 
            <Typography.Title level={2} strong >
                 Deals
                </Typography.Title>
               
                <Typography.Text type='secondary' strong>  Invest smarter, earn consistently.</Typography.Text>
               
        </Flex>
    </Flex>
  </Card>
  );
};

export default Banner;
