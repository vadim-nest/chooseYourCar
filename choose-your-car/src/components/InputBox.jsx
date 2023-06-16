import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InputBox({ inputName, onInputChange, next }) {
  const navigate = useNavigate();

  function handleNext(event) {
    event.preventDefault();
    console.log(event.target.value);
    onInputChange(event.target.code.value);
    console.log('Next clicked');
    navigate(`/${next}`);
  }

  return (
    <div className='select-box-window'>
      <h1>{inputName}</h1>
      <form onSubmit={handleNext}>
        <input required name='code' />
        <button className='button-next' type='submit'>
          NEXT
        </button>
      </form>
    </div>
  );
}
