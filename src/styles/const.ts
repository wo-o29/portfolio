import { css, keyframes, Theme } from "@emotion/react";

export const lightTheme: Theme = {
  color: {
    black100: "#0F1010",
    black60: "#2C2D2E",
    black40: "#3C3D40",
    gray80: "#808388",
    gray60: "#989BA0",
    gray40: "#C0C5C9",
    gray20: "#EEEFF1",
    gray10: "#F7F8FA",
    white100: "#FFFFFF",
    border: "#bbbbbb",
  },
} as const;

export const darkTheme: Theme = {
  color: {
    black100: "#e6e6e6",
    black60: "#F7F8FA",
    black40: "#EEEFF1",
    gray80: "#b9bbc5",
    gray60: "#8e8f97",
    gray40: "#626368",
    gray20: "#3C3D40",
    gray10: "#2C2D2E",
    white100: "#232326",
    border: "#e6e6e6",
  },
} as const;

const lineAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(100%);
  }
`;

export const hoverUnderline = (theme: Theme) => css`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.0625rem;
    bottom: -0.1875rem;
    left: 0;
    background-color: ${theme.color.black100};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const textOverflowEllipsis = (lineClamp: number) => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lineClamp};
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
`;
