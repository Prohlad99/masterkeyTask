import React, { useState, useEffect } from 'react';
import AlphabetContainer from './AlphabetContainer';

const Output = () => {
    const [outputString, setOutputString] = useState('');

    // tile click handler 
    const handleTileClick = (letter) => {
        let newOutputString = outputString + letter;
        newOutputString = replaceConsecutiveLetters(newOutputString);
        setOutputString(newOutputString);
      };
    
      const replaceConsecutiveLetters = (str) => {
        return str.replace(/(\w)\1{2,}/g, match => '_'.repeat(match.length));
      };


  return (
    // main container 
    <div className='bg-[#3b566b] w-full h-[100vh] p-10'>
      {/* text container  */}
      <div className='border-[1px] border-stone-200 h-[70vh] relative'>
       <AlphabetContainer onTileClick={handleTileClick}/>

        {/* output container  */}
        <div className='border-[1px] p-2 border-sky-300 rounded-md absolute bottom-2 right-[50%] translate-x-[50%]'>
          <h1 className='text-[30px] text-red-200'>Output: <span className='text-yellow-50'>{outputString}</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Output;
