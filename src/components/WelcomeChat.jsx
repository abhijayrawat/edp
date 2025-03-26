import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #f8fff0;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Greeting = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const Message = styled.p`
  color: #666;
  font-size: 16px;
  margin: 5px 0 15px 0;
`;

const ChatInput = styled.div`
  position: relative;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  font-size: 14px;
  background: white;
  
  &::placeholder {
    color: #999;
  }
`;

const SendButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  
  svg {
    width: 20px;
    height: 20px;
    fill: #98c93c;
  }
`;

const WelcomeChat = ({ userName }) => {
  return (
    <Container>
      <Greeting>Good Morning, {userName}</Greeting>
      <Message>TAKE A DEEP BREATH!</Message>
      <ChatInput>
        <Input type="text" placeholder="Type your thoughts here" />
        <SendButton>
          <svg viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </SendButton>
      </ChatInput>
    </Container>
  );
};

export default WelcomeChat; 