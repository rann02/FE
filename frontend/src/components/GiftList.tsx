import { DataIF } from "../store/giphy/action";
import GiftItem from "./GiftItme";

export default function GiftList({ data }: { data: DataIF["data"] }) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 pb-10">
      {data.map((image) => {
        return (
          <GiftItem
            key={`gif-item-no-${image.id}`}
            image={image.images.original.url}
          />
        );
      })}
    </div>
  );
}
