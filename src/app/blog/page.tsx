import BlogCard from "@/components/blog/BlogCard";

const BlogPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="container mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {arr.map((blog, index) => (
          <BlogCard key={index} blogData={blog} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
