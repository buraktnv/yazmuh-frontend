import Image from "next/image";
import React, { FC } from "react";

const page: FC<any> = ({ content }) => {
  content = {
    title: "Tarih Testi",
    time: "29:09",
    image: "/tarih.png",
    currentQuestion: "4",
    totalQuestion: "7",
    description:
      "Guy Bailey, Roy Hackett ve Paul Stephenson, 1963'te, İngiltere'nin hangi şehrinde siyahi ve asyalı sürücüleri çalıştırmayı reddeden bir otobüs şirketine karşı düzenlenen protestonun bir parçası olarak adını tarihe yazdırdılar?",
    choices: [
      {
        value: "Londra",
        text: "Londra",
      },

      {
        value: "Edinburg",
        text: "Edinburg",
      },
      {
        value: "Liverpool",
        text: "Liverpool",
      },
      {
        value: "Manchester",
        text: "Manchester",
      },
    ],
  };
  return (
    <div className="flex relative flex-col gap-4 px-4 py-4">
      <div className="text-3xl font-bold">{content.title}</div>
      <div className="absolute right-3 top-3 text-2xl">{content.time}</div>
      <div className="flex gap-5">
        <div className="relative h-48 w-full">
          <Image
            src={content.image}
            alt="test-image"
            fill
            className="object-contain"
          />
        </div>
        <div className="gap-4 flex flex-col">
          <div className="text-xl font-semibold">
            Soru {content.currentQuestion} / {content.totalQuestion}{" "}
          </div>
          <div className="whitespace-pre-wrap text-base">
            {content.description}
          </div>
        </div>
      </div>
      <div>
        <div className="text-lg font-bold">Seçenekler</div>
        <div className="flex flex-col gap-3 pt-4">
          {content.choices.map((choice: any, index: any) => {
            return (
              <div key={index + Math.random()}>
                <Choice content={choice} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Choice: FC<any> = ({ content }) => {
  return (
    <div className="flex gap-4 items-center">
      <input
        type="radio"
        id={content.value}
        name="choice"
        value={content.value}
      />
      <label htmlFor={content.value}>{content.text}</label>
    </div>
  );
};

export default page;
