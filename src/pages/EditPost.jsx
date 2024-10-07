import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import PostForm from "../components/post-form/PostForm";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return (
    <div className="py-6">
      <div className="w-full max-w-7xl mx-auto px-4">
        <PostForm post={post} />
      </div>
    </div>
  );
}

export default EditPost;
