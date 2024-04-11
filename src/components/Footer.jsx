// Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #6200ea;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2024 CookBook
    </FooterContainer>
  );
};

export default Footer;
