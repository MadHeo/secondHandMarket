import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const BoardWrapper = styled.div`
  width: 985px;
  height: 1470px;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  background-image: url("/image/img_detail.png");
  background-repeat: no-repeat;
  padding: 0px 87px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  margin-right: 16.67px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TopBox = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const Seller = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  font-size: 30px;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled.div`
  width: 90%;
  display: flex;
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 50px;
  font-family: "Pre-ExtraBold";
`;

export const Pick = styled.div`
  width: 5%;
  display: flex;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PickCount = styled.span`
  width: 3%;
  display: flex;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PriceBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  margin-bottom: 25px;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 385px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
  margin-bottom: 40px;
  background-color: black;
`;

export const ImageContent = styled.img`
  width: 100%;
  height: 356px;

  object-fit: contain;
`;

export const RemarkBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  margin-bottom: 25px;
  color: #707070;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 25px;
  margin-bottom: 25px;
`;

export const MapBox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 60px;
`;

export const MapContents = styled.div`
  width: 615px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid black;
`;

export const MapText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 120px;
  z-index: 2;
  font-size: 20px;
  color: white;
  background-color: black;
  padding: 5px;
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonContent = styled.div`
  width: 615px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 190px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  border: 5px solid black;
  cursor: pointer;
`;
