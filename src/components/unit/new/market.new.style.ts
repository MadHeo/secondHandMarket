import styled from "@emotion/styled";
import { Button, Modal } from "antd";
import dynamic from "next/dynamic";

export const MainBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const BackgroundBox = styled.div`
  width: 980px;
  height: 1565px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 70px 0px;
  background-image: url("/image/img_write_bg.png");
  padding: 100px 83px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  flex-direction: column;
  font-family: "Pre-ExtraBold";
  font-size: 50px;
  margin-bottom: 31px;
`;

export const PictureBox = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 45px;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  margin-bottom: 25px;
`;

export const InputContent = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 17px;
  border: 6px solid black;
  font-size: 25px;
  background-color: white;
`;

export const TextAreaBox = styled.textarea`
  width: 100%;
  height: 318px;
  display: flex;
  background-color: white;
  border: 6px solid black;
  font-size: 25px;
  padding: 17px;
  margin-bottom: 25px;
`;

export const MapBox = styled.div`
  width: 615px;
  height: 250px;
  display: flex;
  flex-direction: row;
  border: 6px solid black;
  margin-top: 20px;
  margin-bottom: 39px;

  span {
    padding: 10px;
    width: 200px;
    height: 40px;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const WriteButton = styled.button`
  width: 190px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #7fff5b;
  font-size: 28px;
  border: 6px solid black;
  cursor: pointer;
  margin-right: 16px;
`;

export const CancelButton = styled.button`
  width: 190px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #4d7bff;
  font-size: 28px;
  color: white;
  border: 6px solid black;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  width: 118px;
  height: 118px;
  border: 6px solid black;
  background-color: white;
  margin-right: 24px;
  margin-bottom: 60px;
  outline: none;
  border: none;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  font-family: "Noto-500";
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
