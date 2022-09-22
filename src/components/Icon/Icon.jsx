import React from "react";

const Icon = ({ id, width, height, ...props }) => {
  return (
    <svg width={width} height={height} {...props}>
      <use xlinkHref={`/images/sprite.svg#${id}`} />
    </svg>
  );
};
export default Icon;
