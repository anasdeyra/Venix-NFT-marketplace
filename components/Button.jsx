import React from "react";
import { Button as B } from "@mantine/core";

export default function Button({
  children,
  size = "md",
  color = "indigo",
  variant = "filled",
  radius = "xl",
  ...props
}) {
  return (
    <B {...props} size={size} color={color} variant={variant} radius={radius}>
      {children}
    </B>
  );
}
