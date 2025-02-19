import { Tblog } from "@/app/(dashboard)/dashboard/blog/page";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blogData, index }: { blogData: Tblog; index: number }) => {
  return (
    <div
      data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
      data-aos-duration="1000"
      className="mb-16 flex justify-center"
    >
      <div className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800">
        <div className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800">
          <Image
            src={
              blogData?.blogImage ||
              "https://th.bing.com/th/id/OIP.D88OIDf5AHVHvHShFeHWUwHaEK?w=320&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            }
            fill
            alt="Blog Image"
          />
        </div>

        <div className="">
          <h2 className="text-2xl font-bold mb-2 text-gray-100">
            {blogData?.title}
          </h2>
          <p className="text-gray-200 line-clamp-3">{blogData?.content}</p>
        </div>
        <Link
          href={`/blog/${blogData?._id}`}
          className="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
