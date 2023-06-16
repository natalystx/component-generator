import React from "react";

type CardProps = {
  children: React.ReactNode;
  variant: "outlined" | "success";
  onClick: () => void;
};

const Card = ({ children, variant, onClick }: CardProps) => {
  return (
    <button onClick={onClick} className="w-4 h-5">
      {children}
    </button>
  );
};

export default Card;
