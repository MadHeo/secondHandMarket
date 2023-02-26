import Router from "next/dist/server/router";
import { useRouter } from "next/router";
import * as S from "./home.style";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function HomePageIndex(): JSX.Element {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (Scroll) => {});
  }, []);

  const on = () => {
    const mainBox = document.getElementById("box");
    setPosition(mainBox?.scrollTop);
  };

  return (
    <>
      <S.MainBox id="box" onScroll={on}>
        <S.CircleBox>
          <img
            src="/image/circle.png/"
            alt=""
            id="circle"
            style={{ transform: `rotate(${position / 5}deg)` }}
          />
        </S.CircleBox>
        <S.BackgroundImageBox>
          <img src="/image/home1.jpeg/" alt="" />
        </S.BackgroundImageBox>
        <S.BackgroundImageBox>
          <img src="/image/home4.jpeg/" alt="" />
        </S.BackgroundImageBox>
        <S.BackgroundImageBox>
          <img src="/image/home3.jpeg/" alt="" />
        </S.BackgroundImageBox>
        <S.BackgroundImageBox>
          <img src="/image/home2.jpeg/" alt="" />
        </S.BackgroundImageBox>
        <S.BackgroundImageBox>
          <img src="/image/home5.jpeg/" alt="" />
        </S.BackgroundImageBox>
        <S.BackgroundImageBox>
          <img src="/image/home6.jpeg/" alt="" />
        </S.BackgroundImageBox>
        <S.BackgroundImageBox>
          <img src="/image/home7.jpeg/" alt="" />
        </S.BackgroundImageBox>
      </S.MainBox>
    </>
  );
}
