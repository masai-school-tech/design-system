import React from "react";
import { Spacing } from "@masaischooltech/foundation";

export interface MarginProps {
  space?: keyof typeof Spacing;
  left?: keyof typeof Spacing;
  right?: keyof typeof Spacing;
  top?: keyof typeof Spacing;
  bottom?: keyof typeof Spacing;
}

const Margin: React.FC<MarginProps> = ({
  space = "xxxs",
  children,
  left,
  right,
  top,
  bottom,
}) => {
  let className = ``;
  if (!left && !right && !top && !bottom) {
    className = `masai-margin-${space}`;
  }

  if (left) {
    className = `${className} masai-margin-left-${left}`;
  }

  if (right) {
    className = `${className} masai-margin-right-${right}`;
  }

  if (top) {
    className = `${className} masai-margin-top-${top}`;
  }

  if (bottom) {
    className = `${className} masai-margin-bottom-${bottom}`;
  }

  return <div className={className}>{children}</div>;
};

export default Margin;
