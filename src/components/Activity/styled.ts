import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { TABLET_MEDIA_QUERY, MOBILE_MEDIA_QUERY } from "@/src/styles/const";

export const Box = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h2`
  font-size: 2.875rem;
  text-align: center;
  padding-top: 5rem;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 2.25rem;
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 34.375rem);
  margin: 6.25rem auto 0;
  width: 81.25rem;
  padding-left: 5rem;
  justify-content: space-between;
  gap: 5rem 0;

  @media ${TABLET_MEDIA_QUERY} {
    grid-template-columns: repeat(1, 34.375rem);
    width: 40rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    margin: 2rem auto 0;
    grid-template-columns: repeat(1, 20rem);
    width: 20rem;
    padding-left: 1rem;
  }
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

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1.25rem;
  }
`;

export const ItemDate = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.gray60};
  display: inline-block;
  padding-top: 0.3125rem;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 0.75rem;
  }
`;

export const ItemContent = styled.p`
  font-size: 1.125rem;
  line-height: 2rem;
  word-break: keep-all;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1rem;
  }
`;
