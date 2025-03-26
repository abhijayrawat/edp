import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0 0 15px 0;
  font-size: 18px;
  color: #333;
`;

const DeviceCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const DeviceImage = styled.img`
  width: 100px;
  height: auto;
`;

const DeviceInfo = styled.div`
  flex: 1;
`;

const DeviceName = styled.h3`
  margin: 0 0 5px 0;
  font-size: 24px;
  color: #333;
`;

const DeviceStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #98c93c;
`;

const StatusText = styled.span`
  color: #666;
  font-size: 14px;
`;

const BatteryStatus = styled.div`
  color: #666;
  font-size: 14px;
`;

const FindButton = styled.button`
  background: #98c93c;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  
  &:hover {
    background: #89ba33;
  }
`;

const DeviceInfoComponent = () => {
  return (
    <Container>
      <Title>Your Device</Title>
      <DeviceCard>
        <DeviceImage src="/nexus-x1.png" alt="NEXUS X1" />
        <DeviceInfo>
          <DeviceName>NEXUS X1</DeviceName>
          <DeviceStatus>
            <StatusDot />
            <StatusText>Connected, Active</StatusText>
          </DeviceStatus>
          <BatteryStatus>90% Battery</BatteryStatus>
          <FindButton>Find my Device</FindButton>
        </DeviceInfo>
      </DeviceCard>
    </Container>
  );
};

export default DeviceInfoComponent; 