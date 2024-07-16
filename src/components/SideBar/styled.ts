import styled from "@emotion/styled";
import { hoverUnderline } from "@/src/styles/const";
import { MOBILE_MEDIA_QUERY } from "@/src/styles/const";

export const SideBar = styled.div`
  position: fixed;
  top: 50%;
  right: 3%;
  transform: translate(0, -50%);
  text-align: center;

  @media ${MOBILE_MEDIA_QUERY} {
    position: sticky;
    transform: translate(0, -50%);
    bottom: 2%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: row;
    justify-content: center;
    gap: 2.5rem;
  }
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
