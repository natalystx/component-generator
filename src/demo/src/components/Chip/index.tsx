import React from "react";
import { cx } from "@emotion/css";
type ChipProps = {
  children: React.ReactNode;
  variant: "outlined" | "success" | "primary";
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary-darkBlue"
    | "warning"
    | "error"
    | "success"
    | "info";
};

const Chip = ({ children, variant, onClick, size, color }: ChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "rounded-[20px] w-auto",
        size === "small" && "h-6 gap-x-[2px] px-2 text-xs",
        size === "medium" && "h-8 gap-x-1 px-[10px] text-sm",
        size === "large" && "h-9 gap-x-1 px-3 text-base",
        color === "primary" &&
          variant === "outlined" &&
          "border border-primary-200 text-primary-600 bg-white hover:bg-primary-100",
        color === "secondary-darkBlue" &&
          variant === "outlined" &&
          "border border-secondary-darkBlue-200 text-secondary-darkBlue-600 bg-white hover:bg-secondary-darkBlue-100",
        color === "warning" &&
          variant === "outlined" &&
          "border border-warning-200 text-warning-600 bg-white hover:bg-warning-100",
        color === "error" &&
          variant === "outlined" &&
          "border border-error-200 text-error-600 bg-white hover:bg-error-100",
        color === "success" &&
          variant === "outlined" &&
          "border border-success-200 text-success-600 bg-white hover:bg-success-100",
        color === "info" &&
          variant === "outlined" &&
          "border border-info-200 text-info-600 bg-white hover:bg-info-100",
        color === "primary" &&
          variant === "outlined" &&
          "border border-primary-200 text-primary-600 bg-white hover:bg-primary-100",
        color === "secondary-darkBlue" &&
          variant === "outlined" &&
          "border border-secondary-darkBlue-200 text-secondary-darkBlue-600 bg-white hover:bg-secondary-darkBlue-100",
        color === "warning" &&
          variant === "outlined" &&
          "border border-warning-200 text-warning-600 bg-white hover:bg-warning-100",
        color === "error" &&
          variant === "outlined" &&
          "border border-error-200 text-error-600 bg-white hover:bg-error-100",
        color === "success" &&
          variant === "outlined" &&
          "border border-success-200 text-success-600 bg-white hover:bg-success-100",
        color === "info" &&
          variant === "outlined" &&
          "border border-info-200 text-info-600 bg-white hover:bg-info-100",
        color === "primary" &&
          variant === "outlined" &&
          "border border-primary-200 text-primary-600 bg-white hover:bg-primary-100",
        color === "secondary-darkBlue" &&
          variant === "outlined" &&
          "border border-secondary-darkBlue-200 text-secondary-darkBlue-600 bg-white hover:bg-secondary-darkBlue-100",
        color === "warning" &&
          variant === "outlined" &&
          "border border-warning-200 text-warning-600 bg-white hover:bg-warning-100",
        color === "error" &&
          variant === "outlined" &&
          "border border-error-200 text-error-600 bg-white hover:bg-error-100",
        color === "success" &&
          variant === "outlined" &&
          "border border-success-200 text-success-600 bg-white hover:bg-success-100",
        color === "info" &&
          variant === "outlined" &&
          "border border-info-200 text-info-600 bg-white hover:bg-info-100",
        color === "primary" &&
          variant === "primary" &&
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white",
        color === "secondary-darkBlue" &&
          variant === "primary" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-white",
        color === "warning" &&
          variant === "primary" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white",
        color === "error" &&
          variant === "primary" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-white",
        color === "success" &&
          variant === "primary" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-white",
        color === "info" &&
          variant === "primary" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white",
        color === "primary" &&
          variant === "primary" &&
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white",
        color === "secondary-darkBlue" &&
          variant === "primary" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-white",
        color === "warning" &&
          variant === "primary" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white",
        color === "error" &&
          variant === "primary" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-white",
        color === "success" &&
          variant === "primary" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-white",
        color === "info" &&
          variant === "primary" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white",
        color === "primary" &&
          variant === "primary" &&
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white",
        color === "secondary-darkBlue" &&
          variant === "primary" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-white",
        color === "warning" &&
          variant === "primary" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-white",
        color === "error" &&
          variant === "primary" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-white",
        color === "success" &&
          variant === "primary" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-white",
        color === "info" &&
          variant === "primary" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-white"
      )}
    >
      {children}
    </button>
  );
};

export default Chip;
