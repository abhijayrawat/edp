import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ECGGraph from '../components/ECGGraph';
import MetricCard from '../components/MetricCard';
import PatientInfoCard from '../components/PatientInfoCard';
import HealthTrends from '../components/HealthTrends';
import HospitalCard from '../components/HospitalCard';
import DeviceInfo from '../components/DeviceInfo';
import WelcomeChat from '../components/WelcomeChat';

const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;
  margin-top: 20px;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background: white;
  border-radius: 15px;
  padding: 20px;
`;

const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HealthCenterSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;

  h2 {
    margin: 0 0 15px 0;
    font-size: 18px;
    color: #333;
  }
`;

const PatientDashboard = () => {
  const patientData = {
    id: '220239493',
    name: 'Guru Dutt',
    age: 68,
    gender: 'Male',
    bloodGroup: 'A+',
    height: '1.78 m',
    weight: '75 kg',
    allergies: 'Milk, Dust',
    diseases: 'Diabetes',
    location: 'Kolkata',
    avatar: '/avatar.jpg'
  };

  const healthMetrics = [
    {
      title: 'Body Temp.',
      value: '36.8°C',
      change: '+0.2% from last week'
    },
    {
      title: 'Oxygen Level',
      value: '95%',
      change: '+0.2% from last week'
    },
    {
      title: 'Heart Rate',
      value: '92 bpm',
      change: '+0.2% from last week'
    }
  ];

  const healthTrends = [
    { name: 'Sudden Cardiac Arrest', date: 'Feb, 14' },
    { name: 'Sudden Cardiac Arrest', date: 'Feb, 14' },
    { name: 'Sudden Cardiac Arrest', date: 'Feb, 14' },
    { name: 'Sudden Cardiac Arrest', date: 'Feb, 14' }
  ];

  const hospitalInfo = {
    name: 'Apollo Hospitals',
    location: 'Salt lake, Kolkata',
    image: '/apollo-hospital.jpg'
  };

  const handleUpdate = () => {
    console.log('Update patient info');
  };

  const handleCall = () => {
    console.log('Calling hospital');
  };

  const handleEmail = () => {
    console.log('Emailing hospital');
  };

  return (
    <Container>
      <Header userAvatar={patientData.avatar} />
      <Content>
        <MainSection>
          <ECGGraph />
          <MetricsGrid>
            {healthMetrics.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                change={metric.change}
              />
            ))}
          </MetricsGrid>
        </MainSection>

        <SidePanel>
          <PatientInfoCard
            patientData={patientData}
            onUpdate={handleUpdate}
          />
          <DeviceInfo />
          <HealthTrends trends={healthTrends} />
          <HealthCenterSection>
            <h2>Your Health Centre</h2>
            <HospitalCard
              name={hospitalInfo.name}
              location={hospitalInfo.location}
              image={hospitalInfo.image}
              onCall={handleCall}
              onEmail={handleEmail}
            />
          </HealthCenterSection>
          <WelcomeChat userName={patientData.name} />
        </SidePanel>
      </Content>
    </Container>
  );
};

export default PatientDashboard; 