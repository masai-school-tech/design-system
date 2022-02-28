import React from "react";

interface ButtonProps {
  label: string;
}

console.log("hello");
const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return <button className='masai-button__container'>{label}</button>;
};

export default Button;
