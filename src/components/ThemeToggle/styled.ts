import styled from "@emotion/styled";

export const ToggleButton = styled.button`
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
  background-color: ${({ theme }) => theme.color.black40};
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .theme-icon {
    color: ${({ theme }) => theme.color.white100};
    width: 1.5625rem;
    height: 1.5625rem;
  }
`;
