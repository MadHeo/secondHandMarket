import { useRouter } from "next/router";

interface IItem {
  _id: string;
}

export const useAddTodayItem = () => {
  const router = useRouter();

  const onClickAddTodayItem = (item: IItem) => () => {
    router.push(`/market/${item._id}`);
    const todayItem = JSON.parse(localStorage.getItem("todayItem") ?? "[]");
    console.log(todayItem);

    const temp = todayItem.filter((el: IItem) => el._id === item._id);

    if (temp.length >= 1) {
      return;
    }

    todayItem.unshift(item);
    localStorage.setItem("todayItem", JSON.stringify(todayItem));
  };

  return { onClickAddTodayItem };
};
