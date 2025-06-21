import React from "react";
import Blogheader from "../components/Blogpage/Blogheader";

import ChocolateArticles from "../components/Blogpage/ChocolateArticles";
import Footer from "../components/Navbar/Footer";
const BlogPage = () => {
  return (
    <div>
      <Blogheader />
      <ChocolateArticles />
      <Footer />
    </div>
  );
};

export default BlogPage;
