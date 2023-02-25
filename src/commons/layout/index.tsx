import styled from "@emotion/styled";
import LayoutAside from "./\baside";
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
