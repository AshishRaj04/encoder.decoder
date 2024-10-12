import { Link } from "react-router-dom";

const BlogCard = ({ blogs }) => {
  const blogDocuments = blogs.documents || [];

  if (!Array.isArray(blogDocuments) || blogDocuments.length === 0) {
    return <p>No blogs available</p>;
  }

  return (
    <div className="w-3/4 m-auto">
      <h2 className="text-3xl font-bold text-gray-800 my-8">Recent Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4">
        {blogDocuments.map((blog, index) => (
          <Link
            to={`/blog/${blog.$id}`}
            key={index}
            className="group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 bg-cover bg-center transition-all duration-500"
            style={{
              backgroundImage: `url(${blog.featuredImage})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>

            <div className="relative z-10 p-4 text-white">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-base opacity-90">{blog.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
