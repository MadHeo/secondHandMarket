import { css } from "@emotion/react";

export const GlobalStyle = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "Pre-SemiBold";
    color: #141414;
  }

  @font-face {
    font-family: "Pre-Medium";
    src: url("/font/Pretendard-Medium.woff");
  }

  @font-face {
    font-family: "Pre-Regular";
    src: url("/font/Pretendard-Regular.woff");
  }

  @font-face {
    font-family: "Pre-SemiBold";
    src: url("/font/Pretendard-SemiBold.woff");
  }

  @font-face {
    font-family: "Pre-Bold";
    src: url("/font/Pretendard-Bold.woff");
  }

  @font-face {
    font-family: "Pre-ExtraBold";
    src: url("/font/Pretendard-ExtraBold.woff");
  }

  @font-face {
    font-family: "Pre-Black";
    src: url("/font/Pretendard-Black.woff");
  }
`;
