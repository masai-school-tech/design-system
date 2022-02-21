import React from "react";
import { FontSize } from "@masaischooltech/foundation";

export interface TextProps {
  size?: keyof typeof FontSize;
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
  const className = `masai-text masai-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
