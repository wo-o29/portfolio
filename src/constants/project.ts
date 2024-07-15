export const PROJECT_DATA = [
  {
    id: 1,
    title: "티키타(Tickita)",
    content:
      "많은 사람과 일정 조율을 할 때 효율적으로 일정을 관리할 수 있는 서비스",
    info: "24.05.18 ~ 24.06.25 / Design 1명, BE 2명, FE 4명",
    github: "https://github.com/tickita-project/tickita-front",
    deploy: "https://tickita.net",
    imageSrc: "/images/tickita.webp",
    query: "tickita",
    techStack: [
      { key: "ts", color: "#3178C6" },
      { key: "react", color: "#61DAFB" },
      { key: "next", color: "#000000" },
      { key: "sass", color: "#CC6699" },
      { key: "axios", color: "#5A29E4" },
      {
        key: "tanstack-query",
        color: "#FF4154",
      },
      { key: "react-hook-form", color: "#EC5990" },
      { key: "github-actions", color: "#2088FF" },
      { key: "npm", color: "#CB3837" },
    ],
    reason: [
      {
        key: "TypeScript",
        value:
          "컴파일 단계에서 타입을 검사하기 때문에 오류를 사전에 감지할 수 있고, 타입을 명시적으로 지정함으로써 코드의 의미를 명확하게 표현할 수 있어 코드의 재사용성과 유지보수성을 높일 수 있어 선정하였습니다.",
      },
      {
        key: "React",
        value:
          "UI를 컴포넌트 단위로 나누어 코드의 재사용성을 높이고, Virtual Dom을 통해 UI 업데이트가 효율적으로 이루어져 성능 향상에 도움이 되기 때문에 선정하였습니다.",
      },
      {
        key: "Next.js",
        value:
          "페이지를 서버 측에서 사전에 렌더링하여 초기 로딩 속도를 향상시켜 검색 엔진(SEO) 최적화, 사용자 경험(UX) 향상에 이점이 있어 선정하였습니다.",
      },
    ],
    contribution: [
      {
        key: "코드 리뷰 문화 개선",
        value:
          "코드 리뷰를 진행하면서 서로 배우는 부분이 많다고 생각을 해서 활발한 코드 리뷰 문화를 만들기 위해 프로젝트 초기 단계에서 컨벤션을 디테일하게 논의하고 Github Actions을 통해 Reviewers, Assignees, Labels 를 자동으로 추가하고 빌드 테스트, PR 생성 알림, PR Preview 등을 설정하여 코드 리뷰 문화를 개선하였습니다.",
      },
      {
        key: "프로젝트 배포",
        value:
          "AWS Code Deploy를 통해 배포 자동화 파이프라인을 구성하였고 초기에는 로드 밸런스를 통해 HTTPS로 리다이렉트 하였지만, 과금 문제가 있어 Ngnix를 통해 HTTPS로 리다이렉트를 하는 방식으로 과금 문제를 해결하였습니다.",
      },
    ],
    retrospect: [
      {
        key: "배운 점",
        value:
          "컨벤션, 기술 스택 선정 등 결정을 하는 과정들에서 '왜'라는 질문을 던지고 근거를 찾는 사고 방식을 갖게 되었으며, 자기 주도적으로 문제를 해결하는 방법을 배웠습니다.",
      },
      {
        key: "개선할 점",
        value:
          "프로젝트 기획에 대한 경험이 적어서 논의가 길어져서 결정이 늦어지거나, 기획이 변경되는 경우가 있었습니다. 이를 개선하기 위해 중요도와 우선 순위를 정해 효율적인 방식으로 논의를 하고 프로젝트 기획에 대한 경험을 쌓아야 할 것 같다는 생각이 들었습니다.",
      },
    ],
    post: [
      "https://velog.io/@woogur29/Error-React-Hook-Form-defaultValues-%EC%97%90%EB%9F%AC",
      "https://velog.io/@woogur29/Pull-Request-Preview%EB%A1%9C-%EC%9E%91%EC%97%85-%ED%9A%A8%EC%9C%A8-%EC%98%AC%EB%A6%AC%EA%B8%B0",
      "https://velog.io/@woogur29/Pull-Request-%EC%98%AC%EB%A6%AC%EB%A9%B4-%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C-build-%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%95%98%EA%B8%B0",
      "https://velog.io/@woogur29/Issue-Pull-Request-%EC%83%9D%EC%84%B1%ED%95%A0-%EB%95%8C-%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9CReviewers-Assignees-Labels-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0",
    ],
  },
  {
    id: 2,
    title: "Taskify",
    content:
      "쉽고 간편하게 대시보드를 생성하고 일정을 만들어 관리, 공유 할 수 있는 서비스",
    info: "24.04.15 ~ 24.04.29 / FE 5명",
    github: "https://github.com/19-Takify/19-taskify",
    deploy: "https://team19-main.vercel.app",
    imageSrc: "/images/taskify.png",
    query: "taskify",
    techStack: [
      { key: "ts", color: "#3178C6" },
      { key: "react", color: "#61DAFB" },
      { key: "next", color: "#000000" },
      { key: "sass", color: "#CC6699" },
      { key: "axios", color: "#5A29E4" },
      { key: "react-hook-form", color: "#EC5990" },
      { key: "npm", color: "#CB3837" },
    ],
    reason: [
      {
        key: "TypeScript",
        value:
          "컴파일 단계에서 타입을 검사하기 때문에 오류를 사전에 감지할 수 있고, 타입을 명시적으로 지정함으로써 코드의 의미를 명확하게 표현할 수 있어 코드의 재사용성과 유지보수성을 높일 수 있어 선정하였습니다.",
      },
      {
        key: "React",
        value:
          "UI를 컴포넌트 단위로 나누어 코드의 재사용성을 높이고, Virtual Dom을 통해 UI 업데이트가 효율적으로 이루어져 성능 향상에 도움이 되기 때문에 선정하였습니다.",
      },
      {
        key: "Next.js",
        value:
          "페이지를 서버 측에서 사전에 렌더링하여 초기 로딩 속도를 향상시켜 검색 엔진(SEO) 최적화, 사용자 경험(UX) 향상에 이점이 있어 선정하였습니다.",
      },
    ],
    contribution: [
      {
        key: "대시보드 페이지",
        value:
          "기존에는 하단 스크롤바로 대시보드를 좌우로 움직일 수 있는 환경에서 스크롤 이벤트를 통해 스와이프와 캐러셀 좌우 버튼을 추가하여 사용자 경험을 향상 시켰습니다.",
      },
      {
        key: "로딩 처리",
        value:
          "Next.js의 getServerSideProps로 데이터를 가져오는 과정에서 시간이 오래 걸려 화면이 멈춰있다가 페이지 이동이 발생하는 문제가 있었는데 Next.js의 Router.events를 화룡해 로딩 처리를 해주어서 부드럽게 화면이 전환될 수 있도록 개선하였습니다.",
      },
    ],
    retrospect: [
      {
        key: "배운 점",
        value:
          "Github Discussion, 디스코드, 노션, 피그잼과 같은 협업 플랫폼을 통해 데잍리 스크럼, 태스크 정리, 일정 관리 등 다양한 협업 방식을 도입하여 효율적인 소통 방식을 배웠습니다.",
      },
      {
        key: "개선할 점",
        value:
          "프로젝트 마감 기간쯤에는 바쁘다보니깐 디테일하게 코드 리뷰를 남기지 못했던 경험이 있어 일정 관리를 할 때 넉넉하게 기간을 잡아야겠다는 생각이 들었습니다.",
      },
    ],
    post: [
      "https://velog.io/@woogur29/Next.js-SSR-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-%EB%A1%9C%EB%94%A9-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0",
      "https://velog.io/@woogur29/Error-DnD-Carousel-%EC%B6%A9%EB%8F%8C",
      "https://velog.io/@woogur29/Error-React-Hook-Form-%EB%93%9C%EB%A1%AD%EB%8B%A4%EC%9A%B4-value-%EB%8F%99%EA%B8%B0%ED%99%94-%EC%97%90%EB%9F%AC",
      "https://velog.io/@woogur29/Error-css-animation-%EC%97%90%EB%9F%ACslideIn-slideOut",
    ],
  },
  {
    id: 3,
    title: "Rolling",
    content: "추억의 롤링 페이퍼를 웹 상에서도 즐길 수 있는 플랫폼",
    info: "24.02.24 ~ 24.03.12 / FE 4명",
    github: "https://github.com/Rolling-Project/Rolling-Project",
    deploy: "https://rolling-project.vercel.app",
    imageSrc: "/images/rolling.png",
    query: "rolling",
    techStack: [
      { key: "js", color: "#F7DF1E" },
      { key: "react", color: "#61DAFB" },
      { key: "emotion", color: "#d36ac2" },
      {
        key: "tanstack-query",
        color: "#FF4154",
      },
      { key: "prettier", color: "#F7B93E" },
      { key: "eslint", color: "#4B32C3" },
      { key: "yarn", color: "#2C8EBB" },
      { key: "vite", color: "#646CFF" },
    ],
    reason: [
      {
        key: "React",
        value:
          "UI를 컴포넌트 단위로 나누어 코드의 재사용성을 높이고, Virtual Dom을 통해 UI 업데이트가 효율적으로 이루어져 성능 향상에 도움이 되기 때문에 선정하였습니다.",
      },
      {
        key: "Emotion",
        value:
          "JavaScript를 사용하여 동적으로 스타일을 조절하여 유연한 스타일링이 가능하기 때문에 선정하였습니다.",
      },
      {
        key: "Tanstack Query",
        value:
          "로딩, 에러 처리 등의 기능을 제공하여 보일러 플레이트 코드를 줄여주고 캐싱, 쿼리 무효화와 같은 기능을 통해 서버 상태 관리를 쉽게 할 수 있어 선정하였습니다.",
      },
    ],
    contribution: [
      {
        key: "필터 기능 캐싱",
        value:
          "기존에는 롤링 페이퍼 전체보기 페이지에서 필터를 선택할 때마다 매번 API 요청을 보내어 데이터를 받아오는 방식이었는데, Tanstack Query의 캐싱 기능을 사용하여 staleTime과 cacheTime을 적절히 설정해주어 불필요한 API 요청을 줄여 성능을 향상시켰습니다.",
      },
      {
        key: "웹 접근성 개선",
        value:
          "코드에 시맨틱 하지 못한 부분의 태그를 수정하였고, LightHouse를 활용해 성능 부분과 SEO 부분을 개선하였습니다.",
      },
    ],
    retrospect: [
      {
        key: "배운 점",
        value:
          "저와 팀원 모두 프로젝트 경험이 없어 초기에 컨벤션을 디테일하게 정하지 않아 코드가 일관되지 않았는데, Prettier, Eslint 설정과 꾸준히 팀원들과 소통을 하여 코드 스타일의 이해도를 높이고, 초기 컨벤션 논의의 중요성에 대해 배우게 되었습니다.",
      },
      {
        key: "개선할 점",
        value:
          "처음에 팀원들과 기술 스택을 선정할 때, 단순히 유명하고 많이 사용된다는 이유로 선택한 경험이 있습니다. 이로 인해 기술 스택에 대한 이해도가 부족했던 것 같아, 앞으로는 왜 이 기술을 사용해야 하는지, 그리고 우리 프로젝트에 적용했을 때의 이점에 대해 깊이 고민해 봐야 할 것 같다는 생각이 들었습니다.",
      },
    ],
    post: [
      "https://velog.io/@woogur29/Error-useEffect-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9",
    ],
  },
  {
    id: 4,
    title: "READ YOU",
    content: "템플릿을 통해 리드미를 간편하게 작성할 수 있게 해주는 서비스",
    info: "24.04.06 ~ 24.04.08 / Design 1명, BE 1명, FE 5명",
    github: "https://github.com/Read-U/readyou-front",
    deploy: "https://readyou.vercel.app",
    imageSrc: "/images/readyou.png",
    query: "readyou",
    techStack: [
      { key: "ts", color: "#3178C6" },
      { key: "react", color: "#61DAFB" },
      { key: "next", color: "#000000" },
      { key: "styled-components", color: "#DB7093" },
      { key: "axios", color: "#5A29E4" },
      { key: "yarn", color: "#2C8EBB" },
    ],
    reason: [
      {
        key: "React",
        value:
          "UI를 컴포넌트 단위로 나누어 코드의 재사용성을 높이고, Virtual Dom을 통해 UI 업데이트가 효율적으로 이루어져 성능 향상에 도움이 되기 때문에 선정하였습니다.",
      },
      {
        key: "Next.js",
        value:
          "페이지를 서버 측에서 사전에 렌더링하여 초기 로딩 속도를 향상시켜 검색 엔진 최적화(SEO), 사용자 경험(UX) 향상에 이점이 있어 선정하였습니다.",
      },
      {
        key: "Styled-Components",
        value:
          "JavaScript를 사용하여 동적으로 스타일을 조절하여 유연한 스타일링이 가능하기 때문에 선정하였습니다.",
      },
    ],
    contribution: [
      {
        key: "기술 스택 템플릿",
        value:
          "기존에는 기술 스택을 입력하면 마우스로 연관 데이터를 클릭해야 했지만, 키보드 이벤트를 활용해 방향키와 엔터키로도 연관 데이터에 접근할 수 있게 설정하여서 사용장 경험을 향상시켰습니다.",
      },
      {
        key: "동영상 삽입 템플릿",
        value:
          "기존에는 iframe 태그를 사용하여 유튜브 영상을 Readme.md에서 바로 볼 수 있게 설정하였지만, Github 측에서 iframe을 지원해주지 않아 유튜브 썸네일 이미지를 Readme.md 파일에 추가하고 이미지를 클릭하면 해당 유튜브 링크로 이동시켜 이슈를 해결하였습니다.",
      },
    ],
    retrospect: [
      {
        key: "배운 점",
        value:
          "기획부터 참여한 프로젝트는 처음이었는데 기획 단계부터 참여하여 기획의 중요성을 깨닫고, 구글 스프린트 방식으로 단 기간에 MVP를 효율적으로 만들어내는 방법을 배웠습니다.",
      },
      {
        key: "개선할 점",
        value:
          "해커톤과 같이 단 기간에 프로젝트를 진행하는 방식에 대한 경험이 없어 코드 품질을 포기하고 완성을 위주로 개발을 진행하였는데, 오히려 팀원들이 코드 리뷰하는 과정에서 알아보기 힘들어 시간이 더 지연될 수도 있을 것 같다는 생각이 들어 가독성 좋은 코드를 작성하는게 중요하다는 것을 깨달았습니다.",
      },
    ],
    post: [
      "https://velog.io/@woogur29/%ED%85%8C%EC%98%A4%EC%9D%98-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-17%EA%B8%B0-%ED%9B%84%EA%B8%B0",
    ],
  },
];
