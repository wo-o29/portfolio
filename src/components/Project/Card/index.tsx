import * as S from "./styled";
import { ProjectDataType } from "@/src/types/type";
import Link from "next/link";
import { useTheme } from "@/src/context/ThemeContext";
import DetailArrowIcon from "@/public/icons/detail-arrow.svg";
import { PROJECT_DATA } from "@/src/constants/project";

interface ProjectProps {
  projectData: ProjectDataType;
}

function ProjectCard({ projectData }: ProjectProps) {
  const { title, content, info, github, deploy, imageSrc, query } = projectData;
  const theme = useTheme();

  return (
    <S.Card className="card">
      <S.ProjectImage src={imageSrc} width={398} height={200} alt={title} />
      <S.Box>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.LinkBox>
            <Link href={github} target="_blank">
              <S.LinkImage
                src={
                  theme?.isDark ? "/icons/github-w.svg" : "/icons/github.svg"
                }
                width={28}
                height={28}
                alt="github"
              />
            </Link>
            <Link href={deploy} target="_blank">
              <S.LinkImage
                src={
                  theme?.isDark ? "/icons/deploy-w.svg" : "/icons/deploy.svg"
                }
                width={29}
                height={29}
                alt="deploy"
              />
            </Link>
          </S.LinkBox>
        </S.Header>
        <S.Info>{info}</S.Info>
        <S.Content>{content}</S.Content>
        <S.Detail>
          <S.DetailLink href={`project/${query}`}>
            자세히 보기
            <DetailArrowIcon color={theme?.isDark ? "#e6e6e6" : "#4f4f4f"} />
          </S.DetailLink>
        </S.Detail>
      </S.Box>
    </S.Card>
  );
}

export default ProjectCard;
