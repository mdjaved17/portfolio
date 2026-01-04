import { useEffect, useState } from "react";

export default function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1 + "px",
      duration: Math.random() * 3 + 2 + "s",
      delay: Math.random() * 5 + "s",
    }));
    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      {stars.map((star) => (
        <span
          key={star.id}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: "white",
            borderRadius: "50%",
            opacity: 0.8,
            animation: `twinkle ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
