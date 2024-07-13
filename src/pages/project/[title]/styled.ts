import styled from "@emotion/styled";
import Image from "next/image";
import { hoverUnderline } from "@/src/styles/const";
import Link from "next/link";

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.color.gray10};
  border-bottom: ${({ theme }) => `1px solid ${theme.color.border}`};
  z-index: 1;
`;

export const HeaderLink = styled(Link)`
  ${({ theme }) => hoverUnderline(theme)}
`;

export const Container = styled.main`
  width: 68.75rem;
  margin: 0 auto;
`;

export const MainBox = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 6.875rem;
  height: 23.125rem;
`;

export const LeftBox = styled.div``;

export const Title = styled.h2`
  font-family: "GmarketSansBold";
  font-size: 2.5rem;
  padding-top: 0.9375rem;
`;

export const Info = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.gray80};
  padding: 0.625rem 0 1.875rem;
`;

export const Content = styled.p`
  font-size: 1.25rem;
  padding-top: 0.625rem;
  word-break: keep-all;
  line-height: 1.875rem;
  height: 5rem;
`;

export const TechTitle = styled.h3`
  font-size: 1.625rem;
  padding: 0.625rem 0 0.3125rem;
`;

export const TechList = styled.ul`
  display: flex;
  padding-top: 0.625rem;
  gap: 0.9375rem;
`;

export const TechBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.black100};
  border-radius: 10px;
  width: 2.8125rem;
  height: 2.8125rem;

  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const LinkImage = styled(Image)`
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
`;

export const LinkButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PostBox = styled.section`
  border-top: ${({ theme }) => `1px solid ${theme.color.border}`};
  margin-bottom: 3.125rem;
`;

export const PostTitle = styled.h3`
  font-size: 1.5rem;
  padding: 1.875rem 0;
`;

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  width: 100%;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
  height: 3.75rem;
  border-top: ${({ theme }) => `1px solid ${theme.color.border}`};
  background-color: ${({ theme }) => theme.color.gray20};
`;

export const FooterLink = styled(Link)`
  border-bottom: ${({ theme }) => `1px solid ${theme.color.border}`};
  padding-top: 0.18rem;
`;
