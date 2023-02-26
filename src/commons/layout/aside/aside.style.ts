import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 400px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  background-color: #4d7bff;
  border: 6px solid #141414;
`;

export const LogoBox = styled.div`
  width: 100%;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 6px solid black;
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
  background-color: #efefef;
  cursor: pointer;

  :hover {
    background-color: #cbd7ff;
  }
`;

export const HelloText = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
`;

export const PointBox = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
`;

export const PointText = styled.div`
  width: 400px;
  height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;

export const ChargeButton = styled.button`
  width: 163px;
  height: 51px;
  border-radius: 20px;
  background-color: #005889;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  border: 0px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  width: 163px;
  height: 51px;
  border-radius: 20px;
  background-color: #bebebe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #595959;
  border: 0px;
  cursor: pointer;
`;

export const CircleBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const Circle = styled.div`
//   width: 243px;
//   height: 243px;
//   background-color: #005889;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 130px;
//   border: 6px solid bl;

//   span:nth-child(1) {
//     font-size: 50px;
//     color: white;
//   }

//   span:nth-child(2) {
//     font-size: 50px;
//     color: white;
//     transform: rotate(180deg);
//   }
// `;
