import { Hero, BlogPage, About, Navbar , BlogDetail } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Client, Databases } from "appwrite";
import { useState, useEffect } from "react";
function App() {
  const [blogs, setBlogs] = useState([]);
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66f592880015810a8c2b");

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    "66f594f30019af275210",
    "66f59531001a3a55c43d",
    []
  );

  useEffect(() => {
    promise.then(
      function (response) {
        // console.log(response)
        setBlogs(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero blogs={blogs} />} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
