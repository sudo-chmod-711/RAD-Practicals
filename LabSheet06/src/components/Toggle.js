import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(state => !state);
  };

  return (
      <div>
      <p>State : {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default Toggle;
