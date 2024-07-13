import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { hoverUnderline } from "@/src/styles/const";

export const Card = styled.li`
  width: 25rem;
  height: auto;
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  border-radius: 20px;
  box-shadow:
    0px 1px 2px 0px rgba(255, 255, 255, 0.32),
    0px 0px 1px 0px rgba(255, 255, 255, 0.28),
    0px 0px 1px 0px rgba(255, 255, 255, 0.28);
  transition: margin 0.5s;
  background-color: ${({ theme }) => theme.color.gray10};
  scroll-snap-align: start; // 카드가 스크롤 시작 부분에 스냅
  cursor: pointer;
`;

export const ProjectImage = styled(Image)`
  border-radius: 20px 20px 0 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.border}`};
  pointer-events: none;
`;

export const Box = styled.div`
  padding: 0.3125rem 1.375rem 0.9375rem;
  border-radius: 0 0 20px 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3125rem 0;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-family: "GmarketSansBold";
`;

export const LinkBox = styled.p`
  display: flex;
  gap: 0.9375rem;
  align-items: center;
`;

export const LinkImage = styled(Image)`
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Info = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.gray60};
`;

export const Content = styled.p`
  margin: 0.5rem 0 0;
  line-height: 1.875rem;
  word-break: keep-all;
`;

const Arrow = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const DetailLink = styled(Link)`
  display: flex;
  width: 5.3rem;
  gap: 0.3125rem;
  align-items: center;
  justify-content: right;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.black100};
  ${({ theme }) => hoverUnderline(theme)}

  &:hover {
    animation: ${Arrow} 1s infinite;
  }
`;

export const Detail = styled.p`
  display: flex;
  justify-content: right;
`;
