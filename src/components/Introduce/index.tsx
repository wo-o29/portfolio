import { useTheme } from "@/src/context/ThemeContext";
import * as S from "./styled";

const linkArray = [
  {
    title: "github",
    dark: "/icons/github-w.svg",
    light: "/icons/github.svg",
    url: "https://github.com/wo-o29",
  },
  {
    title: "velog",
    dark: "/icons/velog-w.svg",
    light: "/icons/velog.svg",
    url: "https://velog.io/@woogur29",
  },
  {
    title: "linkedin",
    dark: "/icons/linkedin-w.svg",
    light: "/icons/linkedin.svg",
    url: "https://www.linkedin.com/",
  },
];

function Introduce() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.TextBox>
        <S.MainText>Front-End Developer</S.MainText>
        <S.MainText>Lee Woo Hyeok</S.MainText>
        <S.SubText>Email: woogur29@gmail.com</S.SubText>
        <S.SubText>Tel: 010-9151-4746</S.SubText>
      </S.TextBox>
      <S.SocialBox>
        {linkArray.map((link, idx) => (
          <S.LinkBox key={idx} href={link.url} target="_blank">
            <S.LinkImage
              key={link.title}
              src={theme?.isDark ? link.dark : link.light}
              width={90}
              height={link.title === "github" ? 85 : 90}
              alt={link.title}
            />
            <S.LinkTitle>{link.title}</S.LinkTitle>
          </S.LinkBox>
        ))}
      </S.SocialBox>
    </S.Container>
  );
}

export default Introduce;
