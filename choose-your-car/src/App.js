import './App.css';
import SelectBox from './components/SelectBox.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate
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
  function handleSelectChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/make" />} />
      {Object.keys(options).map((key, index) => {
        return (
          <Route
            path={`/${key}`}
            element={
              <SelectBox
                currentKey={key}
                options={options[key]}
                onSelectChange={handleSelectChange}
                next={Object.keys(options)[index + 1]}
              />
            }
          />
        );
      })}
    </Routes>
  </Router>
  );
}

export default App;
