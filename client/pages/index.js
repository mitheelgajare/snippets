import React, { useState, useEffect } from "react";
import Button from "./../components/Button";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <div className="index-page">
      <h1>Snippets</h1>
      <p>To search for snippets, click here -</p>
      <Button
        onClick={() => {
          router.push("/search");
        }}
      >
        Search
      </Button>
      <p>New here? Well read all about us on the About Page -</p>
      <Button
        onClick={() => {
          router.push("/about");
        }}
      >
        About
      </Button>
    </div>
  );
};

export default Index;
