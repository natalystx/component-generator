import React, { useState } from "react";
import { cx } from "@emotion/css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "outlined" | "success" | "primary";
  onClick: () => void;
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary-darkBlue"
    | "warning"
    | "error"
    | "success"
    | "info";
  disabled?: boolean;
  icon?: React.ReactNode;
  mom?: { name: string };
};

const Button = ({
  children,
  variant = "primary",
  onClick,
  size = "small",
  color = "primary",
  disabled,
  icon,
  mom,
}: ButtonProps) => {
  const [counter, setCounter] = useState(0);

  return (
    <button
      onClick={onClick}
      className={cx(
        "w-fit py-2 px-3 bg-neutral-500 hover:bg-neutral-600 rounded-lg flex items-center",
        size === "small" && "h-9",
        size === "medium" && "h-11",
        size === "large" && "h-[52px]",
        variant === "outlined" &&
          color === "primary" &&
          "border border-primary-200 text-primary-600 bg-white hover:bg-primary-100",
        variant === "outlined" &&
          color === "secondary-darkBlue" &&
          "border border-secondary-darkBlue-200 text-secondary-darkBlue-600 bg-white hover:bg-secondary-darkBlue-100",
        variant === "outlined" &&
          color === "warning" &&
          "border border-warning-200 text-warning-600 bg-white hover:bg-warning-100",
        variant === "outlined" &&
          color === "error" &&
          "border border-error-200 text-error-600 bg-white hover:bg-error-100",
        variant === "outlined" &&
          color === "success" &&
          "border border-success-200 text-success-600 bg-white hover:bg-success-100",
        variant === "outlined" &&
          color === "info" &&
          "border border-info-200 text-info-600 bg-white hover:bg-info-100",
        variant === "outlined" &&
          color === "primary" &&
          "border border-primary-200 text-primary-600 bg-white hover:bg-primary-100",
        variant === "outlined" &&
          color === "secondary-darkBlue" &&
          "border border-secondary-darkBlue-200 text-secondary-darkBlue-600 bg-white hover:bg-secondary-darkBlue-100",
        variant === "outlined" &&
          color === "warning" &&
          "border border-warning-200 text-warning-600 bg-white hover:bg-warning-100",
        variant === "outlined" &&
          color === "error" &&
          "border border-error-200 text-error-600 bg-white hover:bg-error-100",
        variant === "outlined" &&
          color === "success" &&
          "border border-success-200 text-success-600 bg-white hover:bg-success-100",
        variant === "outlined" &&
          color === "info" &&
          "border border-info-200 text-info-600 bg-white hover:bg-info-100",
        variant === "outlined" &&
          color === "primary" &&
          "border border-primary-200 text-primary-600 bg-white hover:bg-primary-100",
        variant === "outlined" &&
          color === "secondary-darkBlue" &&
          "border border-secondary-darkBlue-200 text-secondary-darkBlue-600 bg-white hover:bg-secondary-darkBlue-100",
        variant === "outlined" &&
          color === "warning" &&
          "border border-warning-200 text-warning-600 bg-white hover:bg-warning-100",
        variant === "outlined" &&
          color === "error" &&
          "border border-error-200 text-error-600 bg-white hover:bg-error-100",
        variant === "outlined" &&
          color === "success" &&
          "border border-success-200 text-success-600 bg-white hover:bg-success-100",
        variant === "outlined" &&
          color === "info" &&
          "border border-info-200 text-info-600 bg-white hover:bg-info-100",
        variant === "primary" &&
          color === "primary" &&
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white",
        variant === "primary" &&
          color === "secondary-darkBlue" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-white",
        variant === "primary" &&
          color === "warning" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white",
        variant === "primary" &&
          color === "error" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-white",
        variant === "primary" &&
          color === "success" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-white",
        variant === "primary" &&
          color === "info" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white",
        variant === "primary" &&
          color === "primary" &&
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white",
        variant === "primary" &&
          color === "secondary-darkBlue" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-white",
        variant === "primary" &&
          color === "warning" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white",
        variant === "primary" &&
          color === "error" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-white",
        variant === "primary" &&
          color === "success" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-white",
        variant === "primary" &&
          color === "info" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white",
        variant === "primary" &&
          color === "primary" &&
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white",
        variant === "primary" &&
          color === "secondary-darkBlue" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-white",
        variant === "primary" &&
          color === "warning" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white",
        variant === "primary" &&
          color === "error" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-white",
        variant === "primary" &&
          color === "success" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-white",
        variant === "primary" &&
          color === "info" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white",
        mom?.name === "gg" &&
          color === "primary" &&
          "opacity-50 pointer-events-none bg-primary-200",
        mom?.name === "gg" &&
          color === "secondary-darkBlue" &&
          "opacity-50 pointer-events-none bg-secondary-darkBlue-200",
        mom?.name === "gg" &&
          color === "warning" &&
          "opacity-50 pointer-events-none bg-warning-200",
        mom?.name === "gg" &&
          color === "error" &&
          "opacity-50 pointer-events-none bg-error-200",
        mom?.name === "gg" &&
          color === "success" &&
          "opacity-50 pointer-events-none bg-success-200",
        mom?.name === "gg" &&
          color === "info" &&
          "opacity-50 pointer-events-none bg-info-200",
        counter === 2 &&
          color === "primary" &&
          "opacity-50 pointer-events-none bg-primary-200",
        counter === 2 &&
          color === "secondary-darkBlue" &&
          "opacity-50 pointer-events-none bg-secondary-darkBlue-200",
        counter === 2 &&
          color === "warning" &&
          "opacity-50 pointer-events-none bg-warning-200",
        counter === 2 &&
          color === "error" &&
          "opacity-50 pointer-events-none bg-error-200",
        counter === 2 &&
          color === "success" &&
          "opacity-50 pointer-events-none bg-success-200",
        counter === 2 &&
          color === "info" &&
          "opacity-50 pointer-events-none bg-info-200",
        disabled &&
          color === "primary" &&
          "opacity-50 pointer-events-none bg-primary-200",
        disabled &&
          color === "secondary-darkBlue" &&
          "opacity-50 pointer-events-none bg-secondary-darkBlue-200",
        disabled &&
          color === "warning" &&
          "opacity-50 pointer-events-none bg-warning-200",
        disabled &&
          color === "error" &&
          "opacity-50 pointer-events-none bg-error-200",
        disabled &&
          color === "success" &&
          "opacity-50 pointer-events-none bg-success-200",
        disabled &&
          color === "info" &&
          "opacity-50 pointer-events-none bg-info-200"
      )}
    >
      <span
        className={cx(
          "w-full",
          color === "primary" &&
            "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white",
          color === "secondary-darkBlue" &&
            "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-white",
          color === "warning" &&
            "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white",
          color === "error" &&
            "bg-error-500 hover:bg-error-600 active:bg-error-700 text-white",
          color === "success" &&
            "bg-success-500 hover:bg-success-600 active:bg-success-700 text-white",
          color === "info" &&
            "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white",
          color === "primary" &&
            "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white",
          color === "secondary-darkBlue" &&
            "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-white",
          color === "warning" &&
            "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white",
          color === "error" &&
            "bg-error-500 hover:bg-error-600 active:bg-error-700 text-white",
          color === "success" &&
            "bg-success-500 hover:bg-success-600 active:bg-success-700 text-white",
          color === "info" &&
            "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white",
          color === "primary" &&
            "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white",
          color === "secondary-darkBlue" &&
            "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-white",
          color === "warning" &&
            "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white",
          color === "error" &&
            "bg-error-500 hover:bg-error-600 active:bg-error-700 text-white",
          color === "success" &&
            "bg-success-500 hover:bg-success-600 active:bg-success-700 text-white",
          color === "info" &&
            "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white"
        )}
      >
        <div className="flex">
          <span>{mom?.name}</span>
          <i className="w-5 h-5">
            <div>{icon && icon}</div>
          </i>
        </div>
      </span>
    </button>
  );
};

export default Button;
