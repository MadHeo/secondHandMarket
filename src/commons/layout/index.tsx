import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import LayoutAside from "./\baside/aside.index";
import LayoutNavigation from "./navi";

const MainBox = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: row;
`;

const SectionBox = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: relative;
`;

export const CircleBox = styled.div`
  width: 243px;
  height: 243px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100px;
  left: 1200px;
  transition: all 0.4s ease 0s;

  :hover {
    transform: scale(1.05);
  }

  img {
  }
`;

export default function Layout(props): JSX.Element {
  return (
    <MainBox>
      <LayoutNavigation></LayoutNavigation>
      <SectionBox>
        <div>{props.children}</div>
      </SectionBox>
      <LayoutAside></LayoutAside>
    </MainBox>
  );
}
