import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    height: 32px;
    width: auto;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 0 1 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 16px; /* Adjusted padding for better visual balance */
  border-radius: 25px; /* Slightly more rounded corners */
  border: 1px solid #ddd;
  font-size: 14px;
  background: #f5f5f5;
  transition: border-color 0.3s ease; /* Added smooth transition for focus */

  &:focus {
    border-color: #98c93c; /* Highlight on focus */
    outline: none; /* Remove default focus outline */
  }

  &::placeholder {
    color: #999;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);

  svg {
    width: 18px; /* Slightly larger icon */
    height: 18px;
    fill: #666;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease; /* Added smooth transition for hover */

  svg {
    width: 20px;
    height: 20px;
    fill: #666;
  }

  &:hover {
    transform: scale(1.1); /* Slight scale up on hover */
    svg {
      fill: #98c93c;
    }
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s ease; /* Added smooth transition for hover */

  &:hover {
    transform: scale(1.1); /* Slight scale up on hover */
  }
`;

const Header = ({ userAvatar }) => {
  return (
    <HeaderWrapper>
      <Logo>
        <img src="/nex-care.png" alt="NexCare Logo" />
      </Logo>

      <SearchContainer>
        <SearchInput type="text" placeholder="Search" />
        <SearchIcon>
          <svg viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </SearchIcon>
      </SearchContainer>

      <RightSection>
        <IconButton>
          <svg viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
          </svg>
        </IconButton>
        <IconButton>
          <svg viewBox="0 0 24 24">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>
        </IconButton>
        <Avatar src={userAvatar || '/default-avatar.jpg'} alt="Profile" />
      </RightSection>
    </HeaderWrapper>
  );
}

export default Header;