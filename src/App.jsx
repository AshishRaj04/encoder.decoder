import { Hero, BlogPage, About, Navbar, BlogDetail } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import conf from "./conf/conf.js";
import { Client, Databases } from "appwrite";
import { useState, useEffect } from "react";
function App() {
  const [blogs, setBlogs] = useState([]);
  const client = new Client();
  client.setEndpoint(conf.appwriteURL).setProject(conf.appwriteProject_ID);

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    conf.database_ID,
    conf.collection_ID,
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
