import Project from "../components/Project";
import Introduce from "../components/Introduce";
import styled from "@emotion/styled";
import { useRef } from "react";
import SideBar from "../components/SideBar";
import Activity from "../components/Activity";
import useWheelControl from "../hooks/useWheelControl";
import Layout from "../components/Layout";
import HitCount from "../components/HitCount";
import { MAIN_BOX_MEDIA_QUERY } from "../styles/const";

const Main = styled.main`
  width: 87.5rem;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  @media ${MAIN_BOX_MEDIA_QUERY} {
    width: 100%;
  }
`;

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { step, upWheel, downWheel } = useWheelControl(containerRef);

  return (
    <>
      <title>wo_ohyeok</title>
      <Main ref={containerRef}>
        <Introduce />
        <Project />
        <Activity step={step} />
        <SideBar step={step} upWheel={upWheel} downWheel={downWheel} />
      </Main>
      <Layout isLeft />
      <Layout isLeft={false} />
      <HitCount />
    </>
  );
}

export default Home;
