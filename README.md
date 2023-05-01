<aside>
💡 SecondHandMarket은 중고 상품을 거래하는 플랫폼입니다. 
부트캠프에서 배웠던 것을 기반으로 제작해봤습니다.

</aside>

## 사용 스킬

- typescript, react, react-hooks, emotion, graphQL

## 디자인

게임 같은 컨셉으로 피그마 디자인 및 UI를 구현했습니다.

![Frame 15080](https://user-images.githubusercontent.com/86145287/235470955-2b23a81e-5d3c-4cb8-8817-59b4e048dc5c.png)


## Main
![circle1](https://user-images.githubusercontent.com/86145287/235470983-01cb54fd-9f24-4dc7-8fdd-1b2b23ca1046.gif)



- 메인에 게임요소를 넣고 싶어 마우스 스크롤에 따라 오른쪽 아래의 원이 돌아가도록 만들었습니다.
- **오늘 본 상품**은 상품 상세페이지에 들어갈 때 상품 ID를 localStorage에 담고 상품 ID를 fetchItem api를 요청하여 상품명과 상품 이미지를 가져오도록 만들었습니다. 만약 썸네일이 없는 경우 보라색 캐릭터가 나오도록 구현했습니다.

## SignUp/Login

---

![signup](https://user-images.githubusercontent.com/86145287/235471003-66054a33-a4e4-4ef9-bafd-6caba95e50e3.gif)


- 로그인은 react-hook-form 라이브러리를  사용하여 input 입력 시 발생하는 리렌더링을 줄였습니다.
- 전역상태관리 라이브러리 Recoil을 사용해 accessToken을 관리합니다.
- useAuth 함수에 accessToken을 확인하는 로직을 만들어 권한분기를 구현했습니다.

## Products List / Comment / Purchase

---

![list](https://user-images.githubusercontent.com/86145287/235471021-70ecbf35-0046-480b-a500-b909d8f48ec8.gif)


- 댓글 작성과 수정 시 apolloClient에서 제공하는 기능인 refetchQueries를 사용해서 즉각적으로 반영되도록 구현했습니다.
- 지도는 카카오 지도 API를 사용했습니다.

## Point Charge

---

![charge](https://user-images.githubusercontent.com/86145287/235471038-f9395988-cff5-4710-83cf-efe6c98b13b2.gif)


- 포인트 충전은 카카오페이 API를 활용해서 구현했습니다.
- 충전할 경우 충전금액만큼 value로 받아 createPoint API에 요청합니다.
