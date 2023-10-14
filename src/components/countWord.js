import React, { useState } from 'react';

const WordCounter = ({ size="500"}) => {
    const [wordCount, setWordCount] = useState(0);
  
    const countCharacters = (text) => {
        return text.length;
      };

    const countWord = (event) => {
        const text = event.target.value;
        const count = countCharacters(text);
        setWordCount(count);
      };
    

  return (
    <div>
      <textarea id="word" onInput={countWord} rows="10" cols="60" />
      <div>No of words entered are: {wordCount}</div>
    </div>
  );
};

export default WordCounter;
