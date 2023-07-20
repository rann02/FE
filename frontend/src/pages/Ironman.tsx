import GiftList from "../components/GiftList";
import { getIronman } from "../store/giphy/action";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
export default function Ironman() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.giphy);
  const getData = async () => {
    await dispatch(getIronman({}));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data?.[0].images.original.url);
  return (
    <div className="flex flex-col w-full px-28">
      <h1 className="self-center my-14">IRON MAN GIFT</h1>
      <GiftList data={data || []} />
    </div>
  );
}
