import Image from "next/image";

export default function PlaceholderContent() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-56px-56px)]">
      <div className="flex flex-col relative">
        <Image src="/placeholder.png" alt="Placeholder Image" width={500} height={500} priority />
      </div>
    </div>
  );
}
