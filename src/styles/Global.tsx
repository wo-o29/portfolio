import { css, Global, Theme } from "@emotion/react";

const style = (theme: Theme) => css`
  * {
    box-sizing: border-box;
    appearance: none;
  }

  html {
    font-family: "GmarketSansMedium";
    width: 100%;
    font-size: 16px;
    color: ${theme.color.black100};
    background-color: ${theme.color.gray10};
    transition: all 0.5s;

    a {
      color: ${theme.color.black100};
      text-decoration: none;
    }
  }

  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const GlobalStyle: React.FC = () => <Global styles={style} />;

export default GlobalStyle;
