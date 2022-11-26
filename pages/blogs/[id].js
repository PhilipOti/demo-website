import React from "react";
import Link from "next/link";
import { blogData } from "../../utils/blogData";

function Blog({ specificBlogData }) {
  return (
    <div>
      <h1 className="text-center">{specificBlogData.title}</h1>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-9`}>fghsjdksljdk</div>
          <div className={`col-3`}>
            <h3>Recent Blog Posts</h3>
            {blogData.slice(0, 4).map((item) => {
              return (
                <>
                  <Link href={`/blogs/${item.id}`}>
                    <p>{item.title}</p>
                  </Link>

                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function getBlogPaths() {
  //   console.log(blogData[2]);

  return blogData.map((item) => {
    return {
      params: { id: `${item.id}` },
    };
  });
}

export async function getStaticPaths() {
  const paths = getBlogPaths();

  return {
    paths,
    fallback: false,
  };
}

function getBlogData(id) {
  const x = blogData.filter((item) => item.id == id);
  return x[0];
}

export async function getStaticProps({ params }) {
  const specificBlogData = getBlogData(params.id);

  return {
    props: {
      specificBlogData: specificBlogData,
    },
  };
}

export default Blog;
