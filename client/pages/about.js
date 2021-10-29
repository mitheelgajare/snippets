import React, { useState, useEffect } from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="card">
        <h2>Snippets... One Place for all code</h2>
        <br />
        <p>
          Have you ever felt like this - You want a quicksort algorithm in your
          code. But you don't want to spend time coding it or reading
          documentation. You just want it there! <br />
          <br />
          Yeah, and I got you there buddy.
          <br />
          <br />
          Snippets is a website where you get access to thousands of code
          snippets in over 10 languages for free! .
          <br />
          <br />
          Just search for it on our search page and copy it on the press of a
          button. We guarantee reliability and efficiency in all our snippets.
          Also if you are unfamiliar with what you are looking at we have a
          title and a detailed description to all our snippets.
          <br />
          <br />
          Plus, there is no confusion like on other platforms such as Stack
          Overflow. There will only be one snippet for each topic (in every
          language, obviously) which is regularly updated to use the most modern
          and efficient methods.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
