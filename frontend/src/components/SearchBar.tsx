import { getIronman, getRandom } from "../store/giphy/action";
import { useAppDispatch } from "../store";
import { useEffect, useState } from "react";
export default function SearchBar({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState({ search: "" });
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const getData = async () => {
    await dispatch(getIronman(search));
  };
  const getTending = async () => {
    await dispatch(getRandom());
  };
  useEffect(() => {
    if (!search.search) {
      getTending();
    } else {
      getData();
    }
  }, [search.search]);
  return (
    <input
      className={`border border-solid border-slate-900 rounded-sm w-4/12 px-2 py-1 ${
        !!className ? className : ""
      }`}
      placeholder="Search input goes here"
      onChange={change}
      name="search"
    />
  );
}
