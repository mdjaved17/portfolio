
import { useEffect, useState } from "react";

export default function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      moveX: Math.random() * 80 - 40,
      moveY: Math.random() * 80 - 40,
      opacity: Math.random() * 0.6 + 0.3,
    }));

    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            "--move-x": `${star.moveX}px`,
            "--move-y": `${star.moveY}px`,
          }}
        />
      ))}
    </div>
  );
}

