import React from "react";
import Image from "next/image";

const Header = () => {
  const USERNAME = "Jane Doe";

  return (
    <nav>
      <div className="flex items-center justify-between py-6 px-2 ">
        <h4 className="text-3xl font-extrabold text-[#696F79] pr-8 text-center">
          Quiz Time
        </h4>
        <div className="w-1/4">
          <div className="relative">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className="absolute z-10 top-4 left-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6564 21.5516L16.7564 15.6516C18.1742 13.9495 18.8812 11.7663 18.7303 9.55617C18.5795 7.34607 17.5823 5.27921 15.9464 3.78556C14.3104 2.29191 12.1616 1.48646 9.94695 1.53678C7.73227 1.58711 5.62226 2.48932 4.05584 4.05573C2.48942 5.62215 1.58721 7.73217 1.53689 9.94684C1.48657 12.1615 2.29201 14.3103 3.78566 15.9463C5.27932 17.5822 7.34618 18.5793 9.55628 18.7302C11.7664 18.8811 13.9496 18.1741 15.6517 16.7562L21.5517 22.6562L22.6564 21.5516ZM3.12511 10.1562C3.12511 8.7656 3.53748 7.40618 4.31009 6.2499C5.08269 5.09361 6.18082 4.1924 7.46561 3.66022C8.75041 3.12804 10.1642 2.9888 11.5281 3.2601C12.892 3.5314 14.1449 4.20107 15.1282 5.1844C16.1115 6.16774 16.7812 7.42059 17.0525 8.78452C17.3238 10.1484 17.1846 11.5622 16.6524 12.847C16.1202 14.1318 15.219 15.2299 14.0627 16.0025C12.9064 16.7751 11.547 17.1875 10.1564 17.1875C8.29219 17.1854 6.50496 16.444 5.18679 15.1258C3.86863 13.8076 3.12717 12.0204 3.12511 10.1562Z"
                fill="#8692A6"
              />
            </svg>

            <input
              className="font-medium flex items-center w-full text-base placeholder:text-[#8692A6] rounded-full shadow-md outline-none pl-12 pr-4 py-4"
              type="search"
              name=""
              id=""
              placeholder="Ara.."
            />
          </div>
        </div>
        <div className="py-3 px-4 rounded-full bg-gray-600 text-white font-semibold text-lg w-1/6 text-center">
          Oyna
        </div>
        <div className="py-3 px-4 rounded-full bg-gray-600 text-white font-semibold text-lg w-1/6 text-center">
          Soru Oluştur
        </div>
        <div className="flex items-center h-full gap-3">
          <div className="w-16 h-16 relative rounded-full bg-gray-300">
            <Image src={"/profile.png"} alt="PP" fill />
          </div>
          <div>{USERNAME}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
