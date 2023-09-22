// frontend/src/App.js

import React, { useState } from 'react';
import './App.css';
import InputForm from './components/inputform/InputForm';
import NumberList from './components/numberlist/NumberList';
import axios from 'axios';

const API_URL_ENDPOINT = 'http://localhost:3001/api/numbers';

// Entry point component for the app
const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [option, setSelectedOption] = useState('prime');

  // Method for POST request to fetch output array from the server
  const getNumbers = async (value, selectedOption) => {
    try {
      if (value) {
        const response = await axios.post(API_URL_ENDPOINT, {
          value: Number(value),
          type: selectedOption,
        });
        setNumbers(response.data.outputArray);
        setSelectedOption(selectedOption);
      }
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div className="App">
      <InputForm handleSubmit={getNumbers} />
      <div className="result-container">
        <NumberList
          title={option}
          list={numbers}
          className="expected-result1"
        />
      </div>
    </div>
  );
};

export default App;
