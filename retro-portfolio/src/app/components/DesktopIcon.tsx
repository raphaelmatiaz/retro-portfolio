'use client';

interface DesktopIconProps {
    icon: string;
    label: string;
    onClick?: () => void;
}

/** Desktop shortcut: big emoji glyph + label that highlights like a selected icon */
export default function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
    return (
        <button
            className="group flex flex-col items-center gap-1 w-[92px] p-1 focus:outline-none"
            onClick={onClick}
        >
            <span className="text-[40px] leading-none drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform">
                {icon}
            </span>
            <span className="w-full [overflow-wrap:anywhere] text-[12px] text-white text-center leading-tight px-1 group-hover:bg-[var(--w95-navy)] group-focus:bg-[var(--w95-navy)] group-focus:outline-dotted group-focus:outline-1 group-focus:outline-white">
                {label}
            </span>
        </button>
    );
}
