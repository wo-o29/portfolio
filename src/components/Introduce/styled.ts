import { hoverUnderline } from "@/src/styles/const";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { MEDIUM_MEDIA_QUERY, MOBILE_MEDIA_QUERY } from "@/src/styles/const";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Box = styled.div`
  width: 53.125rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 15.625rem;

  @media ${MEDIUM_MEDIA_QUERY} {
    gap: 10rem;
    width: 40rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    width: 100%;
    margin: 0 2rem;
    gap: 5rem;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  padding-top: 8.125rem;

  @media ${MEDIUM_MEDIA_QUERY} {
    padding-top: 6.125rem;
  }
`;

export const MainText = styled.h2`
  font-size: 4.375rem;
  line-height: 6.25rem;
  font-family: "GmarketSansBold";

  @media ${MEDIUM_MEDIA_QUERY} {
    font-size: 3.375rem;
    line-height: 5.25rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 2.375rem;
    line-height: 4.25rem;
  }
`;

export const SubText = styled.p`
  font-size: 1.125rem;
  line-height: 2.5rem;
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15.625rem;
  width: 100%;

  @media ${MEDIUM_MEDIA_QUERY} {
    justify-content: space-between;
    gap: 10rem;
    margin: 0 1rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    gap: 3rem;
    margin: 0;
    width: 90%;
  }
`;

export const LinkBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => hoverUnderline(theme)}
`;

export const LinkImage = styled(Image)`
  transition: transform 0.75s;
  width: 5.625rem;
  height: 5.625rem;

  &:hover {
    transform: rotate(360deg);
  }

  @media ${MOBILE_MEDIA_QUERY} {
    width: 4.625rem;
    height: 4.625rem;
  }
`;

export const LinkTitle = styled.span`
  font-family: "GmarketSansBold";
  margin-top: 0.9375rem;
  font-size: 1.5rem;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1.2rem;
  }
`;
