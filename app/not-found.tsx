"use client";

import Link from 'next/link';
import { FaHeartbeat } from 'react-icons/fa';
import { IconWrapper } from './components/IconWrapper';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
            <IconWrapper variant="simple" className="mb-8 text-primary">
                <FaHeartbeat className="text-6xl animate-pulse" />
            </IconWrapper>
            <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-foreground mb-4">Page Not Found</h2>
            <p className="text-foreground/80 max-w-md mb-10 leading-relaxed">
                We couldn&apos;t locate the page you&apos;re looking for. It might have been moved, deleted, or perhaps the URL was mistyped.
            </p>
            <Link
                href="/"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200 ease-in-out"
            >
                Return to Home
            </Link>
        </div>
    );
}
