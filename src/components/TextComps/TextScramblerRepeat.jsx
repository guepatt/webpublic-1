import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

const scrambleText = (targetText, progress) => {
  return targetText
    .split('')
    .map((char, i) => {
      if (i < progress) return char;
      return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    })
    .join('');
};

const TextScramblerRepeat = ({ text, speed = 50, delayBetweenRepeats = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (progress <= text.length) {
      interval = setInterval(() => {
        setDisplayedText(scrambleText(text, progress));
        setProgress((prev) => prev + 1);
      }, speed);
    } else {
      // Reset the animation after a delay
      interval = setTimeout(() => {
        setProgress(0);
        setDisplayedText('');
      }, delayBetweenRepeats);
    }

    return () => clearInterval(interval) || clearTimeout(interval);
  }, [progress, text, speed, delayBetweenRepeats]);

  return (
    <div>
      {displayedText}
    </div>
  );
};

export default TextScramblerRepeat;
