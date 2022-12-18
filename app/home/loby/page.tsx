import Image from "next/image";
import React, { FC } from "react";

const page = () => {
  return (
    <div className="grid items-center justify-center w-full grid-cols-4 gap-8">
      {new Array(16).fill(0).map((a, b) => {
        return (
          <div key={b + 777}>
            <Piece />
          </div>
        );
      })}
    </div>
  );
};

const Piece: FC<any> = () => {
  return (
    <div className="relative w-36 h-36">
      <Image
        src={"/profilePhoto.png"}
        fill
        alt="hello"
        className="w-full h-full rounded-full"
      />
    </div>
  );
};

export default page;
