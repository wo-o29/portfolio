import * as S from "./styled";
import getHitCount from "@/src/utils/getHitCount";
import { useEffect, useState } from "react";

function HitCount() {
  const [hitCount, setHitCount] = useState({ today: "0", total: "0" });

  useEffect(() => {
    const fetchHitCount = async () => {
      try {
        const response = await fetch("api/hitCount");
        const data = await response.json();
        const [today, total] = getHitCount(data.svgText);
        setHitCount({ today, total });
      } catch (e) {
        console.error(e);
      }
    };

    fetchHitCount();
  }, []);

  if (hitCount.total === "0") {
    return null;
  }

  return (
    <S.Container>
      <S.Box>
        <S.List>
          <S.ListItem>
            Today : <S.Count>{hitCount.today}</S.Count>
          </S.ListItem>
        </S.List>
        <S.List>
          <S.ListItem>
            Total : <S.Count>{hitCount.total}</S.Count>
          </S.ListItem>
        </S.List>
      </S.Box>
    </S.Container>
  );
}

export default HitCount;
