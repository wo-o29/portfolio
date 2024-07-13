import HtmlIcon from "@/public/icons/html5.svg";
import CssIcon from "@/public/icons/css3.svg";
import JsIcon from "@/public/icons/javascript.svg";
import TsIcon from "@/public/icons/typescript.svg";
import ReactIcon from "@/public/icons/react.svg";
import NextIcon from "@/public/icons/nextjs.svg";
import GitIcon from "@/public/icons/git.svg";
import GitHubIcon from "@/public/icons/github-icon.svg";
import TanStackQueryIcon from "@/public/icons/react-query.svg";
import styledIcon from "@/public/icons/styled-components.svg";
import HookFormIcon from "@/public/icons/react-hook-form.svg";
import PrettierIcon from "@/public/icons/prettier.svg";
import EslintIcon from "@/public/icons/eslint.svg";
import GitHubActionsIcon from "@/public/icons/github-actions.svg";
import SassIcon from "@/public/icons/sass.svg";
import AxiosIcon from "@/public/icons/axios.svg";
import NpmIcon from "@/public/icons/npm.svg";
import YarnIcon from "@/public/icons/yarn.svg";
import NodejsIcon from "@/public/icons/nodejs.svg";
import EmotionIcon from "@/public/icons/emotion.svg";
import ViteIcon from "@/public/icons/vite.svg";

export const TECH_ICON = [
  { key: "html", components: HtmlIcon, color: "#E34F26" },
  { key: "css", components: CssIcon, color: "#1572B6" },
  { key: "js", components: JsIcon, color: "#F7DF1E" },
  { key: "ts", components: TsIcon, color: "#3178C6" },
  { key: "react", components: ReactIcon, color: "#61DAFB" },
  { key: "next", components: NextIcon, color: "#000000" },
  { key: "git", components: GitIcon, color: "#F05032" },
  { key: "github", components: GitHubIcon, color: "#181717" },
  { key: "tanstack-query", components: TanStackQueryIcon, color: "#FF4154" },
  { key: "styled-components", components: styledIcon, color: "#DB7093" },
  { key: "react-hook-form", components: HookFormIcon, color: "#EC5990" },
  { key: "prettier", components: PrettierIcon, color: "#F7B93E" },
  { key: "eslint", components: EslintIcon, color: "#4B32C3" },
  { key: "github-actions", components: GitHubActionsIcon, color: "#2088FF" },
  { key: "sass", components: SassIcon, color: "#CC6699" },
  { key: "axios", components: AxiosIcon, color: "#5A29E4" },
  { key: "npm", components: NpmIcon, color: "#CB3837" },
  { key: "yarn", components: YarnIcon, color: "#2C8EBB" },
  { key: "nodejs", components: NodejsIcon, color: "#5FA04E" },
  { key: "emotion", components: EmotionIcon, color: "#d36ac2" },
  { key: "vite", components: ViteIcon, color: "#646CFF" },
] as const;

export const TECH_ICON_OBJECT: any = {
  ["html"]: { components: HtmlIcon },
  ["css"]: { components: CssIcon },
  ["js"]: { components: JsIcon },
  ["ts"]: { components: TsIcon },
  ["react"]: { components: ReactIcon },
  ["next"]: { components: NextIcon },
  ["git"]: { components: GitIcon },
  ["github"]: { components: GitHubIcon },
  ["tanstack-query"]: { components: TanStackQueryIcon },
  ["styled-components"]: { components: styledIcon },
  ["react-hook-form"]: { components: HookFormIcon },
  ["prettier"]: { components: PrettierIcon },
  ["eslint"]: { components: EslintIcon },
  ["github-actions"]: { components: GitHubActionsIcon },
  ["sass"]: { components: SassIcon },
  ["axios"]: { components: AxiosIcon },
  ["npm"]: { components: NpmIcon },
  ["yarn"]: { components: YarnIcon },
  ["nodejs"]: { components: NodejsIcon },
  ["emotion"]: { components: EmotionIcon },
  ["vite"]: { components: ViteIcon },
} as const;
