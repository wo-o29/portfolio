import * as S from "./styled";
import GitHubIcon from "@/public/icons/github-icon.svg";
import DeployIcon from "@/public/icons/deploy.svg";

interface LinkButtonProps {
  link: string;
  isDark?: boolean;
  icon: string;
  size: number;
  text: string;
}

const iconObject: any = {
  ["github"]: { components: GitHubIcon },
  ["deploy"]: { components: DeployIcon },
};

function LinkButton({ link, isDark, icon, size, text }: LinkButtonProps) {
  const targetIcon = iconObject[icon];

  return (
    <S.LinkButton href={link} target="_blank">
      <S.LinkContainer>
        <S.LinkBox>
          <S.LinkContent>
            <targetIcon.components
              width={size}
              height={size}
              color={isDark ? "#000" : "#fff"}
            />
            Github Link
          </S.LinkContent>
          <S.LinkSubContent>
            <targetIcon.components
              width={size}
              height={size}
              color={isDark ? "#fff" : "#000"}
            />
            Github Link
          </S.LinkSubContent>
        </S.LinkBox>
      </S.LinkContainer>
    </S.LinkButton>
  );
}

export default LinkButton;
