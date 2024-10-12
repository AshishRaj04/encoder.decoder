import React from "react";
import service from "../appwrite/config.js";
import { useState, useEffect } from "react";
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
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <Link to={`/blog/${post.$id}`}>
                <div className="cursor-pointer">
                  <h2>{post.title}</h2>
                  <img
                    src={post.featuredImage}
                    alt="featuredImage"
                    className="rounded-xl"
                  />
                  <p>{post.summary}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link to="/add-blog">Create a new post</Link>
      </div>
    </div>
  );
}

export default AllPosts;
