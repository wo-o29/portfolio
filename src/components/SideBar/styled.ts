import styled from "@emotion/styled";
import { hoverUnderline } from "@/src/styles/const";

export const SideBar = styled.aside`
  position: fixed;
  top: 50%;
  right: 3%;
  transform: translate(0, -50%);
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SideButton = styled.button<{ isSelect: boolean }>`
  position: relative;
  ${({ theme }) => hoverUnderline(theme)}
  transform: font-size 1s;
  color: ${({ isSelect, theme }) =>
    isSelect ? theme.color.black100 : theme.color.gray60};
  font-size: 1rem;
`;

export const SelectEffect = styled.span`
  position: absolute;
  left: -0.8125rem;
  top: 0.0938rem;
  font-size: 0.9rem;
`;
