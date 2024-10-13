import {
  Hero,
  BlogPage,
  About,
  Navbar,
  AllPosts,
  AddPost,
  // EditPost,
  Contact,
  Footer,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import conf from "./conf/conf.js";
import { Client, Databases } from "appwrite";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store.js";
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
        setBlogs(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero blogs={blogs} />} />
          </Routes>
          <Routes>
            <Route path="/all-blogs" element={<AllPosts />} />
          </Routes>
          <Routes>
            <Route path="/blog/:slug" element={<BlogPage />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
