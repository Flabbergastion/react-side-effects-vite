import React, { useState, useEffect } from 'react';
import FetchButton from './components/FetchButton.jsx';
import JokeDisplay from './components/JokeDisplay.jsx';

const App = () => {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch the joke from the API
  const fetchJoke = async () => {
    setIsLoading(true); // Set loading to true while fetching
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
      const data = await response.json();
      setJoke(data.joke); // Update the joke state with the fetched data
    } catch (error) {
      setJoke('Failed to fetch a joke. Please try again.');
      console.error('Error fetching joke:', error);
    } finally {
      setIsLoading(false); // Set loading to false after the fetch is complete
    }
  };

  // useEffect hook to fetch a joke on the initial render
  useEffect(() => {
    fetchJoke();
  }, []); // The empty dependency array ensures this runs only once

  return (
    <div className="app-container">
      <h1>Programming Joke Generator</h1>
      <JokeDisplay joke={joke} isLoading={isLoading} />
      <FetchButton onClick={fetchJoke} />
    </div>
  );
};

export default App;