import Router from "next/dist/server/router";
import { useRouter } from "next/router";
import * as S from "./home.style";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function HomePageIndex(): JSX.Element {
  const [position, setPosition] = useState(0);
  const homeImg = [1, 2, 3, 4, 5, 6, 7];

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
            style={{ transform: `rotate(${position / 8}deg)` }}
          />
        </S.CircleBox>
        {homeImg.map((e) => (
          <S.BackgroundImageBox>
            <img src={`/image/home${e}.jpeg/`} />
          </S.BackgroundImageBox>
        ))}
      </S.MainBox>
    </>
  );
}
