import React, { useState } from "react";

const SHIFT_VALUE = 10;

const MAX_VALUE = 800;
const DEFAULT_BOX_SIZE = 100;

const MovableBox = ({ top = 0, bottom = 0, right = 0, left = 0 }) => (
  <div
    style={{
      width: DEFAULT_BOX_SIZE,
      height: DEFAULT_BOX_SIZE,
      backgroundColor: "pink",
      position: "absolute",
      top: top,
      bottom: bottom,
      left: left,
      right: right
    }}
  ></div>
);

const Button = ({ width = 0, height = 0, onClick = () => {}, ...style }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: width,
        height: height,
        backgroundColor: "gray",
        // position: "fixed",
        // top: top,
        // bottom: bottom,
        // left: left,
        // right: right,
        ...style
      }}
    />
  );
};

export const App = () => {
  const [top, setTop] = useState(0);
  const [bottom] = useState("auto");
  const [left, setLeft] = useState(0);
  const [right] = useState("auto");

  const moveRight = () => {
    // TODO: BOUNDARY CHECK
    if (left + DEFAULT_BOX_SIZE < MAX_VALUE) {
      setLeft((val) => val + SHIFT_VALUE);
    }
  };
  const moveLeft = () => {
    // TODO: BOUNDARY CHECK
    if (left >= 10) {
      setLeft((val) => val - SHIFT_VALUE);
    }
  };
  const moveDown = () => {
    // TODO: BOUNDARY CHECK
    if (top + DEFAULT_BOX_SIZE < MAX_VALUE) {
      setTop((val) => val + SHIFT_VALUE);
    }
  };
  const moveUp = () => {
    // TODO: BOUNDARY CHECK
    if (top >= 10) {
      setTop((val) => val - SHIFT_VALUE);
    }
  };

  return (
    <div
      style={{
        width: "1000px",
        height: "1000px"
      }}
    >
      <div
        style={{
          padding: "0 100px"
        }}
      >
        <Button onClick={moveUp} width={MAX_VALUE} height={100} />
      </div>

      <div
        style={{
          display: "flex"
        }}
      >
        <Button onClick={moveLeft} height={MAX_VALUE} width={100} />
        <div
          style={{
            position: "relative",
            width: MAX_VALUE,
            height: MAX_VALUE
          }}
        >
          <MovableBox top={top} bottom={bottom} right={right} left={left} />
        </div>
        <Button onClick={moveRight} height={MAX_VALUE} width={100} />
      </div>

      <div
        style={{
          padding: "0 100px"
        }}
      >
        <Button onClick={moveDown} width={MAX_VALUE} height={100} />
      </div>
    </div>
  );
};
