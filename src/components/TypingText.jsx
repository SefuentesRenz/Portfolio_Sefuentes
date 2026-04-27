import { useEffect, useState } from 'react';

const TypingText = ({
  text,
  className = '',
  typingSpeed = 100,
  deletingSpeed =100,
  pauseAtEnd = 1200,
  pauseAtStart = 250,
  loop = true,
  showCursor = true,
}) => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!text) return;

    if (!loop && index === text.length) {
      return;
    }

    const delay = !isDeleting && index === text.length
      ? pauseAtEnd
      : isDeleting && index === 0
        ? pauseAtStart
        : isDeleting
          ? deletingSpeed
          : typingSpeed;

    const timeoutId = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setIndex((prev) => prev + 1);
        return;
      }

      if (!isDeleting && index === text.length) {
        if (loop) setIsDeleting(true);
        return;
      }

      if (isDeleting && index > 0) {
        setIndex((prev) => prev - 1);
        return;
      }

      if (loop) {
        setIsDeleting(false);
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [
    deletingSpeed,
    index,
    isDeleting,
    loop,
    pauseAtEnd,
    pauseAtStart,
    text,
    typingSpeed,
  ]);

  return (
    <span className={className}>
      {text.slice(0, index)}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypingText;
