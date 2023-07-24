import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(inputValue);
  };

    return (
      
        <form onSubmit={ handleSubmit }>
            <br/>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
            <button type="submit">Submit</button>
            <br/>
        </form>
         
  );
};

export default Form;
