import React, { useState } from "react";
import Confetti from "react-confetti";

const FireworksEffect: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleFireworks = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Останавливаем через 3 секунды
  };

  return (
    <div>
      <button onClick={handleFireworks}>Запустить фейерверк!</button>

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
        />
      )}
    </div>
  );
};

export default FireworksEffect;
