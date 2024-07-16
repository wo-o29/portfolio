import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import {
  hoverUnderline,
  MAIN_BOX_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "@/src/styles/const";

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

  @media ${MAIN_BOX_MEDIA_QUERY} {
    width: 21rem;
  }

  @media ${TABLET_MEDIA_QUERY} {
    width: 25rem;
  }

  @media ${MEDIUM_MEDIA_QUERY} {
    width: 21rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    width: 25rem;
  }

  @media ${SMALL_MEDIA_QUERY} {
    width: 21rem;
  }
`;

export const ProjectImage = styled(Image)`
  border-radius: 20px 20px 0 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.border}`};
  pointer-events: none;

  @media ${MAIN_BOX_MEDIA_QUERY} {
    width: 20.875rem;
  }

  @media ${TABLET_MEDIA_QUERY} {
    width: 24.875rem;
  }

  @media ${MEDIUM_MEDIA_QUERY} {
    width: 20.875rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    width: 24.875rem;
  }

  @media ${SMALL_MEDIA_QUERY} {
    width: 20.875rem;
  }
`;

export const Box = styled.div`
  padding: 0.3125rem 1.375rem 0.9375rem;
  border-radius: 0 0 20px 20px;

  @media ${MAIN_BOX_MEDIA_QUERY} {
    padding: 0.3125rem 1rem 0.9375rem;
  }

  @media ${TABLET_MEDIA_QUERY} {
    padding: 0.3125rem 1.375rem 0.9375rem;
  }

  @media ${MEDIUM_MEDIA_QUERY} {
    padding: 0.3125rem 1rem 0.9375rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 0.3125rem 1.375rem 0.9375rem;
  }

  @media ${SMALL_MEDIA_QUERY} {
    padding: 0.3125rem 1rem 0.9375rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3125rem 0;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
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

  @media ${MAIN_BOX_MEDIA_QUERY} {
    font-size: 0.65rem;
  }
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
