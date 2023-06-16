import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SelectBox({ currentKey, options, onSelectChange, next }) {
  const [selected, setSelected] = useState(options[0].value);
  const navigate = useNavigate();

  function handleChange(event) {
    setSelected(event.target.value);
    onSelectChange(event.target.value);
  }
  console.log(options);

  function handleNext() {
    console.log('Next clicked');
    navigate(`/${next}`); // This will always navigate to '/colour'. You may want to make this dynamic.
  }

  return (
    <div className="select-box-window">
      <h1>{currentKey.toUpperCase()}</h1>
      <select value={selected} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button className="button-next" type="button" onClick={handleNext}>
          NEXT
      </button>
    </div>
  );
}
