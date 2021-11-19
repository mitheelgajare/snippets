import React, { useState, useEffect } from "react";
import Head from "next/head";

const Error404 = () => {
  return (
    <div className="error-404-page">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div>
        Sorry, page not found 😥. <br />
        Please double check your URL.{" "}
      </div>
    </div>
  );
};

export default Error404;
