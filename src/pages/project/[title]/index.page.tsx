import { PROJECT_DATA } from "@/src/constants/project";
import { GetStaticPropsContext } from "next/types";
import * as S from "./styled";
import { useTheme } from "@/src/context/ThemeContext";
import { TECH_ICON_OBJECT } from "@/src/constants/techIcon";
import Content from "./Content";
import LinkButton from "./LinkButton";
import Post from "./Post";

export const getStaticPaths = () => {
  const paths = PROJECT_DATA.map((project) => ({
    params: { title: project.query },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context: GetStaticPropsContext) => {
  const data = PROJECT_DATA.find(
    (project) => project.query === context.params?.title,
  );

  return {
    props: {
      data,
    },
  };
};

interface ProjectDetailProps {
  data: (typeof PROJECT_DATA)[0];
}

function ProjectDetail({ data }: any) {
  const {
    title,
    content,
    info,
    github,
    deploy,
    imageSrc,
    techStack,
    reason,
    contribution,
    retrospect,
    post,
  } = data;

  const theme = useTheme();

  return (
    <>
      <title>{title}</title>
      <S.Header>
        <S.HeaderLink href="/">메인으로 이동</S.HeaderLink>
      </S.Header>
      <S.Container>
        <S.MainBox>
          <S.LeftBox>
            <S.Title>{title}</S.Title>
            <S.Info>{info}</S.Info>
            <S.Content>{content}</S.Content>
            <S.TechTitle>기술 스택</S.TechTitle>
            <S.TechList>
              {techStack?.map((tech: any) => {
                const icon = TECH_ICON_OBJECT[tech.key];
                return (
                  <S.TechBox key={tech.key}>
                    <icon.components
                      width={35}
                      height={35}
                      color={theme?.isDark ? tech.color : "#fff"}
                    />
                  </S.TechBox>
                );
              })}
            </S.TechList>
          </S.LeftBox>
          <S.RightBox>
            <S.LinkImage
              src={imageSrc}
              width={450}
              height={250}
              alt={`${title} 프로젝트 이미지`}
            />
            <S.LinkButtonBox>
              <LinkButton
                link={github}
                isDark={theme?.isDark}
                icon="github"
                size={26}
                text="Github Link"
              />
              <LinkButton
                link={deploy}
                isDark={theme?.isDark}
                icon="deploy"
                size={30}
                text="Deploy Link"
              />
            </S.LinkButtonBox>
          </S.RightBox>
        </S.MainBox>
        <S.ContentBox>
          <Content title="기술 스택 선정 사유" list={reason} />
          <Content title="기여 부분" list={contribution} />
          <Content title="회고" list={retrospect} />
        </S.ContentBox>
        <S.PostBox>
          <S.PostTitle>관련 포스팅</S.PostTitle>
          <S.PostList>
            {post.map((url: string) => (
              <Post key={url} url={url} />
            ))}
          </S.PostList>
        </S.PostBox>
      </S.Container>
      <S.Footer>
        © Powered by
        <S.FooterLink href="https://github.com/wo-o29"> woohyeok</S.FooterLink>
      </S.Footer>
    </>
  );
}

export default ProjectDetail;
