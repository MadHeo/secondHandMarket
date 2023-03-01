import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export const useGetKakaoMap = (address: string) => {
  // const { data } = useQueryFetchUseditem({ useditemId: id });
  // console.log(data.fetchUseditem);

  const kakaomap = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=2f43c27b0cbe07e0672a3348e214e0b5&libraries=services&clusterer&drawing";
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => {
          let mapContainer = document.getElementById("map"), // 지도를 표시할 div
            mapOption = {
              center: new window.kakao.maps.LatLng(553.233, 23.123), // 지도의 중심좌표
              level: 3, // 지도의 확대 레벨
            };

          const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

          // 주소-좌표 변환 객체를 생성합니다
          var geocoder = new window.kakao.maps.services.Geocoder();

          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(`${address}}`, function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              var infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래 위치</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          });
          //       // 마커가 표시될 위치입니다
          //       const markerPosition = new window.kakao.maps.LatLng(
          //         2131.123,
          //         1231.123
          //       );

          //       // 마커를 생성합니다
          //       const marker = new window.kakao.maps.Marker({
          //         position: markerPosition,
          //       });

          //       // 마커가 지도 위에 표시되도록 설정합니다
          //       marker.setMap(map);
        });
      };
    }, []);
  };

  return { kakaomap };
};
