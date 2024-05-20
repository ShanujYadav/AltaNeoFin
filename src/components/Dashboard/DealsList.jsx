import {Button,Card,Flex,Typography,Image } from 'antd'
import React from 'react'
import plantData from './PlantData';

const {Meta} = Card;
const DealsList = () => {
  return (
  <div>
  <Flex align='center' justify='space-between'>
    <Typography.Title level={3} strong className="primary--color" >
        Current Deals
    </Typography.Title>
<Button type="link" className="gray--color">
  View All
</Button>
  </Flex>
  <Flex align='center' gap='large'>
    {plantData.map((plant)=>(
      <Card key={plant.id} hoverable className='plant-card'>
        <Image src={plant.Image} style={{width:'130px'}}/>
     <Meta title={plant.name} style={{marginTop: '1rem'}}/>
      </Card>
    ))}
  </Flex>
  </div>
  );
};

export default DealsList;
