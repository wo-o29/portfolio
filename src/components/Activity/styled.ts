import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Box = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h2`
  font-size: 2.875rem;
  text-align: center;
  padding-top: 5rem;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 34.375rem);
  margin: 0 auto;
  width: 81.25rem;
  padding-left: 5rem;
  justify-content: space-between;
  gap: 5rem 0;
  margin-top: 6.25rem;
`;

const opacity = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2.5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Item = styled.li<{ isView: boolean }>`
  list-style: circle;
  ${({ isView }) =>
    isView &&
    css`
      animation: ${opacity} 3s;
    `}
`;

export const TitleBox = styled.div`
  padding-bottom: 0.625rem;
`;

export const ItemTitle = styled.h3`
  font-size: 1.5rem;
  padding-right: 0.625rem;
  display: inline;
`;

export const ItemDate = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.gray60};
  display: inline-block;
  padding-top: 0.3125rem;
`;

export const ItemContent = styled.p`
  font-size: 1.125rem;
  line-height: 2rem;
  word-break: keep-all;
`;
