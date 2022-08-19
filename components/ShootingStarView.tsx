import styled, { keyframes } from "styled-components";
const animate = keyframes`
0% {
    transform: rotate(315deg) translateX(0);
    opacity:0;
}
20% {
    opacity: 1;
    transform: rotate(315deg) translateX(0);
}
100% {
    transform: rotate(315deg) translateX(-1000px);
    opacity: 0;
}
`;

const ShootingStarContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;
const ShootingStar = styled.span`
  position: absolute;
  z-index: 4;
  top: 0;
  left: 30%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
  animation: ${animate} 3s linear infinite;
  &::before {
    z-index: 4;
    content: " ";
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }
  &: nth-child(1) {
    top: 0;
    right: 0;
    left: initial;
    animation-delay: 0.2s;
    animation-duration: 2s;
  }
  &: nth-child(2) {
    top: 80px;
    right: 0px;
    left: initial;
    animation-delay: 0.4s;
    animation-duration: 1.5s;
  }
  &: nth-child(3) {
    top: 0px;
    right: 180px;
    left: initial;
    animation-delay: 0.6s;
    animation-duration: 2.5s;
  }
  &: nth-child(4) {
    top: 0;
    right: 400px;
    left: initial;
    animation-delay: 0.8s;
    animation-duration: 3s;
  }
  &: nth-child(5) {
    top: 0;
    right: 600px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 1.75s;
  } ;
`;
export const ShootingStarView = () => {
  return (
    <ShootingStarContainer>
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
    </ShootingStarContainer>
  );
};
