import * as S from "./styled";

const list = [
  { step: 1, text: "소개" },
  { step: 2, text: "프로젝트" },
  { step: 3, text: "외부 활동" },
];

interface SideBarProps {
  step: number;
  upWheel: (count?: number) => void;
  downWheel: (count?: number) => void;
}

function SideBar({ step, upWheel, downWheel }: SideBarProps) {
  const handleSideButtonClick = (clickedStep: number) => {
    const diff = Math.abs(step - clickedStep);

    if (diff === 0) {
      return;
    }

    if (step > clickedStep) {
      upWheel(diff);
      return;
    }

    downWheel(diff);
  };

  return (
    <S.SideBar>
      <S.List>
        {list.map((list, idx) => (
          <li key={idx}>
            <S.SideButton
              type="button"
              isSelect={step === list.step}
              onClick={() => handleSideButtonClick(list.step)}
            >
              {step === list.step && <S.SelectEffect>&gt;</S.SelectEffect>}
              {list.text}
            </S.SideButton>
          </li>
        ))}
      </S.List>
    </S.SideBar>
  );
}

export default SideBar;
