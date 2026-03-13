import React from 'react';

type ButtonVariant = 'solid' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
    className?: string;
}

export function Button({
    variant = 'solid',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = "px-7 py-2 rounded-md font-semibold text-sm transition-colors duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

    const variants = {
        solid: "bg-primary hover:bg-primary-hover text-white border border-transparent",
        outline: "bg-transparent hover:bg-accent text-foreground border border-primary",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
