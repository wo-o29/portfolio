import { useEffect } from "react";
import * as S from "./styled";
import { TECH_ICON } from "@/src/constants/techIcon";
import { useTheme } from "@/src/context/ThemeContext";

interface LayoutProps {
  isLeft: boolean;
}

function Layout({ isLeft }: LayoutProps) {
  const theme = useTheme();
  const iconList = isLeft
    ? TECH_ICON.slice(0, TECH_ICON.length / 2)
    : TECH_ICON.slice(TECH_ICON.length / 2, TECH_ICON.length);

  useEffect(() => {
    const iconElements = document.querySelectorAll(".icon");

    const getRandomPosition = () => {
      let x = Math.random() * 600;
      const y = Math.random() * -300;

      if (x < 50) {
        x += Math.max(Math.random() * 75, 2);
      }

      if (x > 550) {
        x -= Math.random() * 75;
      }

      return { x, y };
    };

    iconElements.forEach((icon) => {
      const techIcon = icon as HTMLElement;
      const { x, y } = getRandomPosition();

      techIcon.style.left = `${x}px`;
      techIcon.style.top = `${y}px`;
      techIcon.style.animationDuration = `${Math.random() * 10 + 5}s`;
    });
  }, []);

  return (
    <S.Container isLeft={isLeft}>
      {iconList.map((icon) => {
        return (
          <S.Box key={icon.key} className="icon" isDark={theme?.isDark}>
            <icon.components
              width={25}
              height={25}
              color={theme?.isDark ? icon.color : "#fff"}
            />
          </S.Box>
        );
      })}
    </S.Container>
  );
}

export default Layout;
