{/* 
  MoveableBird is a small super space chicken that the user can drag around if using a touchscreen capable device. 
    
    Component integration steps:

      - Provide this component to another components render function with 2 props:
        - isDragging -> A stateful boolean value
        - onMoveableBirdData -> function to update bird position (x and y coordinates)

      - Create stateful variable to hold isDragging boolean value.
      - Create stateful variable to hold position x and y coordinates.
      - Create function to update stateful variables.

      Example:
      --------------------------------------------------------------------------------
        const [isMoving, setIsMoving] = useState(false);
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMoveableBirdData = (moving, newPosition) => {
          setIsMoving(moving);
          setPosition(newPosition);
        };
      --------------------------------------------------------------------------------
*/}

import React, { useState, useRef, useEffect } from 'react';

function MoveableBird(props) {
  const { isDragging, onMoveableBirdData } = props;
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    // Detect touch support and add or remove a class accordingly
    if ('ontouchstart' in window) {
      containerRef.current.classList.add('touch-supported');
    } else {
      containerRef.current.classList.remove('touch-supported');
    }
  }, []);

  const handleTouchStart = (e) => {
    if ('ontouchstart' in window) {
      e.stopPropagation();
      console.log("Touch event");
      const touch = e.touches[0];
      setInitialPosition({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
      onMoveableBirdData(true, { x: touch.clientX - position.x, y: touch.clientY - position.y });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.stopPropagation();
      console.log("Touch drag event");
      const touch = e.touches[0];
      const newX = touch.clientX - initialPosition.x;
      const newY = touch.clientY - initialPosition.y;
      setPosition({ x: newX, y: newY }); // Update the position state
      onMoveableBirdData(true, { x: touch.clientX - position.x, y: touch.clientY - position.y });
    }
  };

  const handleTouchEnd = () => {
    onMoveableBirdData(false, position);
    console.log(position);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="moveable-bird-container"
      style={{
        position: 'relative',
      }}
    >
      <div
        className="moveable-bird"
        style={{
          position: 'absolute',
          left: position.x + 'px',
          top: position.y + 'px',
        }}
      >
        <img
          src="/images/ssc_animated.webp"
          alt="Moveable Bird"
        />
      </div>
    </div>
  );
}

export default MoveableBird;
