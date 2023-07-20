export default function GiftItem({ image }: { image: string }) {
  return (
    <div className="h-48 border border-solid rounded-sm">
      <img src={image} className="object-cover w-full h-full" />
    </div>
  );
}
