import React from "react";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Hangnman } from "../components/Hangnman";
import { Result } from "../components/Result";
import words from "../word.json";

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getRandomChar() {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return chars[Math.floor(Math.random() * chars.length)];
}

export const Playground = () => {
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [secretWord, setSecretWord] = useState([]);
  const [shuffleArrayChar, setShuffleArrayChar] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handlePlayAgain = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setSecretWord([]);
    setShuffleArrayChar([]);
    setMistakes(0);
    setGameOver(false);
  };

  useEffect(() => {
    if (word.length <= 12) {
      const remainChar = Array.from(
        { length: 12 - word.length },
        getRandomChar
      );
      const shuffleArrayChar = [...word, ...remainChar];
      setShuffleArrayChar(shuffleArray(shuffleArrayChar));

      const updateSecretWord = Array.from({ length: word.length }, () => "___");
      setSecretWord(updateSecretWord);
    }
  }, [word]);

  const handleClick = (char) => {
    let updatedSecretWord = [...secretWord]; // Create a copy of the secretWord array
    let newMistake = mistakes;
    let charFound = false;

    for (let index = 0; index < word.length; index++) {
      if (word[index] === char) {
        updatedSecretWord[index] = char; // Update the specific index with the guessed character
        charFound = true;
      }
    }
    if (!charFound) {
      newMistake += 1;
      setMistakes((prev) => prev + 1);
    }
    if (word === updatedSecretWord.join("") || mistakes >= 5) {
      setGameOver(true);
    }
    setSecretWord(updatedSecretWord);
  };

  return (
    <div className="App overflow-auto font-mono bg-gradient-to-r min-w-max min-h-max from-cyan-300 to-blue-300 w-full h-screen">
      {gameOver && (
        <Result mistakes={mistakes} onPlayAgain={handlePlayAgain} word={word} />
      )}
      <h1 className="text-8xl tracking-wider text-white text-center">
        Hangman
      </h1>
      <div className="lg:grid lg:grid-cols-6 lg:mt-6">
        <div className="col-span-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 text-center justify-center my-12">
              {secretWord.map((char, index) => (
                <p className="text-2xl" key={index}>
                  {char !== "__" ? char : "__"}
                </p>
              ))}
            </div>
            <div className="lg:w-[60%] mx-auto lg:mt-4">
              <div className="grid mdgrid-cols-12 grid-cols-6 gap-5">
                {shuffleArrayChar.map((char, index) => (
                  <Card handleClick={handleClick} key={index} char={char} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:col-span-2">
          <Hangnman mistakes={mistakes} />
        </div>
      </div>
    </div>
  );
};
