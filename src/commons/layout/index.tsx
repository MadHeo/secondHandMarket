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

export default function Layout(props): JSX.Element {
  const [position, setPosition] = useState(0);

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
