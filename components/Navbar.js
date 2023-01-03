import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', gap: 10 }}>
      <Link href='/'>Home</Link>
      <Link href='/counter'>Counter</Link>
    </nav>
  );
};

export default Navbar;
