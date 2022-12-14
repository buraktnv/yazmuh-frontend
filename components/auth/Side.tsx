import React from "react";
import Image from "next/image";

const TEXT =
  "İşlerine ve yaşamlarına uygulayabilecekleri yeni ve daha iyi bilgi biçimlerini sürekli olarak edinme becerisini geliştiren insanlar, belirsiz bir gelecekte toplumumuzun hareket ettiricileri ve sarsıcıları olacaklardır.";

const AUTHOR = "Brian Tracy";

const Side = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex relative w-[47%] h-full w-full items-center justify-center">
        <div className="relative text-lg text-white z-20 w-1/2 pl-12 leading-10 tracking-wide">
          <div className="text-[#00DAF7] text-[72px] font-bold absolute -top-5 left-4 z-10 loginQuotationMark">
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9531 0.421875C23.0469 0.421875 23.5938 0.640625 23.5938 1.07812C23.5938 1.26562 23.4219 1.42187 23.0781 1.54688C20.2031 2.70313 18.7656 4.95313 18.7656 8.29688C19.2031 8.23438 19.5156 8.20312 19.7031 8.20312C23.4531 8.20312 25.3281 10.0781 25.3281 13.8281C25.3281 17.5469 23.4531 19.4062 19.7031 19.4062C15.3594 19.4062 13.1875 17.0156 13.1875 12.2344C13.1875 7.07812 15.2656 3.375 19.4219 1.125C20.2969 0.65625 21.1406 0.421875 21.9531 0.421875ZM9.71875 0.5625C10.8125 0.5625 11.3594 0.78125 11.3594 1.21875C11.3594 1.40625 11.1875 1.5625 10.8438 1.6875C7.96875 2.84375 6.53125 5.09375 6.53125 8.4375C6.96875 8.375 7.28125 8.34375 7.46875 8.34375C11.2188 8.34375 13.0938 10.2188 13.0938 13.9688C13.0938 17.6875 11.2188 19.5469 7.46875 19.5469C3.125 19.5469 0.953125 17.1562 0.953125 12.375C0.953125 7.21875 3.03125 3.51562 7.1875 1.26562C8.0625 0.796875 8.90625 0.5625 9.71875 0.5625Z"
                fill="#00DAF7"
              />
            </svg>
          </div>
          <p>{TEXT}</p>
          <span className="block pt-2">{AUTHOR}</span>

          <div className="text-[#00DAF7] text-[72px] font-bold absolute -bottom-5 right-4 z-10 loginQuotationMark">
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="absolute w-full h-full">
          <Image
            src="/assets/loginScreenSideBackground.png"
            alt="side background image"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Side;
