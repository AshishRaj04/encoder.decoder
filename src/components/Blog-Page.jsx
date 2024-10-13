import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import parse from "html-react-parser";
import { CiCalendarDate } from "react-icons/ci";

function BlogPage() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          navigate("/");
        });
    }
  }, [slug, navigate]);

  if (!post) return null;

  const formattedDate = post.date?.split("T")[0];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 my-16 bg-white shadow-lg rounded-lg">
      <div className="w-full mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>

        <div className="flex items-center space-x-6 text-gray-500 text-sm">
          <p className="flex items-center gap-1">
            <CiCalendarDate className="text-xl" />
            {formattedDate}
          </p>
          <p>{post.author}</p>
        </div>

        <div className="mt-6">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="rounded-xl w-full max-w-3xl mx-auto h-auto object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="text-lg leading-8 mt-6 text-gray-700">
          {parse(post.content)}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
