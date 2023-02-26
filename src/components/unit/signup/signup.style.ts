import styled from "@emotion/styled";

export const MainBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px 0px 0px;
`;

export const SubBox = styled.div`
  display: flex;
  width: 760px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SignupImage = styled.img`
  width: 100%;
  height: 880px;
`;

export const InputBox = styled.div`
  width: 630px;
  position: absolute;
  top: 100px;
`;

export const Input = styled.input`
  width: 629px;
  height: 84px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  color: #838383;
  background-color: #ffffff;
  padding: 0px 40px;
  border: 6px solid black;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  height: 33px;
  font-size: 20px;
  color: #ff0dd7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  background-color: #000000;
  margin-bottom: 15px;
  border: 0px;
  cursor: pointer;
  :hover {
    background-color: #363636;
  }
  :active {
    background-color: #555555;
  }
`;

export const NaverButton = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: #8fff00;
  margin-bottom: 15px;
  border: 0px;
  cursor: pointer;
  :hover {
    background-color: #91fb67;
  }
  :active {
    background-color: #aeff93;
  }
`;

export const KakaoButton = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: #ffeb34;
  margin-bottom: 15px;
  border: 0px;
  cursor: pointer;
  :hover {
    background-color: #fffd7d;
  }
  :active {
    background-color: #fdfeb7;
  }
`;
