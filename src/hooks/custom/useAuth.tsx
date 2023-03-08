import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../commons/store";

export const useAuth = (): void => {
  const router = useRouter();
  const auth = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void auth.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다.");
        void router.push("/login");
      }
    });
  }, []);
};
