import './App.css';
import Checkout from './components/Checkout';
import InputBox from './components/InputBox';
import SelectBox from './components/SelectBox.jsx';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';

const options = {
  make: [
    { value: 'audi', label: 'AUDI' },
    { value: 'bmw', label: 'BMW' },
    { value: 'vauxhal', label: 'VAUXHAL' },
    { value: 'mercedes', label: 'MERCEDES' },
    { value: 'peugeot', label: 'PEUGEOT' },
    { value: 'renault', label: 'RENAULT' },
  ],
  colour: [
    { value: 'blue', label: 'BLUE' },
    { value: 'red', label: 'RED' },
    { value: 'black', label: 'BLACK' },
    { value: 'orange', label: 'ORANGE' },
  ],
};

function App() {
  const [make, setMake] = useState(options.make[0].value);
  const [colour, setColour] = useState(options.colour[0].value);
  const [code, setCode] = useState('');

  const handleSelectChange = {
    make: setMake,
    colour: setColour,
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/make' />} />
        {Object.keys(options).map((key, index) => {
          return (
            <Route
              path={`/${key}`}
              element={
                <SelectBox
                  currentKey={key}
                  options={options[key]}
                  onSelectChange={handleSelectChange[key]}
                  next={
                    Object.keys(options)[index + 1]
                      ? Object.keys(options)[index + 1]
                      : 'code'
                  }
                />
              }
            />
          );
        })}
        <Route
          path={`/code`}
          element={
            <InputBox
              inputName='CODE'
              onInputChange={setCode}
              next='checkout'
            />
          }
        />
        <Route
          path={`/checkout`}
          element={<Checkout make={make} colour={colour} code={code} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
