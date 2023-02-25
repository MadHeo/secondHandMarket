import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 400px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  background-color: #a258ff;
  border: 6px solid #141414;
`;

export const LogoBox = styled.div`
  width: 100%;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 240px;
    height: 91px;
  }
`;

export const MenuBox = styled.div`
  width: 100%;
  height: 925px;
  display: flex;
  flex-direction: column;
  border-top: 6px solid #141414;
`;

export const MenuButton = styled.button`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-bottom: 6px solid #141414;
  border-right: 0px;
  background-color: #efefef;
  cursor: pointer;

  :hover {
    background-color: #eacbff;
  }
`;
