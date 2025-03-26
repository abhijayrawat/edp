import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #98c93c;
  border-radius: 15px;
  padding: 20px;
  color: white;
`;

const Title = styled.h2`
  margin: 0 0 20px 0;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 20px 0;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  
  span:first-child {
    opacity: 0.8;
  }
`;

const UpdateButton = styled.button`
  background: rgba(0,0,0,0.2);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  
  &:hover {
    background: rgba(0,0,0,0.3);
  }
`;

const PatientInfoCard = ({ patientData, onUpdate }) => {
  const infoItems = [
    { label: 'Age', value: patientData.age },
    { label: 'Blood Gr', value: patientData.bloodGroup },
    { label: 'Gender', value: patientData.gender },
    { label: 'Height', value: patientData.height },
    { label: 'Allergies', value: patientData.allergies },
    { label: 'Weight', value: patientData.weight },
    { label: 'Diseases', value: patientData.diseases },
    { label: 'Lives in', value: patientData.location }
  ];

  return (
    <Card>
      <Title>
        <span>ID-{patientData.id}</span>
      </Title>
      <InfoGrid>
        {infoItems.map((item, index) => (
          <InfoItem key={index}>
            <span>{item.label}</span>
            <span>{item.value}</span>
          </InfoItem>
        ))}
      </InfoGrid>
      <UpdateButton onClick={onUpdate}>Update</UpdateButton>
    </Card>
  );
};

export default PatientInfoCard; 