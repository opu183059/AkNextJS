"use client";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const DownloadButton = () => {
  return (
    <a
      href={"/Aktheruzzaman_Resume.pdf"}
      download={"Aktheruzzaman_resume.pdf"}
      className="btn10 cursor-pointer"
    >
      <AiOutlineDownload></AiOutlineDownload> Resume
    </a>
  );
};

export default DownloadButton;
