import React, { FC } from "react";

const Input: FC<any> = ({ content }) => {
  return (
    <div>
      <label
        htmlFor={content.htmlFor}
        className="block pl-1 text-lg font-medium text-gray-700"
      >
        {content.label}
      </label>
      <input
        type={content.type}
        id={content.id}
        placeholder={content.placeholder}
        className="w-full px-4 py-2 mt-1.5 border border-gray-200 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-600 sm:text-sm"
      />
    </div>
  );
};

export default Input;
