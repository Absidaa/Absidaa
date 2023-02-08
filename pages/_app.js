import "../styles/globals.css";
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  //  Whenever you're facing this problem 👇🏾
  //Hydration failed because the initial UI does not
  //match what was rendered on the server

  //You need to use this solution
  //useState & useEffect

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <>
      <div>
        <Navbar />

        <Component {...pageProps} />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Acme&family=Lato:wght@700&family=Roboto:wght@300&family=Seymour+One&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <Link
          rel="stylesheet"
          href="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        />

        <Link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        />
      </div>
    </>
  );
}
