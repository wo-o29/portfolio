import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-color: ${({ theme }) => theme.color.white100};
  border: ${({ theme }) => `1px solid ${theme.color.black100}`};
  color: ${({ theme }) => theme.color.black100};
  padding: 0.95rem 0;
  height: 3.125rem;
  width: 9.375rem;
  overflow: hidden;
  transition: all 0.5ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.black100};
    color: ${({ theme }) => theme.color.white100};
  }

  &:hover > div {
    transform: translateY(-3.125rem);
  }
`;

export const Box = styled.div`
  transition: all 0.5s;
`;

export const List = styled.ul`
  display: flex;
  z-index: 999;
  height: 3.125rem;
  width: 100%;
  justify-content: center;
`;

export const ListItem = styled.li`
  width: 100%;
  text-align: center;
  font-size: 1rem;
`;

export const Count = styled.span`
  letter-spacing: 0.0625rem;
`;
