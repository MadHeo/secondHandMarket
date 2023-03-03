import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 1120px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const BackgroundImageBox = styled.div`
  width: 100%;
  height: 100%;
  border-top: 6px solid black;
  border-bottom: 6px solid black;

  img {
    width: 100%;
    height: 100%;
  }
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
