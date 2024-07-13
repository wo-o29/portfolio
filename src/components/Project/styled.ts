import styled from "@emotion/styled";

export const Box = styled.section`
  width: 81.25rem;
  height: 100vh;
  margin: 0 auto;
  padding-top: 9.375rem;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  letter-spacing: 0.1875rem;
  text-align: center;
`;

export const Text = styled.h3`
  color: ${({ theme }) => theme.color.gray60};
  padding: 2.1875rem 1rem 0 0;
  text-align: right;
  font-size: 0.875rem;
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
`;

export const PrevButton = styled(Button)`
  left: -2%;
`;

export const NextButton = styled(Button)`
  right: -2%;
`;
