import { useState } from "react";

export default function SelectBox({ options, onSelectChange }) {
  const [selected, setSelected] = useState(options[0]);

  function handleChange(event) {
    setSelected(event.target.value);
    onSelectChange(event.target.value);
  }

  return (
    <div className="select-box-window">
      <select value={selected} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
