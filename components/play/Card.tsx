import { FC } from "react";
import Image from "next/image";

const Card: FC<any> = ({ content }) => {
  return (
    <div className="h-48 w-full relative cursor-pointer">
      <div className="absolute z-10 left-8 !bottom-[16px] text-white text-2xl tracking-wide font-bold">
        {content.title}
      </div>
      <Image src={content.src} alt={content.alt} fill className="object-fill" />
    </div>
  );
};

export default Card;
