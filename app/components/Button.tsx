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
    const baseStyles = "px-7 py-2 rounded-md font-semibold transition-colors duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

    const variants = {
        solid: "bg-primary hover:bg-primary-hover text-white border border-transparent",
        outline: "bg-transparent hover:bg-accent text-foreground border border-primary",
    };

    const hasTextSize = /\btext-(xs|sm|base|lg|xl|[2-9]xl)\b/.test(className);
    const finalClassName = `${baseStyles} ${hasTextSize ? '' : 'text-sm'} ${variants[variant]} ${className}`;

    return (
        <button
            className={finalClassName}
            {...props}
        >
            {children}
        </button>
    );
}
