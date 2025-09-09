import React from 'react';

const JokeDisplay = ({ joke, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        // Updated loading message to match the test suite
        <p>Loading...</p>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  );
};

export default JokeDisplay;