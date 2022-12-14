import React, { FC } from "react";

const Inputbox: FC<any> = ({ content }) => {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={content.id}
        className="font-medium text-base text-[#696F79]"
      >
        {content.label}
      </label>
      <input
        className="font-medium text-sm placeholder:text-[#8692A6] rounded-full drop-shadow-lg outline-none px-6 py-4"
        type={content.type}
        name={content.name}
        id={content.id}
        placeholder={content.placeholder}
      />
    </div>
  );
};

export default Inputbox;
