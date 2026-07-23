'use client';

import React from "react";

type Win95ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /** Renders the button in its pressed/toggled state */
    active?: boolean;
};

export default function Win95Button({ children, className = "", active = false, ...rest }: Win95ButtonProps) {
    return (
        <button
            className={`w95-btn px-3 py-1 ${active ? "w95-btn-active" : ""} ${className}`}
            {...rest}
        >
            <span className="flex items-center justify-center gap-1">
                {children}
            </span>
        </button>
    );
}
