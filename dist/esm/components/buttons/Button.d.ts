import React from 'react';
export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    width?: string;
    height?: string;
    opacity?: string;
}
export declare const Button: React.FunctionComponent<IButtonProps>;
