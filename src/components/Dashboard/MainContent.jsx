import React from 'react'
import Banner from './Banner';
import{Flex} from 'antd';
import DealsList from './DealsList';

const MainContent = () => {
  return (
    <div style={{flex:1}}>
      <Flex vertical gap="2.3rem">
        <Banner/>
        <DealsList/>
      </Flex>
    </div>
  );
};

export default MainContent;
