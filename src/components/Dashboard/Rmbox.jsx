import React, { useEffect, useState } from 'react';
import { Flex, Typography, Button } from 'antd';
import axios from 'axios'; // Import Axios
import './Rmbox.css';

const Rmbox = ({ contactLink, image, isOnline, meetingLink, message, name }) => {
  return (
    <Flex vertical gap="small" style={{ maxWidth: 400 }}>
      <Typography.Title level={3} strong className="primary--color">
        Get in touch
      </Typography.Title>
      <Typography.Paragraph>We have a dedicated Relationship Manager assigned for all your queries and doubts, during business hours.</Typography.Paragraph>
      <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>
        <Flex align="center" gap="medium">
          <img src={image} alt={name} style={{ width: 64, height: 64, borderRadius: '50%' }} />
          <div>
            <Typography.Text strong>{name}</Typography.Text>
            <br />
            {isOnline ? (
              <Typography.Text type="success">Online</Typography.Text>
            ) : (
              <Typography.Text type="danger">Offline</Typography.Text>
            )}
            <br />
            <Button type="" className="custom-button" href={contactLink} target="_blank" rel="noopener noreferrer">
              Contact
            </Button>
            <Button type="" className="custom-button" href={meetingLink} target="_blank" rel="noopener noreferrer">
              Schedule Meeting
            </Button>
          </div>
        </Flex>
        <div style={{ marginTop: 16 }}>
          <Typography.Text>{message}</Typography.Text>
        </div>
      </div>
    </Flex>
  );
};

const RelationshipManager = () => {
  const [relationshipManager, setRelationshipManager] = useState(null);

  useEffect(() => {
    // Fetch data from your API endpoint using Axios
    axios.get('http://localhost:8080/api/relationshipManagers/5')
      .then(response => {
        setRelationshipManager(response.data);
      })
      .catch(error => {
        console.error('Error fetching relationship manager data:', error);
      });
  }, []);

  return (
    <div>
      {relationshipManager && (
        <Rmbox
          contactLink={relationshipManager.contactLink}
          image={relationshipManager.image}
          isOnline={relationshipManager.isOnline} 
          meetingLink={relationshipManager.meetingLink}
          message={relationshipManager.message}
          name={relationshipManager.name}
        />
      )}
    </div>
  );
};

export default RelationshipManager;
