import React, { useEffect, useState } from "react";
import logoStyles from "./logo.module.css";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          console.log("it is not shrunk");
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          console.log("it is shrunk");
          return false;
        }

        return isShrunk;
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* <Image
        height={150}
        width={150}
        src="/images/Afrique_logo.svg"
        style={{ padding: "0", margin: "0" }}
      ></Image> */}
      <Link href="/">
        <h1
          className={`h1 ${
            isShrunk ? logoStyles.logo_title_shrunk : logoStyles.logo_title
          }`}
        >
          AFRIQUE
        </h1>
      </Link>
    </>
  );
}

export default Logo;
