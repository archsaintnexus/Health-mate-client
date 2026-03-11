import React from 'react';

type IconWrapperVariant = 'default' | 'circle' | 'simple';

interface IconWrapperProps {
    children: React.ReactNode;
    variant?: IconWrapperVariant;
    className?: string;
    bgClassName?: string;
}

export function IconWrapper({
    children,
    variant = 'default',
    className = '',
    bgClassName = 'bg-blue-50'
}: IconWrapperProps) {
    if (variant === 'simple') {
        return <div className={`inline-flex items-center justify-center ${className}`}>{children}</div>;
    }

    if (variant === 'circle') {
        return (
            <div className={`w-14 h-14 rounded-full ${bgClassName} flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 ${className}`}>
                {children}
            </div>
        );
    }

    // Default variant as seen in Features Quick Action Cards
    return (
        <div className={`${bgClassName} w-16 h-16 rounded-full flex items-center justify-center mb-6 ${className}`}>
            {children}
        </div>
    );
}
