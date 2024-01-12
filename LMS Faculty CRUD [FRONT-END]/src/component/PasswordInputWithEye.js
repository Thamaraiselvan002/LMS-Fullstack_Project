import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const PasswordInputWithEye = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? 'Hide' : 'Show'}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default PasswordInputWithEye;
