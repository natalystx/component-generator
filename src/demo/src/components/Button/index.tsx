import React from "react";
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
  icon?: React.ReactNode;
};

const Button = ({
  children,
  variant = "primary",
  onClick,
  size = "small",
  color = "primary",
  icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "w-auto py-2 px-3 bg-neutral-500 hover:bg-neutral-600 rounded-lg flex items-center",
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
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white"
      )}
    >
      <span
        className={cx(
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
        <div>
          <span>{children}</span>
          <i>{icon && icon}</i>
        </div>
      </span>
    </button>
  );
};

export default Button;
