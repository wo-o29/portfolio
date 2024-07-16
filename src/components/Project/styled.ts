import styled from "@emotion/styled";
import {
  MAIN_BOX_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "@/src/styles/const";

export const Box = styled.section`
  width: 81.25rem;
  height: 100vh;
  margin: 0 auto;
  padding-top: 9.375rem;
  position: relative;

  @media ${MAIN_BOX_MEDIA_QUERY} {
    width: 69.25rem;
  }

  @media ${TABLET_MEDIA_QUERY} {
    width: 53.125rem;
  }

  @media ${MEDIUM_MEDIA_QUERY} {
    width: 45.125rem;
    padding-top: 7.375rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    width: 25rem;
    padding-top: 5.375rem;
  }

  @media ${SMALL_MEDIA_QUERY} {
    width: 21rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  letter-spacing: 0.1875rem;
  text-align: center;

  @media ${TABLET_MEDIA_QUERY} {
    font-size: 2.75rem;
  }
`;

export const Text = styled.h3`
  color: ${({ theme }) => theme.color.gray60};
  padding: 2.1875rem 1rem 0 0;
  text-align: right;
  font-size: 0.875rem;

  @media ${TABLET_MEDIA_QUERY} {
    padding: 1.1875rem 1rem 0 0;
    font-size: 0.775rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 0.75rem 1rem 0 0;
  }
`;

export const MobileLineBreak = styled.br`
  display: none;

  @media ${MOBILE_MEDIA_QUERY} {
    display: block;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  padding-top: 1.25rem;
  gap: 3.125rem;
  overflow-x: auto; // 가로방향 스크롤
  scroll-behavior: smooth; // 스크롤 부드럽게
  scroll-snap-type: x mandatory; // 스크롤이 스냅 지점에 정렬
  scrollbar-width: none;
`;

const Button = styled.button`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgb(204, 204, 204);
  top: 49%;
  transform: translateY(-50%);
  background-color: #ffffff;
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  @media ${TABLET_MEDIA_QUERY} {
    top: 46.5%;
  }

  @media ${MEDIUM_MEDIA_QUERY} {
    top: 43%;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    top: 40%;
  }
`;

export const PrevButton = styled(Button)`
  left: -2%;

  @media ${TABLET_MEDIA_QUERY} {
    left: -2.5%;
  }

  @media ${MEDIUM_MEDIA_QUERY} {
    left: -3%;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    left: -5%;
  }
`;

export const NextButton = styled(Button)`
  right: -2%;

  @media ${TABLET_MEDIA_QUERY} {
    right: -2.5%;
  }

  @media ${MEDIUM_MEDIA_QUERY} {
    right: -3%;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    right: -5%;
  }
`;
