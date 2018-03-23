import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
    }}
  >
    <h1 style={{ margin: 0 }}>
      <a
        href="https://github.com/akagomez/"
        style={{
          textDecoration: 'none',
        }}>
        akagomez
      </a> / <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        README
      </Link>
    </h1>
  </div>
);

export default Header;
