'use client';

import React from "react";

interface Win95WindowProps {
    /** Title bar text, e.g. "about_me.txt - Notepad" */
    title: string;
    /** Small icon (emoji or node) shown left of the title */
    icon?: React.ReactNode;
    /** Decorative menu bar entries, e.g. ["File", "Edit", "Help"] */
    menu?: string[];
    /** Cells rendered in a sunken status bar at the bottom */
    statusBar?: string[];
    /** Grayed-out title bar */
    inactive?: boolean;
    className?: string;
    bodyClassName?: string;
    children: React.ReactNode;
}

function TitleBarButton({ children, label }: { children: React.ReactNode; label: string }) {
    return (
        <button
            aria-label={label}
            className="w95-btn h-[18px] w-[18px] p-0 flex items-center justify-center text-[11px] leading-none font-bold text-black"
        >
            {children}
        </button>
    );
}

export default function Win95Window({
    title,
    icon,
    menu,
    statusBar,
    inactive = false,
    className = "",
    bodyClassName = "",
    children,
}: Win95WindowProps) {
    return (
        <div className={`bevel-out bg-[var(--w95-silver)] p-[3px] ${className}`}>
            {/* Title bar */}
            <div className={`${inactive ? "w95-titlebar-inactive" : "w95-titlebar"} flex items-center justify-between gap-2 px-1 py-[2px] select-none`}>
                <div className="flex items-center gap-1.5 min-w-0">
                    {icon && <span className="text-[14px] leading-none shrink-0">{icon}</span>}
                    <span className="font-bold text-[13px] truncate">{title}</span>
                </div>
                <div className="flex items-center gap-[2px] shrink-0">
                    <TitleBarButton label="Minimize">
                        <span className="translate-y-[3px]">_</span>
                    </TitleBarButton>
                    <TitleBarButton label="Maximize">
                        <span className="text-[9px] border border-black w-[9px] h-[9px] border-t-2 block" />
                    </TitleBarButton>
                    <TitleBarButton label="Close">✕</TitleBarButton>
                </div>
            </div>

            {/* Menu bar */}
            {menu && menu.length > 0 && (
                <div className="flex items-center text-[13px] border-b border-[var(--w95-gray)] bg-[var(--w95-silver)]">
                    {menu.map((item) => (
                        <button key={item} className="w95-menu-item">
                            <u>{item.charAt(0)}</u>
                            {item.slice(1)}
                        </button>
                    ))}
                </div>
            )}

            {/* Body */}
            <div className={bodyClassName}>{children}</div>

            {/* Status bar */}
            {statusBar && statusBar.length > 0 && (
                <div className="flex gap-[3px] mt-[3px]">
                    {statusBar.map((cell, i) => (
                        <div
                            key={i}
                            className={`bevel-in-thin px-2 py-[2px] text-[12px] text-black ${i === 0 ? "flex-1" : ""}`}
                        >
                            {cell}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
