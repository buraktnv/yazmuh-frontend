import React from "react";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Sidebar from "../../components/Sidebar";

const index = () => {
  return (
    <div className="min-h-screen h-full">
      <Header />
      <Sidebar>
        <Profile />
      </Sidebar>
    </div>
  );
};

export default index;
