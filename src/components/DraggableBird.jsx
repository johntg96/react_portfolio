import React, { useState, useRef, useEffect } from 'react';

function DraggableBird(props) {
  const { isDragging, onDraggableBirdData } = props;
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
      console.log("Touch Event");
      const touch = e.touches[0];
      setInitialPosition({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
      onDraggableBirdData(true, { x: touch.clientX - position.x, y: touch.clientY - position.y });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.stopPropagation();
      console.log("Drag Event");
      const touch = e.touches[0];
      const newX = touch.clientX - initialPosition.x;
      const newY = touch.clientY - initialPosition.y;
      setPosition({ x: newX, y: newY }); // Update the position state
      onDraggableBirdData(true, { x: touch.clientX - position.x, y: touch.clientY - position.y });
    }
  };

  const handleTouchEnd = () => {
    onDraggableBirdData(false, position);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="draggable-bird-container"
      style={{
        position: 'relative',
      }}
    >
      <div
        className="draggable-bird"
        style={{
          position: 'absolute',
          left: position.x + 'px',
          top: position.y + 'px',
        }}
      >
        <img
          src="/images/ssc_animated.webp"
          alt="Draggable Bird"
        />
      </div>
    </div>
  );
}

export default DraggableBird;
