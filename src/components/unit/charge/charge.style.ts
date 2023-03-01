import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 1120px;
  height: 1080px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubBox = styled.div`
  margin-top: 146px;
  width: 760px;
  height: 546px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImg = styled.img`
  width: 760px;
  height: 546px;
`;

export const InputBox = styled.div`
  width: 630px;
  position: absolute;
  top: 320px;
`;

export const Select = styled.select`
  width: 629px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  color: #838383;
  background-color: #ffffff;
  padding: 0px 40px;
  margin-bottom: 30px;
  border: 6px solid black;
`;

export const ChargeButton = styled.button`
  width: 629px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: white;
  background-color: black;
  border: 0px;
  cursor: pointer;
  :hover {
    background-color: #4e4e4e;
  }
  :active {
    background-color: #3b3b3b;
  }
`;
