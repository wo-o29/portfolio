import { useEffect, useState } from "react";
import * as S from "./styled";
import Image from "next/image";
import { domParser } from "@/src/utils/openGraphParser";

interface PostProps {
  url: string;
}

function Post({ url }: PostProps) {
  const [data, setData] = useState<any>({
    title: "",
    description: "",
    linkUrl: "",
    imageUrl: "",
    favicon: "",
  });

  useEffect(() => {
    const fetchOgData = async (url: string) => {
      try {
        const response = await fetch(`/api/proxy?url=${url}`);
        const data = await response.json();
        const parser = new DOMParser();
        const document = parser.parseFromString(data, "text/html");
        const { title, description, linkUrl, imageUrl, favicon } =
          domParser(document);

        setData({
          title,
          description,
          linkUrl,
          imageUrl,
          favicon,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchOgData(url);
  }, [url]);

  return (
    <S.PostBox>
      <S.PostLink href={data.linkUrl}>
        <S.TextBox>
          <S.PostTitle>{data.title}</S.PostTitle>
          <S.PostContent>{data.description}</S.PostContent>
          <S.PostLinkBox>
            {data.favicon && (
              <Image
                src={data.favicon}
                width={20}
                height={20}
                alt="링크 파비콘"
              />
            )}
            <S.PostLinkText>{data.linkUrl}</S.PostLinkText>
          </S.PostLinkBox>
        </S.TextBox>
        {data.imageUrl && (
          <Image
            src={data.imageUrl}
            width={350}
            height={158}
            alt="포스트 썸네일"
          />
        )}
      </S.PostLink>
    </S.PostBox>
  );
}

export default Post;
