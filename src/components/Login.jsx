import React from 'react';
import styled from 'styled-components';

export default function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          impedit magni facere provident quo perferendis.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    background-image: url('/images/login-background.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.6px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 12px;
  letter-spacing: 1.6px;
  line-height: 1.5;
  text-align: center;
`;
const CTALogoTwo = styled.img`
  margin-top: 30px;
  width: 90%;
`;
