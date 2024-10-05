import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Client, Databases } from "appwrite";

const BlogDetail = () => {
  const [theBlog, setBlogDetail] = useState(null);
  const { id } = useParams();

  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66f592880015810a8c2b");

  const databases = new Databases(client);

  useEffect(() => {
    async function fetchBlogDetail() {
      try {
        const response = await databases.getDocument(
          "66f594f30019af275210",
          "66f59531001a3a55c43d",
          id
        );
        setBlogDetail(response);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    }

    fetchBlogDetail();
  }, [id, databases]);

  if (!theBlog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto my-10 p-4 max-w-3xl" style={{ marginTop: '60px' }}>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{theBlog.title}</h1>
      <p className="text-gray-700 leading-7 mb-6">{theBlog.content}</p>
    </div>
  );
};

export default BlogDetail;
