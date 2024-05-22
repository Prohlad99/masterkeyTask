import React, { useState, useEffect } from 'react';

const AlphabetContainer = ({ onTileClick }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [letterColors, setLetterColors] = useState({});

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const colors = {};
    letters.forEach(letter => {
      colors[letter] = getRandomColor();
    });
    setLetterColors(colors);
  }, []); 

  return (
    
        <div className='grid grid-cols-12 gap-2 p-2'>
          {
            letters.map(letter => (
              <button
                className='border-[1px] hover:shadow-none transition ease-in-out delay-75 border-blue-400 rounded-md shadow-md shadow-black text-[30px] h-[90px] text-center'
                key={letter}
                style={{ backgroundColor: letterColors[letter] }}
                onClick={() => onTileClick(letter)}
              >
                {letter}
              </button>
            ))
          }
        </div>

       
    
  );
};

export default AlphabetContainer;
