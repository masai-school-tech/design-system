import * as React from "react";
import { Spacing } from "@masaischooltech/foundation";

interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({
  hexCode,
  width = Spacing.sm,
  height = Spacing.sm,
}) => {
  const className = `masai-width-${width} masai-height-${height}`;

  return <div className={className} style={{ backgroundColor: hexCode }}></div>;
};

export default Color;
