"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useState } from "react";
import Input from "../../../../components/create/Input";
import useForm from "../../../../components/hooks/useForm";

const quiz = () => {
  const [count, setCount] = useState(3);
  return (
    <div className="flex flex-col gap-4">
      <div className="w-64">
        <Input
          content={{
            htmlFor: "konu",
            type: "text",
            placeholder: "konuyu giriniz",
            label: "Konu",
          }}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Input
          content={{
            htmlFor: "kategori",
            type: "text",
            placeholder: "Kategoriyi giriniz.",
            label: "kategori",
          }}
        />
        <Input
          content={{
            htmlFor: "Alt Kategori",
            type: "text",
            placeholder: "Alt kategoriyi giriniz",
            label: "Alt Kategori",
          }}
        />
        <Input
          content={{
            htmlFor: "Zorluk Seviyesi",
            type: "number",
            placeholder: "0",
            label: "Zorluk Seviyesi",
          }}
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block pl-1 text-lg font-medium text-gray-700"
        >
          Soru Açıklaması
        </label>
        <textarea
          name="description"
          id="desc"
          cols={30}
          rows={10}
          placeholder="Soru açıklamasını yazınız."
          className="w-full px-4 py-2 mt-1.5 border border-gray-200 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-600 sm:text-sm"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="img"
          className="block pl-1 text-lg font-medium text-gray-700"
        >
          Soru Resmi
        </label>
        <div className="relative flex items-center justify-center w-64 h-32 border rounded-lg cursor-pointer">
          <div>Resmi Buraya Bırakabilirsiniz.</div>
          <input
            type="file"
            name="img"
            id="img"
            className="absolute w-full h-full py-2 border opacity-0 appearance-none"
          />
        </div>
      </div>
      <div>
        <div className="grid items-center grid-cols-6">
          <div className="text-lg font-semibold">Şıkları Oluştur</div>
          <div
            className="px-4 py-2 text-lg font-semibold border rounded-lg"
            onClick={() => setCount((pre) => pre + 1)}
          >
            Şık Ekle
          </div>
        </div>
        <div>
          {new Array(count).fill("true").map((element: any, index: any) => {
            return (
              <div key={index + 555}>
                <Option content={{ text: "Soru Şıkkı", id: index }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Option: FC<any> = ({ content }) => {
  return (
    <div className="grid items-center w-2/3 grid-cols-3">
      <div className="flex items-center col-span-2 gap-3">
        <div className="text-lg font-semibold"> {content.id + 1}.</div>
        <div>{content.text}</div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <input
            type="radio"
            name="option"
            id={content.id}
            className="hidden peer"
            checked
          />
          <label
            htmlFor={content.id}
            className="block p-2 text-center cursor-pointer select-none rounded-xl peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            D
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="option"
            id={content.id + 1}
            className="hidden peer"
          />
          <label
            htmlFor={content.id + 1}
            className="block p-2 text-center cursor-pointer select-none rounded-xl peer-checked:bg-red-500 peer-checked:font-bold peer-checked:text-white"
          >
            Y
          </label>
        </div>
      </div>
    </div>
  );
};

export default quiz;
