// frontend/src/components/inputForm
import './index.css';
import { useState } from 'react';

const optionsList = [
  'prime',
  'fibonacci series',
  'factorial',
  'armstrong number',
  'palindrome',
];

// UI to take the input from user and submit button with select option
const InputForm = ({ handleSubmit }) => {
  const [value, setValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('prime');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="form-container">
      <h1>APP 4</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>

      <select
        className="margin-left10"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {optionsList.map((currOption) => (
          <option key={currOption} value={currOption}>
            {currOption}
          </option>
        ))}
      </select>

      <button
        onClick={() => handleSubmit(value, selectedOption)}
        className="margin-left10"
      >
        Submit
      </button>
    </div>
  );
};

export default InputForm;
