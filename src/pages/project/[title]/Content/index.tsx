import * as S from "./styled";

interface ContentProps {
  title: string;
  list: { key: string; value: string }[];
}

function Content({ title, list }: ContentProps) {
  return (
    <S.SubBox>
      <S.SubTitle>{title}</S.SubTitle>
      <S.SubList>
        {list.map(({ key, value }: any) => {
          return <S.SubItem key={key}>{`${key}: ${value}`}</S.SubItem>;
        })}
      </S.SubList>
    </S.SubBox>
  );
}

export default Content;
