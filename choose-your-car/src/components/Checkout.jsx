import { useEffect, useState } from 'react';

export default function Checkout({ make, colour, code }) {
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    if (colour === 'red') setIsRed(true);
  }, [colour]);

  return (
    <div className='select-box-window'>
      <h1>Generated Text</h1>
      <p>
        I have a {make} and the colour is {colour}.
      </p>
      {isRed && <p>THE CAR IS RED! NICE!!</p>}
      <p>REF: {code}</p>
    </div>
  );
}
