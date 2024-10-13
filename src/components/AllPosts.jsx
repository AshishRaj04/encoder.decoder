import React, { useState, useEffect } from "react";
import service from "../appwrite/config.js";
import { Link } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <div className="w-full max-w-7xl mx-auto px-4">
          <p>No posts available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <header className="w-full bg-green-400 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-xl">
          All the latest articles and blogs are available here!
        </p>
      </header>

      <div className="w-full max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div className="p-6 bg-white shadow-lg rounded-lg" key={post.$id}>
              <Link to={`/blog/${post.$id}`}>
                <div className="cursor-pointer">
                  <p className="text-sm text-green-500 mb-2 bg-green-100 px-2 py-1 rounded-md inline-block">
                    {post.tags}
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {post.title}
                  </h2>

                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="rounded-xl w-full h-48 object-cover mb-4"
                  />

                  <p className="text-gray-500 text-sm mb-4">
                    {formatDate(post.date)}
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllPosts;
