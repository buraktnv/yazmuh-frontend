import React, { FC } from "react";

const Sidebar: FC<any> = ({ children }) => {
  let select = 0;
  const selectedCSS = "!text-white !bg-[#8692A6] !rounded-full";
  return (
    <div className="grid grid-cols-6 min-h-max">
      <div className="col-span-1 flex flex-col h-full justify-between my-4 w-full">
        <div
          className={`py-4 bottom-10 left-20 flex items-center px-8 gap-4 group text-[#696F79] hover:text-white hover:bg-[#8692A6] hover:rounded-full ${
            select == 0 ? selectedCSS : ""
          }`}
        >
          <span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.375 21.875H5.20833C4.0625 21.875 3.125 20.9375 3.125 19.7917V5.20833C3.125 4.0625 4.0625 3.125 5.20833 3.125H9.375C10.5208 3.125 11.4583 4.0625 11.4583 5.20833V19.7917C11.4583 20.9375 10.5208 21.875 9.375 21.875ZM15.625 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V14.5833C21.875 13.4375 20.9375 12.5 19.7917 12.5H15.625C14.4792 12.5 13.5417 13.4375 13.5417 14.5833V19.7917C13.5417 20.9375 14.4792 21.875 15.625 21.875ZM21.875 8.33333V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125H15.625C14.4792 3.125 13.5417 4.0625 13.5417 5.20833V8.33333C13.5417 9.47917 14.4792 10.4167 15.625 10.4167H19.7917C20.9375 10.4167 21.875 9.47917 21.875 8.33333Z" />
            </svg>
          </span>
          <h5 className="text-xl font-semibold">Pano</h5>
        </div>
        <div
          className={`py-4 bottom-10 left-20 flex items-center px-8 gap-4 group text-[#696F79] hover:text-white hover:bg-[#8692A6] hover:rounded-full ${
            select == 1 ? selectedCSS : ""
          }`}
        >
          <span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.4999 2.08337C5.75617 2.08337 1.08325 6.75629 1.08325 12.5V16.8157C1.08325 17.8823 2.01763 18.75 3.16659 18.75H4.20825C4.48452 18.75 4.74947 18.6403 4.94482 18.4449C5.14017 18.2496 5.24992 17.9846 5.24992 17.7084V12.3511C5.24992 12.0748 5.14017 11.8099 4.94482 11.6145C4.74947 11.4192 4.48452 11.3094 4.20825 11.3094H3.26242C3.84159 7.27817 7.31034 4.16671 11.4999 4.16671C15.6895 4.16671 19.1583 7.27817 19.7374 11.3094H18.7916C18.5153 11.3094 18.2504 11.4192 18.055 11.6145C17.8597 11.8099 17.7499 12.0748 17.7499 12.3511V18.75C17.7499 19.899 16.8155 20.8334 15.6666 20.8334H13.5833V19.7917H9.41658V22.9167H15.6666C17.9645 22.9167 19.8333 21.048 19.8333 18.75C20.9822 18.75 21.9166 17.8823 21.9166 16.8157V12.5C21.9166 6.75629 17.2437 2.08337 11.4999 2.08337Z" />
            </svg>
          </span>
          <h5 className="text-xl font-semibold">Destek</h5>
        </div>
        <div
          className={`py-4 bottom-10 left-20 flex items-center px-8 gap-4 group text-[#696F79] hover:text-white hover:bg-[#8692A6] hover:rounded-full ${
            select == 2 ? selectedCSS : ""
          }`}
        >
          <span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M12.4167 22.9167C11.7258 22.914 11.0641 22.694 10.5744 22.3041C10.0847 21.9143 9.80632 21.386 9.79949 20.8334H15.0078C15.0106 21.1119 14.9442 21.3881 14.8125 21.6459C14.6441 21.955 14.3863 22.2276 14.0603 22.4413C13.7343 22.6551 13.3495 22.8037 12.9375 22.875H12.8763C12.725 22.9002 12.5712 22.9142 12.4167 22.9167ZM22.8334 19.7917H2V17.7084L4.60417 16.6667V10.9375C4.53557 9.46787 4.95044 8.00955 5.8073 6.70837C6.22896 6.11178 6.80395 5.59349 7.49434 5.18769C8.18473 4.7819 8.97483 4.49782 9.81251 4.35421V2.08337H15.0208V4.35421C18.3789 4.99379 20.2292 7.33129 20.2292 10.9375V16.6667L22.8334 17.7084V19.7917Z" />
            </svg>
          </span>
          <h5 className="text-xl font-semibold  ">Bildirim</h5>
        </div>
        <div className="absolute px-12 py-4 bottom-10 left-20 flex items-center gap-4 group text-[#696F79] hover:text-white hover:bg-[#8692A6] hover:rounded-full">
          <span>
            <svg
              width="21"
              height="25"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M1.20834 0.083313H15.7917C16.0679 0.083313 16.3329 0.19306 16.5282 0.38841C16.7236 0.58376 16.8333 0.848712 16.8333 1.12498V19.875C16.8333 20.1512 16.7236 20.4162 16.5282 20.6115C16.3329 20.8069 16.0679 20.9166 15.7917 20.9166H1.20834C0.932071 20.9166 0.667119 20.8069 0.471769 20.6115C0.276419 20.4162 0.166672 20.1512 0.166672 19.875V1.12498C0.166672 0.848712 0.276419 0.58376 0.471769 0.38841C0.667119 0.19306 0.932071 0.083313 1.20834 0.083313ZM5.375 9.45831V6.33331L0.166672 10.5L5.375 14.6666V11.5416H11.625V9.45831H5.375Z" />
            </svg>
          </span>
          <h5 className="text-xl font-semibold">Çıkış Yap</h5>
        </div>
      </div>
      <div className="col-span-5">{children}</div>
    </div>
  );
};

export default Sidebar;
