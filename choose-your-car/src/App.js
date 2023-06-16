import './App.css';
import SelectBox from './components/SelectBox.jsx';

const options = [
  { value: 'audi', label: 'AUDI' },
  { value: 'bmw', label: 'BMW' }
]

function App() {

  function handleSelectChange(value) {
    console.log(`Selected: ${value}`)
  }

  return (
    <SelectBox options={options} onSelectChange={handleSelectChange}/>
  );
}

export default App;
