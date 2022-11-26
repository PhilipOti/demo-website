import React from "react";
import blogCardStyles from "./blogCard.module.css";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ id, title, text, createDate, image }) {
  return (
    <div className={blogCardStyles.blogCard_container}>
      <Image width={640} height={370} src={image} layout="responsive" alt=""></Image>
      <h2>{title}</h2>
      <p>{createDate}</p>
      <p>{text.substring(0, 100)}...</p>
      <div></div>
      <div>
        <Link href={`/blogs/${id}`}>
          <button>ReadMore</button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
