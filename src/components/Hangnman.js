import React, { useEffect, useRef } from "react";

function head(context, mistakes) {
  context.beginPath();
  context.arc(250, 130, 30, 0, 2 * Math.PI);
  context.stroke();
  // Draw the eyes
  context.beginPath();
  context.arc(235, 125, 3, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.arc(265, 125, 3, 0, 2 * Math.PI);
  context.fill();

  if (mistakes > 5) {
    // Draw the frown
    context.beginPath();
    context.arc(250, 145, 10, 0.1 * Math.PI, 0.9 * Math.PI, true);
    context.stroke();
  } else {
    // Draw the smile
    context.beginPath();
    context.arc(250, 130, 20, 0.1 * Math.PI, 0.9 * Math.PI);
    context.stroke();
  }
}
function body(context) {
  context.beginPath();
  context.moveTo(250, 160);
  context.lineTo(250, 250);
  context.stroke();
}
function leftArm(context) {
  context.beginPath();
  context.moveTo(250, 170);
  context.lineTo(220, 200);
  context.stroke();
}
function rightArm(context) {
  context.beginPath();
  context.moveTo(250, 170);
  context.lineTo(280, 200);
  context.stroke();
}
function leftLeg(context) {
  context.beginPath();
  context.moveTo(250, 250);
  context.lineTo(220, 290);
  context.stroke();
}
function rightLeg(context) {
  context.beginPath();
  context.moveTo(250, 250);
  context.lineTo(280, 290);
  context.stroke();
}

function HangmanCanvas({ mistakes }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the base
    context.beginPath();
    context.moveTo(50, 350);
    context.lineTo(350, 350);
    context.stroke();

    // Draw the vertical pole
    context.beginPath();
    context.moveTo(150, 350);
    context.lineTo(150, 50);
    context.stroke();

    // Draw the horizontal pole
    context.beginPath();
    context.moveTo(150, 50);
    context.lineTo(250, 50);
    context.stroke();

    // Draw the rope
    context.beginPath();
    context.moveTo(250, 50);
    context.lineTo(250, 100);
    context.stroke();

    // Draw the hangman based on the number of mistakes
    // Draw the head
    {
      mistakes > 0 && head(context, mistakes);
    }

    // Draw the body
    {
      mistakes > 1 && body(context);
    }

    // Draw the left arm
    {
      mistakes > 2 && leftArm(context);
    }

    // Draw the right arm
    {
      mistakes > 3 && rightArm(context);
    }

    // Draw the left leg
    {
      mistakes > 4 && leftLeg(context);
    }

    // Draw the right leg
    {
      mistakes > 5 && rightLeg(context);
    }
  }, [mistakes]);

  return <canvas ref={canvasRef} width={400} height={400} />;
}
export const Hangnman = ({ mistakes }) => {
  return (
    <div>
      <HangmanCanvas mistakes={mistakes} />
    </div>
  );
};
