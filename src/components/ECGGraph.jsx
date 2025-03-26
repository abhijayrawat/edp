import React from 'react';
import styled from 'styled-components';

const GraphContainer = styled.div`
  background: #1a1a1a;
  border-radius: 15px;
  padding: 20px;
  color: white;
`;

const Title = styled.h2`
  margin: 0 0 15px 0;
  font-size: 18px;
  font-weight: normal;
`;

const GraphArea = styled.div`
  height: 250px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,0.1);
  }
`;

const TimeAxis = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: rgba(255,255,255,0.5);
  font-size: 12px;
`;

const ValueAxis = styled.div`
  position: absolute;
  left: -30px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgba(255,255,255,0.5);
  font-size: 12px;
`;

const CurrentValue = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const ECGGraph = () => {
  return (
    <GraphContainer>
      <Title>ECG Graph</Title>
      <GraphArea>
        <ValueAxis>
          <span>120</span>
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>0</span>
        </ValueAxis>
        <CurrentValue>92</CurrentValue>
        {/* Graph visualization would go here */}
      </GraphArea>
      <TimeAxis>
        <span>9:00</span>
        <span>10:00</span>
        <span>11:00</span>
        <span>12:00</span>
        <span>13:00</span>
        <span>14:00</span>
        <span>15:00</span>
      </TimeAxis>
    </GraphContainer>
  );
};

export default ECGGraph; 