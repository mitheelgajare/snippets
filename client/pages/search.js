import React, { useState, useEffect } from "react";
import Button from "./../components/Button";
import axios from "axios";
import Link from "next/link";

// Fetching Data from the API
export const getStaticProps = async () => {
  const data = await axios.get("http://localhost:5000/getAllSnippets");

  return {
    props: { snippets: data.data },
  };
};

// Component

const Search = ({ snippets }) => {
  // Search Hnadler
  const handleSearch = e => {
    e.preventDefault();
    let test = [];
    for (let item of snippets) {
      if (item.title.toLowerCase().includes(inputValue.toLowerCase())) {
        test.push(item);
      }
    }

    setToBeShown(test);
  };

  // vars

  const [toBeShown, setToBeShown] = useState(snippets);
  const [inputValue, setInputValue] = useState("");

  // returned JSX
  return (
    <div className="search-page">
      <form action="" autoComplete="off" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Some random code snippet... "
          required
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </form>

      <div className="snippets-list">
        {toBeShown.length !== 0 ? (
          toBeShown.map(snippet => (
            <div className="singular-snippet">
              <Link href={`/snippets/${snippet.id}`}>{snippet.title}</Link>
              <h4>Language: {snippet.language}</h4>
              <p>{snippet.description}</p>
            </div>
          ))
        ) : (
          <div className="singular-snippet-special">
            Sorry, no results. Try searching for less specific snippets
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
