import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href="/search">
        Search
      </Link>
      <Link className="link" href="/about">
        About
      </Link>
    </div>
  );
};

export default Navbar;
