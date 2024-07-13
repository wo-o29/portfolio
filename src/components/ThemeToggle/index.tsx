import { useTheme } from "@/src/context/ThemeContext";
import LightThemeIcon from "@/public/icons/light.svg";
import DarkThemeIcon from "@/public/icons/dark.svg";
import * as S from "./styled";

function ThemeToggle() {
  const theme = useTheme();

  return (
    <S.ToggleButton type="button" onClick={theme?.toggleTheme}>
      {theme?.isDark ? (
        <LightThemeIcon className="theme-icon" />
      ) : (
        <DarkThemeIcon className="theme-icon" />
      )}
    </S.ToggleButton>
  );
}

export default ThemeToggle;
