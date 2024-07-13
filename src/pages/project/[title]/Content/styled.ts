import styled from "@emotion/styled";

export const SubBox = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme.color.border}`};
  padding: 1.875rem 0;
`;

export const SubTitle = styled.h3`
  font-size: 1.625rem;
  padding-bottom: 1.25rem;
`;

export const SubList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const SubItem = styled.li`
  font-size: 1.125rem;
  line-height: 2.5rem;
  list-style: circle;
  word-break: keep-all;
  margin-left: 1.25rem;
`;
