import React, { FC } from "react";

const SingleSideItem: FC<any> = ({ content }) => {
  const selectedCSS = "!text-white !bg-[#8692A6] !rounded-full";

  return (
    <div
      className={`py-4 bottom-10 left-20 flex items-center px-8 gap-4 group text-[#696F79] hover:text-white hover:bg-[#8692A6] hover:rounded-full ${
        content.selected ? selectedCSS : ""
      }`}
    >
      <span>{content.svg}</span>
      <h5 className="text-xl font-semibold">{content.text}</h5>
    </div>
  );
};

export default SingleSideItem;
