import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 400px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  background-color: #a258ff;
  border: 6px solid #141414;
  position: relative;
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

export const TodayItemBox = styled.div`
  width: 326px;
  height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 90px;
  left: 100px;
  background-image: url("/image/img_todayItem.png");
  overflow: auto;
  z-index: 2;
  padding-top: 60px;
`;

export const TodayItem = styled.div`
  width: 215px;
  height: 194px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  border: 5px solid black;
`;

export const TodayItemImage = styled.img`
  width: 215px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
  background-color: white;
`;

export const TodayItemInfo = styled.div`
  width: 215px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
