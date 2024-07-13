import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div<{ isLeft: boolean }>`
  width: 37.5rem;
  height: 100vh;
  position: fixed;
  top: 0;
  ${({ isLeft }) => (isLeft ? "left: 0" : "right: 0")};
  z-index: -1;
`;

const float = keyframes`
   0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(calc(100vh + 300px));
      opacity: 0;
    }
`;

export const Box = styled.div<{ isDark?: boolean }>`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ isDark }) => (isDark ? "#fff" : "#232937")};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} infinite ease-in-out;
  z-index: -1;
`;
