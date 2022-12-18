import React from "react";
import Main from "../../components/auth/Main";
import Side from "../../components/auth/Side";

const index = () => {
  return (
    <div className="grid grid-cols-3">
      <Side />
      <Main />
    </div>
  );
};

export default index;
