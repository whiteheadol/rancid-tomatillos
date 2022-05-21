import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>Page not found. Please try a different url.</h1>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default Error;
