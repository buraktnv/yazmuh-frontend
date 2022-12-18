import React from "react";
import Inputbox from "../shared/Inputbox";

const Main = () => {
  return (
    <div className="relative flex items-center justify-center w-full col-span-2 gap-5">
      <div className="absolute top-12 left-8">
        <button className="flex items-center gap-2 text-[#8692A6] tex-lg font-semibold">
          <span className="text-xl">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8627 3.225L13.3794 1.75L5.1377 10L13.3877 18.25L14.8627 16.775L8.0877 10L14.8627 3.225Z"
                fill="#8692A6"
              />
            </svg>
          </span>
          <p>Geri</p>
        </button>
      </div>
      <div className="flex flex-col w-3/5 gap-5 h-2/3">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Hesabına Giriş Yap</h2>
          <h3 className="text-lg">Kayıtlı E-Posta adresini kullan </h3>
        </div>
        <hr className="opacity-40" />
        <Inputbox
          content={{
            id: "eMail",
            name: "email",
            label: "E-Posta Adresi*",
            type: "email",
            placeholder: "E-Posta adresini gir",
          }}
        />

        <Inputbox
          content={{
            id: "password",
            name: "password",
            label: "Şifre*",
            type: "password",
            placeholder: "Şifreni Gir",
          }}
        />

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="w-4 h-4 rounded"
          />
          <label
            htmlFor="remember"
            className="text-base font-medium text-[#696F79]"
          >
            Şifremi Hatırla!
          </label>
        </div>

        <button className="font-medium text-xl text-white bg-[#8692A6] rounded-full w-full h-[60px]">
          Giriş yap
        </button>

        <div>
          <svg
            width="426"
            height="10"
            viewBox="0 0 426 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M213.618 4.63636C213.618 1.875 211.998 0.153409 209.765 0.153409C207.532 0.153409 205.913 1.875 205.913 4.63636C205.913 7.39773 207.532 9.11932 209.765 9.11932C211.998 9.11932 213.618 7.39773 213.618 4.63636ZM212.595 4.63636C212.595 6.90341 211.351 8.13068 209.765 8.13068C208.18 8.13068 206.936 6.90341 206.936 4.63636C206.936 2.36932 208.18 1.14205 209.765 1.14205C211.351 1.14205 212.595 2.36932 212.595 4.63636ZM215.258 9H216.264V4.85795C216.264 3.97159 216.963 3.32386 217.917 3.32386C218.186 3.32386 218.463 3.375 218.531 3.39205V2.36932C218.416 2.3608 218.152 2.35227 218.003 2.35227C217.219 2.35227 216.537 2.79545 216.298 3.44318H216.23V2.45455H215.258V9Z"
              fill="#BABABA"
            />
            <line x1="254" y1="4.5" x2="426" y2="4.50002" stroke="#F5F5F5" />
            <line
              x1="4.37114e-08"
              y1="4.5"
              x2="172"
              y2="4.50002"
              stroke="#F5F5F5"
            />
          </svg>
        </div>

        <div className="relative px-4 py-4 text-center rounded-full shadow-lg cursor-pointer">
          <span className="absolute left-8 top-[%50]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                fill="#FFC107"
              />
              <path
                d="M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z"
                fill="#FF3D00"
              />
              <path
                d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.0011 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
                fill="#4CAF50"
              />
              <path
                d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                fill="#1976D2"
              />
            </svg>
          </span>
          Google ile Giriş Yap
        </div>
      </div>
    </div>
  );
};

export default Main;
