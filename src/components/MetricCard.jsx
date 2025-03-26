import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 16px;
    height: 16px;
    fill: #98c93c;
  }
`;

const Value = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #98c93c;
  margin: 10px 0;
`;

const Change = styled.div`
  color: #666;
  font-size: 12px;
`;

const VisualizationArea = styled.div`
  margin: 15px -20px -20px;
  padding: 20px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BodyTempVisualization = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  .body-icon {
    width: 40px;
    height: auto;
    opacity: 0.3;
  }
  
  .bars {
    display: flex;
    gap: 3px;
    height: 60px;
    align-items: flex-end;
  }
  
  .bar {
    width: 4px;
    background: #98c93c;
    opacity: 0.2;
    
    &.active {
      opacity: 1;
    }
  }
`;

const OxygenVisualization = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  
  .line {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 2px;
    background: #eee;
  }
  
  .wave {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    
    path {
      stroke: #98c93c;
      stroke-width: 2;
      fill: none;
    }
  }
`;

const HeartRateVisualization = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  
  .heart {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    
    path {
      fill: #98c93c;
    }
  }
  
  .rings {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: pulse 2s infinite;
    
    circle {
      fill: none;
      stroke: #98c93c;
      stroke-width: 1;
      opacity: 0.2;
    }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.2); opacity: 0.1; }
    100% { transform: scale(1); opacity: 0.2; }
  }
`;

const MetricCard = ({ title, value, change }) => {
  const renderVisualization = () => {
    switch (title) {
      case 'Body Temp.':
        return (
          <BodyTempVisualization>
            <svg className="body-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14v7h2V6h-2z"/>
            </svg>
            <div className="bars">
              {Array(8).fill(null).map((_, i) => (
                <div 
                  key={i} 
                  className={`bar ${i === 4 ? 'active' : ''}`} 
                  style={{ height: `${30 + Math.random() * 30}px` }}
                />
              ))}
            </div>
          </BodyTempVisualization>
        );
      case 'Oxygen Level':
        return (
          <OxygenVisualization>
            <div className="line" />
            <svg className="wave" viewBox="0 0 100 40">
              <path d="M0,20 C20,10 30,30 50,20 C70,10 80,30 100,20" />
            </svg>
          </OxygenVisualization>
        );
      case 'Heart Rate':
        return (
          <HeartRateVisualization>
            <svg className="heart" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <svg className="rings" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" />
              <circle cx="50" cy="50" r="35" />
              <circle cx="50" cy="50" r="25" />
            </svg>
          </HeartRateVisualization>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        <IconButton>
          <svg viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </IconButton>
      </Header>
      <Value>{value}</Value>
      <Change>{change}</Change>
      <VisualizationArea>
        {renderVisualization()}
      </VisualizationArea>
    </Card>
  );
};

export default MetricCard; 