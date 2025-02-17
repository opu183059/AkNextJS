import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-[url('https://img.freepik.com/premium-photo/abstract-wave-black-perple-pink-background_1043168-219.jpg')] p-5 w-72 rounded-lg flex flex-col items-center shadow-md shadow-fuchsia-600">
        <Image
          src={
            session?.user?.image ||
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          }
          width={150}
          height={150}
          alt="user image"
          className="rounded-md mt-10"
        />
        <div className="grid gap-2 grid-cols-3 text-sm mt-5">
          <p>ID:</p>
          <p className="col-span-2">: 110{Math.round(Math.random() * 100)}</p>
          <p>Name</p>
          <p className="col-span-2">: {session?.user?.name}</p>
          <p>Email</p>
          <p className="col-span-2">: {session?.user?.email}</p>
          <p>Position</p>
          <p className="col-span-2">: Senior Executive</p>
        </div>
      </div>
    </div>

    // <div className="w-[300px] aspect-video rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50 group">
    //   <div className="flex flex-col items-center p-8 rounded-md w-full sm:px-12 bg-gray-900 text-gray-100">
    //     <div className="text-center">
    //       <h2 className="text-xl font-semibold">Dubai</h2>
    //       <p className="text-sm text-gray-400">March 13</p>
    //     </div>
    //     <svg
    //       className="w-32 h-32 p-6 text-yellow-400 fill-current animate-[spin_5s_linear_infinite;]"
    //       viewBox="0 0 512 512"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
    //       <rect
    //         className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
    //         y="16"
    //         x="240"
    //         height="48"
    //         width="32"
    //       ></rect>
    //       <rect
    //         className="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
    //         y="448"
    //         x="240"
    //         height="48"
    //         width="32"
    //       ></rect>
    //       <rect
    //         className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
    //         y="240"
    //         x="448"
    //         height="32"
    //         width="48"
    //       ></rect>
    //       <rect
    //         className="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
    //         y="240"
    //         x="16"
    //         height="32"
    //         width="48"
    //       ></rect>
    //       <rect
    //         className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
    //         transform="rotate(-45 416 416)"
    //         y="393.373"
    //         x="400"
    //         height="45.255"
    //         width="32"
    //       ></rect>
    //       <rect
    //         className="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
    //         transform="rotate(-45 96 96)"
    //         y="73.373"
    //         x="80"
    //         height="45.255"
    //         width="32.001"
    //       ></rect>
    //       <rect
    //         className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
    //         transform="rotate(-45.001 96.002 416.003)"
    //         y="400"
    //         x="73.373"
    //         height="32"
    //         width="45.255"
    //       ></rect>
    //       <rect
    //         className="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
    //         transform="rotate(-45 416 96)"
    //         y="80"
    //         x="393.373"
    //         height="32.001"
    //         width="45.255"
    //       ></rect>
    //     </svg>
    //     <div className="mb-2 text-3xl font-semibold">
    //       27° <span className="mx-1 font-normal">/</span>19°
    //     </div>
    //     <p className="text-gray-400">Sunny</p>
    //   </div>
    // </div>
  );
};

export default DashboardPage;
