import styled from "@emotion/styled";
import { darkTheme, textOverflowEllipsis } from "@/src/styles/const";
import Link from "next/link";

export const PostBox = styled.li`
  width: 100%;
  height: 10rem;
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  background-color: ${({ theme }) => theme.color.gray10};
`;

export const PostLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  transition: all 0.5s;

  &:hover {
    color: ${({ theme }) =>
      theme === darkTheme ? theme.color.black100 : theme.color.white100};
    background-color: ${({ theme }) =>
      theme === darkTheme ? theme.color.white100 : theme.color.black100};
  }

  &:hover > div > p {
    color: ${({ theme }) =>
      theme === darkTheme ? theme.color.black40 : theme.color.gray20};
  }
`;

export const TextBox = styled.div`
  width: 53.125rem;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostTitle = styled.h3`
  ${textOverflowEllipsis(1)}
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

export const PostContent = styled.p`
  ${textOverflowEllipsis(2)}
  font-size: 1rem;
  color: ${({ theme }) => theme.color.gray60};
  margin-bottom: 0.5rem;
  line-height: 1.75rem;
  transition: all 0.5s;
`;

export const PostLinkBox = styled.p`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  transition: all 0.5s;
`;

export const PostLinkText = styled.span`
  ${textOverflowEllipsis(1)}
  font-size: 1rem;
`;
