import * as S from "./styled";
import ACTIVITY from "@/src/constants/activity";

function Activity() {
  return (
    <S.Box>
      <S.Title>외부 활동</S.Title>
      <S.Grid>
        {ACTIVITY.map((list) => (
          <S.Item key={list.title}>
            <S.TitleBox>
              <S.ItemTitle>{list.title}</S.ItemTitle>
              <S.ItemDate>{list.date}</S.ItemDate>
            </S.TitleBox>
            <S.ItemContent>{list.content}</S.ItemContent>
          </S.Item>
        ))}
      </S.Grid>
    </S.Box>
  );
}

export default Activity;
