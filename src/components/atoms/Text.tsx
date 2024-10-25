import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ children, className = "" }: TextProps) => (
  <div className={`text-6xl font-bold ${className}`}>{children}</div>
);
