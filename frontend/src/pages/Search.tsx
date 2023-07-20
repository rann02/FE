import SearchBar from "../components/SearchBar";
import GiftList from "../components/GiftList";
import { getRandom } from "../store/giphy/action";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
export default function Search() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.giphy);
  const getData = async () => {
    await dispatch(getRandom());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col w-full px-28">
      <SearchBar className="self-center my-14" />
      <GiftList data={data || []} />
    </div>
  );
}
