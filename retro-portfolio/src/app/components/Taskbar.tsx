'use client';

import { useEffect, useState } from "react";

const START_ITEMS: { id: string; label: string; icon: string }[] = [
    { id: "about", label: "About_Me.txt", icon: "📇" },
    { id: "skills", label: "System Properties", icon: "🧠" },
    { id: "projects", label: "My Projects", icon: "💾" },
    { id: "experience", label: "Setup Wizard", icon: "🧾" },
    { id: "hobbies", label: "C:\\Hobbies\\", icon: "🕹️" },
    { id: "contact", label: "New Message...", icon: "📨" },
];

function Clock() {
    const [time, setTime] = useState("--:--");

    useEffect(() => {
        const tick = () =>
            setTime(
                new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            );
        tick();
        const interval = setInterval(tick, 10_000);
        return () => clearInterval(interval);
    }, []);

    return <span className="text-[12px] tabular-nums">{time}</span>;
}

export default function Taskbar() {
    const [startOpen, setStartOpen] = useState(false);

    const go = (id: string) => {
        setStartOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* click-away backdrop */}
            {startOpen && (
                <div className="fixed inset-0 z-[70]" onClick={() => setStartOpen(false)} />
            )}

            <div className="fixed bottom-0 left-0 right-0 z-[80] bg-[var(--w95-silver)] bevel-out px-1 py-[3px] flex items-center gap-2 select-none">
                {/* ── Start button + menu ── */}
                <div className="relative">
                    <button
                        className={`w95-btn px-2 py-[3px] flex items-center gap-1.5 font-bold text-[13px] ${startOpen ? "w95-btn-active" : ""}`}
                        onClick={() => setStartOpen((o) => !o)}
                    >
                        {/* four-pane pixel flag */}
                        <span className="grid grid-cols-2 gap-[1px] w-[14px] h-[14px] shrink-0" aria-hidden="true">
                            <span className="bg-[#e50000]" />
                            <span className="bg-[#3aa603]" />
                            <span className="bg-[#0827f5]" />
                            <span className="bg-[#fdea00]" />
                        </span>
                        Start
                    </button>

                    {startOpen && (
                        <div className="absolute bottom-full left-0 mb-1 z-[80] flex bevel-out bg-[var(--w95-silver)] p-[3px] w-[240px]">
                            {/* vertical brand strip */}
                            <div className="w95-titlebar w-7 flex items-end justify-center py-2">
                                <span
                                    className="font-pixel text-[11px] text-white tracking-widest"
                                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                >
                                    RAFAEL95
                                </span>
                            </div>
                            <div className="flex-1 flex flex-col">
                                {START_ITEMS.map((item) => (
                                    <button
                                        key={item.id}
                                        className="flex items-center gap-2 px-2 py-[6px] text-[13px] text-left hover:bg-[var(--w95-navy)] hover:text-white"
                                        onClick={() => go(item.id)}
                                    >
                                        <span className="text-[16px] w-6 text-center">{item.icon}</span>
                                        {item.label}
                                    </button>
                                ))}
                                <div className="border-t border-[var(--w95-gray)] border-b border-b-white my-1" />
                                <button
                                    className="flex items-center gap-2 px-2 py-[6px] text-[13px] text-left hover:bg-[var(--w95-navy)] hover:text-white"
                                    onClick={() => {
                                        setStartOpen(false);
                                        window.open("https://github.com/raphaelmatiaz", "_blank");
                                    }}
                                >
                                    <span className="text-[16px] w-6 text-center">🐙</span>
                                    GitHub
                                </button>
                                <button
                                    className="flex items-center gap-2 px-2 py-[6px] text-[13px] text-left hover:bg-[var(--w95-navy)] hover:text-white"
                                    onClick={() => {
                                        setStartOpen(false);
                                        window.open("https://www.linkedin.com/in/rafael-matias-80780226b/", "_blank");
                                    }}
                                >
                                    <span className="text-[16px] w-6 text-center">💼</span>
                                    LinkedIn
                                </button>
                                <div className="border-t border-[var(--w95-gray)] border-b border-b-white my-1" />
                                <button
                                    className="flex items-center gap-2 px-2 py-[6px] text-[13px] text-left hover:bg-[var(--w95-navy)] hover:text-white"
                                    onClick={() => go("shutdown")}
                                >
                                    <span className="text-[16px] w-6 text-center">🔌</span>
                                    Shut Down...
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="bevel-in-thin w-[2px] self-stretch" />

                {/* ── running task ── */}
                <button className="w95-btn w95-btn-active px-3 py-[3px] text-[12px] flex items-center gap-1.5 max-w-[220px] truncate">
                    <span>🌐</span> portfolio_v2.exe
                </button>

                <div className="flex-1" />

                {/* ── system tray ── */}
                <div className="bevel-in-thin px-2 py-[3px] flex items-center gap-2">
                    <span className="text-[12px]" title="Sound: on">🔊</span>
                    <span className="text-[12px]" title="Connected at 56.6 Kbps">🖥️</span>
                    <Clock />
                </div>
            </div>
        </>
    );
}
