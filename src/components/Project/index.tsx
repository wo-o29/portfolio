import * as S from "./styled";
import { PROJECT_DATA } from "@/src/constants/project";
import ProjectCard from "./Card";
import { MouseEvent, useRef } from "react";
import ArrowLeftIcon from "@/public/icons/arrow-left.svg";
import ArrowRightIcon from "@/public/icons/arrow-right.svg";
import useCarouselNavigationVisibility from "@/src/hooks/useCarouselNavigationVisibility";

function Project() {
  const listRef = useRef<HTMLUListElement>(null);
  const xDown = useRef<number | null>(null);
  const xUp = useRef<number | null>(null);
  const navigationVisible = useCarouselNavigationVisibility(listRef);

  const handleCarouselNavigationClick = (option: "next" | "prev") => {
    if (!listRef.current) {
      return;
    }

    listRef.current.scrollBy({
      left: option === "next" ? +100 : -100,
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCarouselMove = () => {
    if (!xDown.current || !xUp.current || !listRef.current) {
      return;
    }
    const xDiff = xDown.current - xUp.current;

    if (xDiff === 0) {
      return;
    }

    listRef.current.scrollBy({
      left: xDiff,
      top: 0,
      behavior: "smooth",
    });

    // 좌표 초기화
    xDown.current = null;
    xUp.current = null;
  };

  const handleCarouselMouseDown = (e: MouseEvent) => {
    xDown.current = e.clientX;
    document.body.style.userSelect = "none";
  };

  const handleCarouselMouseUp = (e: MouseEvent) => {
    xUp.current = e.clientX;
    handleCarouselMove();
    document.body.style.userSelect = "";
  };

  return (
    <S.Box>
      <S.Title>프로젝트</S.Title>
      <S.Text>
        캐러셀을 스와이프 하거나 내비게이션 버튼을 통해 프로젝트를 구경하실 수
        있습니다.
      </S.Text>
      <S.List
        ref={listRef}
        onMouseDown={handleCarouselMouseDown}
        onMouseUp={handleCarouselMouseUp}
      >
        {PROJECT_DATA.map((project) => (
          <ProjectCard key={project.id} projectData={project} />
        ))}
        {navigationVisible.prev && (
          <S.PrevButton onClick={() => handleCarouselNavigationClick("prev")}>
            <ArrowLeftIcon color="#000" />
          </S.PrevButton>
        )}
        {navigationVisible.next && (
          <S.NextButton onClick={() => handleCarouselNavigationClick("next")}>
            <ArrowRightIcon color="#000" />
          </S.NextButton>
        )}
      </S.List>
    </S.Box>
  );
}

export default Project;
