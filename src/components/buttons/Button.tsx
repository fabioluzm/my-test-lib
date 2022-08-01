import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = ({ children, backgroundColor, color, width, height, style, ...props }) => {
  let _style: React.CSSProperties = style || {};

  // override defaults
  if (backgroundColor) _style.backgroundColor = backgroundColor;
  if (color) _style.color = color;
  if (width) _style.width = width;
  if (height) _style.height = height;

  return (
    <button style={_style} {...props}>
      {children}
    </button>
  );
};
