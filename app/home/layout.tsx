import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto container min-h-screen text-[#696F79]">
      <Header />
      <Sidebar>
        <section className="shadow-md rounded-3xl px-4 py-4 mx-4 my-4 h-full w-full">
          {children}
        </section>
      </Sidebar>
    </div>
  );
}
