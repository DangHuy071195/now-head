// utils/motion.ts

export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => {
  let x = 0;
  let y = 0;

  if (direction === "left") {
    x = -100;
  } else if (direction === "right") {
    x = 100;
  } else if (direction === "up") {
    y = 100;
  } else if (direction === "down") {
    y = -100;
  }

  return {
    initial: {
      x,
      y,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};
