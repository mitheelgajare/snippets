import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./../../components/Button";

export const getStaticPaths = async () => {
  const data = await axios.get("http://localhost:5000/getAllSnippets");

  const paths = data.data.map(snippet => {
    return {
      params: {
        id: snippet.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const data = await axios.get(
    `http://localhost:5000/getSpecificSnippet?id=${id}`
  );

  return {
    props: { snippet: data.data },
  };
};

const Id = ({ snippet }) => {
  const copyText = () => {
    let codeToBeCopied = "";
    for (let line of snippet[0].snippet) {
      codeToBeCopied += line + "\n";
    }
    navigator.clipboard.writeText(codeToBeCopied);
    alert("Copied");
  };

  return (
    <div className="snippet-details">
      <div className="details">
        <h2>{snippet[0].title}</h2>
        <h4>Language: {snippet[0].language}</h4>
        <p>{snippet[0].description}</p>
      </div>
      <div className="code">
        <button onClick={copyText}>Copy</button>
        {snippet[0].snippet.map(line => (
          <span>
            {line} <br />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Id;
