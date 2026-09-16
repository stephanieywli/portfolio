import { useEffect, useState } from "react";

const useTypewriter = (words: string[], typeSpeed = 70, pauseMs = 1500) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];

    if (!deleting && subIndex === word.length) {
      const pauseTimer = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(pauseTimer);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timer = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? typeSpeed / 2 : typeSpeed,
    );
    return () => clearTimeout(timer);
  }, [subIndex, deleting, index, words, typeSpeed, pauseMs]);

  return words[index].slice(0, subIndex);
};

export default useTypewriter;
