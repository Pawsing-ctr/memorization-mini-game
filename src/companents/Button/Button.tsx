import React from "react";

interface IButtonProps {
  onClick?: () => void;
  content: string;
  className: string;
  id?: number;
}

const Button: React.FC<IButtonProps> = ({ onClick, content, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
