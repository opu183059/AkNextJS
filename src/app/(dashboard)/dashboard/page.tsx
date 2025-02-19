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
  );
};

export default DashboardPage;
