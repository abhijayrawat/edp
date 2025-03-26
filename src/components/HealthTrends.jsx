import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0 0 15px 0;
  font-size: 18px;
  color: #333;
`;

const TrendsList = styled.div`
  margin-top: 15px;
`;

const TrendItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const TrendDate = styled.span`
  color: #666;
  font-size: 14px;
`;

const TrendName = styled.span`
  color: #333;
  font-size: 14px;
`;

const HealthTrends = ({ trends }) => {
  return (
    <Container>
      <Title>Past Health Trends</Title>
      <TrendsList>
        {trends.map((trend, index) => (
          <TrendItem key={index}>
            <TrendName>{trend.name}</TrendName>
            <TrendDate>{trend.date}</TrendDate>
          </TrendItem>
        ))}
      </TrendsList>
    </Container>
  );
};

export default HealthTrends; 