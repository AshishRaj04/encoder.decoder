import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import PostForm from "./post-form/PostForm";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      console.log(slug);
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          console.log(true);
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white py-16 px-6">
      <div className="w-full max-w-7xl mx-auto px-4">
        <PostForm post={post} />
      </div>
    </div>
  );
};

export default EditPost;
