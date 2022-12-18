import React from "react";
import Card from "../../../components/play/Card";

const cardData = [
  {
    src: "/tarih.png",
    alt: "tarih",
    title: "Tarih",
  },
  {
    src: "/saglık.png",
    alt: "sağlık",
    title: "Sağlık",
  },
  {
    src: "/teknoloji.png",
    alt: "teknoloji",
    title: "Teknoloji",
  },
  {
    src: "/tarım.png",
    alt: "Tarım",
    title: "Tarım",
  },
  {
    src: "/tarih.png",
    alt: "tarih",
    title: "Tarih",
  },
  {
    src: "/saglık.png",
    alt: "sağlık",
    title: "Sağlık",
  },
  {
    src: "/teknoloji.png",
    alt: "teknoloji",
    title: "Teknoloji",
  },
  {
    src: "/tarım.png",
    alt: "Tarım",
    title: "Tarım",
  },
  {
    src: "/tarih.png",
    alt: "tarih",
    title: "Tarih",
  },
  {
    src: "/saglık.png",
    alt: "sağlık",
    title: "Sağlık",
  },
  {
    src: "/teknoloji.png",
    alt: "teknoloji",
    title: "Teknoloji",
  },
  {
    src: "/tarım.png",
    alt: "Tarım",
    title: "Tarım",
  },
];

const page = () => {
  return (
    <div>
      <div className="text-2xl font-bold py-6 px-4">
        Bir Test Kategorisi Seç
      </div>
      <div className="grid grid-cols-4 gap-4">
        {cardData.map((element, index) => {
          return (
            <div key={index}>
              <Card content={element} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
