export interface ProjectDataType {
  id: number;
  title: string;
  content: string;
  info: string;
  github: string;
  deploy: string;
  imageSrc: string;
  query: string;
  techStack: { key: string; color: string }[];
  reason: { key: string; value: string }[];
  contribution: { key: string; value: string }[];
  retrospect: { key: string; value: string }[];
  post: string[];
}
