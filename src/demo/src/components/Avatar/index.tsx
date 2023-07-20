import React from "react";
import { cx } from "@emotion/css";

type AvatarProps = {
  size?: "small" | "medium" | "large";
  image: string;
  alt?: string;
};

const Avatar = ({ size = "small", image, alt }: AvatarProps) => {
  return (
    <div
      className={cx(
        "rounded-full relative overflow-hidden aspect-square",
        size === "small" && "h-8 w-8",
        size === "medium" && "w-11 h-11",
        size === "large" && "w-14 h-14"
      )}
    >
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
