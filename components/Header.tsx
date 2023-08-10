import React from 'react';
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export {Header};
