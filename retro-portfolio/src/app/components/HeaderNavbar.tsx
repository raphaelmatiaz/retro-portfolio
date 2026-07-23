'use client';

import { useState } from "react";

const NAV_ITEMS: { id: string; label: string; icon: string }[] = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "📇" },
    { id: "skills", label: "Skills", icon: "🧠" },
    { id: "projects", label: "Projects", icon: "💾" },
    { id: "experience", label: "Experience", icon: "🧾" },
    { id: "hobbies", label: "Hobbies", icon: "🕹️" },
    { id: "contact", label: "Contact", icon: "📨" },
];

function HeaderNavbar() {
    const [address, setAddress] = useState("C:\\RAFAEL_95\\index.html");

    const go = (id: string) => {
        setAddress(`C:\\RAFAEL_95\\${id.toUpperCase()}.HTM`);
        if (id === "home") {
            globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="sticky top-0 z-50 bevel-out bg-[var(--w95-silver)] p-[3px] select-none">
            {/* ── Title bar ─────────────────────────────── */}
            <div className="w95-titlebar flex items-center justify-between gap-2 px-1 py-[2px]">
                <div className="flex items-center gap-2 min-w-0">
                    <img src="/rm-logo.webp" alt="" className="h-6 w-auto pixelated shrink-0" />
                    <span className="font-bold text-[13px] truncate">
                        RafaelMatias.dev — RetroScape Navigator™ 95
                    </span>
                </div>
                <div className="flex items-center gap-[2px] shrink-0">
                    <button aria-label="Minimize" className="w95-btn h-[18px] w-[18px] p-0 flex items-center justify-center text-[11px] font-bold leading-none text-black">
                        <span className="translate-y-[3px]">_</span>
                    </button>
                    <button aria-label="Maximize" className="w95-btn h-[18px] w-[18px] p-0 flex items-center justify-center leading-none">
                        <span className="border border-black border-t-2 w-[9px] h-[9px] block" />
                    </button>
                    <button aria-label="Close" className="w95-btn h-[18px] w-[18px] p-0 flex items-center justify-center text-[11px] font-bold leading-none text-black">
                        ✕
                    </button>
                </div>
            </div>

            {/* ── Menu bar: the actual navigation ───────── */}
            <div className="flex flex-wrap items-center justify-between border-b border-[var(--w95-gray)]">
                <div className="flex flex-wrap items-center text-[13px]">
                    {NAV_ITEMS.map((item) => (
                        <button key={item.id} className="w95-menu-item flex items-center gap-1.5" onClick={() => go(item.id)}>
                            <span className="text-[12px]">{item.icon}</span>
                            <span>
                                <u>{item.label.charAt(0)}</u>
                                {item.label.slice(1)}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-1 px-1 py-[2px]">
                    <button
                        className="w95-btn px-2 py-[2px] flex items-center gap-1.5 text-[12px]"
                        onClick={() => window.open("https://github.com/raphaelmatiaz", "_blank")}
                    >
                        <img src="/images/icons/github.png" alt="" className="w-4 h-4 pixelated" />
                        GitHub
                    </button>
                    <button
                        className="w95-btn px-2 py-[2px] flex items-center gap-1.5 text-[12px]"
                        onClick={() => window.open("https://www.linkedin.com/in/rafael-matias-80780226b/", "_blank")}
                    >
                        <img src="/images/icons/linkedin.png" alt="" className="w-4 h-4 pixelated" />
                        LinkedIn
                    </button>
                </div>
            </div>

            {/* ── Address bar ───────────────────────────── */}
            <div className="flex items-center gap-2 px-1 py-[3px]">
                <span className="text-[12px] text-black shrink-0">Address:</span>
                <div className="bevel-field flex-1 flex items-center px-2 py-[2px] min-w-0">
                    <span className="font-terminal text-[16px] text-black truncate">{address}</span>
                    <span className="font-terminal text-[16px] text-black blink">_</span>
                </div>
                <button className="w95-btn px-3 py-[2px] text-[12px]" onClick={() => go("home")}>
                    Go
                </button>
            </div>
        </nav>
    );
}

export default HeaderNavbar;
