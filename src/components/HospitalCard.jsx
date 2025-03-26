import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #f8f8f8;
  border-radius: 10px;
  overflow: hidden;
`;

const HospitalImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 15px;
`;

const HospitalName = styled.h3`
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #333;
`;

const Location = styled.p`
  margin: 0 0 15px 0;
  color: #666;
  font-size: 14px;
`;

const ContactButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const CallButton = styled(Button)`
  background: #98c93c;
  color: white;
  
  &:hover {
    background: #89ba33;
  }
`;

const EmailButton = styled(Button)`
  background: #333;
  color: white;
  
  &:hover {
    background: #444;
  }
`;

const HospitalCard = ({ name, location, image, onCall, onEmail }) => {
  return (
    <Card>
      <HospitalImage src={image} alt={name} />
      <InfoContainer>
        <HospitalName>{name}</HospitalName>
        <Location>{location}</Location>
        <ContactButtons>
          <CallButton onClick={onCall}>Call</CallButton>
          <EmailButton onClick={onEmail}>Email</EmailButton>
        </ContactButtons>
      </InfoContainer>
    </Card>
  );
};

export default HospitalCard; 