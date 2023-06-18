import React from "react";
import { cx } from "@emotion/css";

type ChipProps = {
  children: React.ReactNode;
  variant?: "outlined" | "success" | "primary";
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

const Chip = ({
  children,
  variant = "outlined",
  onClick,
  size = "small",
  color = "primary",
}: ChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "rounded-[20px] w-auto",
        size === "small" && "h-6 gap-x-[2px] px-2 text-xs",
        size === "medium" && "h-8 gap-x-1 px-[10px] text-sm",
        size === "large" && "h-9 gap-x-1 px-3 text-base",
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
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-primary-600 hover:text-primary-200",
        variant === "primary" &&
          color === "secondary-darkBlue" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-secondary-darkBlue-600 hover:text-secondary-darkBlue-200",
        variant === "primary" &&
          color === "warning" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-warning-600 hover:text-warning-200",
        variant === "primary" &&
          color === "error" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-error-600 hover:text-error-200",
        variant === "primary" &&
          color === "success" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-success-600 hover:text-success-200",
        variant === "primary" &&
          color === "info" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-info-600 hover:text-info-200",
        variant === "primary" &&
          color === "primary" &&
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-primary-600 hover:text-primary-200",
        variant === "primary" &&
          color === "secondary-darkBlue" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-secondary-darkBlue-600 hover:text-secondary-darkBlue-200",
        variant === "primary" &&
          color === "warning" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-warning-600 hover:text-warning-200",
        variant === "primary" &&
          color === "error" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-error-600 hover:text-error-200",
        variant === "primary" &&
          color === "success" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-success-600 hover:text-success-200",
        variant === "primary" &&
          color === "info" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-info-600 hover:text-info-200",
        variant === "primary" &&
          color === "primary" &&
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-primary-600 hover:text-primary-200",
        variant === "primary" &&
          color === "secondary-darkBlue" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-secondary-darkBlue-600 hover:text-secondary-darkBlue-200",
        variant === "primary" &&
          color === "warning" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-warning-600 hover:text-warning-200",
        variant === "primary" &&
          color === "error" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-error-600 hover:text-error-200",
        variant === "primary" &&
          color === "success" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-success-600 hover:text-success-200",
        variant === "primary" &&
          color === "info" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-info-600 hover:text-info-200",
        variant === "primary" &&
          color === "primary" &&
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-primary-600 hover:text-primary-200",
        variant === "primary" &&
          color === "secondary-darkBlue" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-secondary-darkBlue-600 hover:text-secondary-darkBlue-200",
        variant === "primary" &&
          color === "warning" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-warning-600 hover:text-warning-200",
        variant === "primary" &&
          color === "error" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-error-600 hover:text-error-200",
        variant === "primary" &&
          color === "success" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-success-600 hover:text-success-200",
        variant === "primary" &&
          color === "info" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-info-600 hover:text-info-200",
        variant === "primary" &&
          color === "primary" &&
          "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-primary-600 hover:text-primary-200",
        variant === "primary" &&
          color === "secondary-darkBlue" &&
          "bg-secondary-darkBlue-500 hover:bg-secondary-darkBlue-600 active:bg-secondary-darkBlue-700 text-secondary-darkBlue-600 hover:text-secondary-darkBlue-200",
        variant === "primary" &&
          color === "warning" &&
          "bg-warning-500 hover:bg-warning-600 active:bg-warning-700 text-warning-600 hover:text-warning-200",
        variant === "primary" &&
          color === "error" &&
          "bg-error-500 hover:bg-error-600 active:bg-error-700 text-error-600 hover:text-error-200",
        variant === "primary" &&
          color === "success" &&
          "bg-success-500 hover:bg-success-600 active:bg-success-700 text-success-600 hover:text-success-200",
        variant === "primary" &&
          color === "info" &&
          "bg-info-500 hover:bg-info-600 active:bg-info-700 text-info-600 hover:text-info-200"
      )}
    >
      {children}
    </button>
  );
};

export default Chip;
