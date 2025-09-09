import React from 'react';

const FetchButton = ({ onClick }) => {
  return (
    // Updated button text to match the test suite
    <button onClick={onClick}>Get a New Joke</button>
  );
};

export default FetchButton;