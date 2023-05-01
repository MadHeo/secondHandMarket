import styled from "@emotion/styled";

export const MainBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 150px;
`;

export const SubBox = styled.div`
  display: flex;
  width: 760px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LoginImage = styled.img`
  width: 100%;
  height: 550px;
`;

export const InputBox = styled.div`
  width: 630px;
  position: absolute;
  top: 130px;
`;

export const Input = styled.input`
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

export const LoginButton = styled.button`
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
