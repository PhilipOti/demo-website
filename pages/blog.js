import React from "react";
import styles from "../styles/Home.module.css";
import { blogData } from "../utils/blogData";
import BlogCard from "../components/blogCard/blogCard";

function Blog() {
  return (
    <div>
      <div className={`${styles.main_title}`}>
        <h1 className={`text-center`}>Blog</h1>
 
      </div>
      <section className={`container`}>
        <div className={`row`}>
          {blogData.map((item) => {
            const { id, title, text, createDate, image } = item;
            return (
              <div key={id} className={`col-sm-6`} style={{ padding: "1rem" }}>
                <BlogCard
                  id={id}
                  title={title}
                  text={text}
                  createDate={createDate}
                  image={image}
                ></BlogCard>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Blog;
