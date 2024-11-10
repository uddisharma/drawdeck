import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
      <h2 className="text-2xl font-semibold mt-6 animate-pulse duration-700">
        Loading...
      </h2>
    </div>
  );
};
