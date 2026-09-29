import Image from 'next/image';

export default function PlaceholderContent() {
  return (
    <div className="flex min-h-[calc(100vh-56px-56px)] items-center justify-center">
      <div className="relative flex flex-col">
        <Image
          src="/placeholder.png"
          alt="Placeholder Image"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
}
