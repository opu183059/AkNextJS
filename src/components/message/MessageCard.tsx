"use client";
import { Tmessage } from "@/app/(dashboard)/dashboard/message/page";
import React from "react";
import { toast } from "react-toastify";

const MessageCard = ({ message }: { message: Tmessage }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;
    const id = toast.loading("Deleting Message...");
    try {
      const response = await fetch(`/api/message/${message?._id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (response.ok) {
        toast.update(id, {
          render: "Message deleted successfully!",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
      } else {
        toast.update(id, {
          render: data.message || "Failed to delete the message",
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error(
        "Failed to delete the message. Please check your connection."
      );
    }
  };

  return (
    <div className="my-4 bg-violet-500/30 hover:bg-violet-500/50 p-4 rounded-md">
      <p className="text-fuchsia-200 font-semibold uppercase">
        {message?.name}
      </p>
      <p className="text-gray-400">{message?.email}</p>
      <p className="mt-2">{message?.message}</p>
      <div className="flex justify-end">
        <button onClick={handleDelete} className="btn2 !bg-red-500 mt-4">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
