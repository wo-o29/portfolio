import styled from "@emotion/styled";
import Link from "next/link";

export const LinkButton = styled(Link)`
  width: 13.75rem;
  height: 3.4375rem;
  background-color: ${({ theme }) => theme.color.black100};
  border-radius: 12px;
  color: ${({ theme }) => theme.color.white100};
  display: flex;
  justify-content: center;
  padding: 0.85rem 1rem;
  overflow: hidden;
  transition: all 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.white100};
    transition: 0.75s;
  }

  &:hover > div > div {
    transform: translateY(-1.875rem);
  }
`;

export const LinkContainer = styled.div`
  overflow: hidden;
`;

export const LinkBox = styled.div`
  height: 1.875rem;
  transition: all 0.5s;
`;

export const LinkContent = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  overflow: hidden;
  font-family: "GmarketSansBold";
  font-size: 1rem;
  height: 1.875rem;
`;

export const LinkSubContent = styled(LinkContent)`
  color: ${({ theme }) => theme.color.black100};
`;
