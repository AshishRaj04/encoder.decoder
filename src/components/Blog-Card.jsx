import { Link } from "react-router-dom";
const BlogCard = ({ blogs }) => {
  const blogDocuments = blogs.documents || [];

  if (!Array.isArray(blogDocuments) || blogDocuments.length === 0) {
    return <p>No blogs available</p>;
  }

  return (
    <div className="w-3/4 m-auto">
      <h2 className="text-3xl font-bold text-gray-800 my-8">Recent Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogDocuments.map((blog, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-xl text-gray-800 font-bold mb-4">
              {blog.title}
            </h2>
            <p className="text-gray-700 mb-4">{blog.excerpt}</p>

            <Link to={`/blog/${blog.$id}`} className="text-blue-500 underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
