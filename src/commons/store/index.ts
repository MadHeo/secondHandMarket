import { atom, selector } from "recoil";
import { getAccessToken } from "../liveries/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "useRecoilValueLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
