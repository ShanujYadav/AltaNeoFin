import React from 'react';
import {Flex} from 'antd';
import ContentSidebar from './ContentSidebar';
import Rmbox from './Rmbox';
const SideContent = () => {
  return (<Flex vertical gap="2.3rem" style={{width:350}}>
<ContentSidebar/>
<Rmbox/>
  </Flex>

);
};


export default SideContent
