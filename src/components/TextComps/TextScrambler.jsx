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

const TextScrambler = ({ text, speed = 10 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress > text.length) return;

    const interval = setInterval(() => {
      setDisplayedText(scrambleText(text, progress));
      setProgress((prev) => prev + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [progress, text, speed]);

  return (
    <div>
      {displayedText}
    </div>
  );
};

export default TextScrambler;
