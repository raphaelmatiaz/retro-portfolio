'use client';

/** Hand-made 88×31 web badge, like god (and Geocities) intended */
function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`w-[110px] h-[38px] shrink-0 flex flex-col items-center justify-center text-center leading-tight border-2 border-black px-1 select-none ${className}`}
        >
            {children}
        </div>
    );
}

function VisitorCounter() {
    // A real counter would require a backend. 1996 didn't have one either, mostly.
    const digits = "0013372".split("");
    return (
        <div className="flex items-center gap-2">
            <span className="text-[12px]">You are visitor N.º</span>
            <div className="flex gap-[2px] bevel-in-thin bg-black p-[3px]">
                {digits.map((d, i) => (
                    <span key={i} className="font-terminal text-[18px] leading-none text-[#33ff33] bg-black px-[3px] border-r border-[#0a3a0a] last:border-r-0">
                        {d}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer id="shutdown">
            {/* ── Badge wall + webring ─────────────────────── */}
            <div className="bevel-out bg-[var(--w95-silver)] p-[3px]">
                <div className="w95-titlebar flex items-center px-1 py-[2px]">
                    <span className="font-bold text-[13px]">footer.htm — 100% hand-coded HTML</span>
                </div>

                <div className="p-4 flex flex-col items-center gap-4">
                    {/* badges */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <Badge className="bg-[var(--w95-navy)] text-white">
                            <span className="font-pixel text-[7px]">BEST VIEWED IN</span>
                            <span className="font-pixel text-[8px] text-[var(--vw-cyan)]">RETROSCAPE 4.0</span>
                        </Badge>
                        <Badge className="bg-black text-[#33ff33]">
                            <span className="font-terminal text-[14px] leading-none">800×600</span>
                            <span className="font-terminal text-[12px] leading-none">HI-COLOR 16-BIT</span>
                        </Badge>
                        <Badge className="bg-[var(--w95-silver)] bevel-out border-0">
                            <span className="font-pixel text-[7px]">MADE WITH</span>
                            <span className="font-pixel text-[8px] text-[var(--w95-navy)]">NOTEPAD.EXE</span>
                        </Badge>
                        <Badge className="construction">
                            <span className="font-pixel text-[7px] bg-black text-[#f7d117] px-1 py-[2px]">
                                ALWAYS UNDER CONSTRUCTION
                            </span>
                        </Badge>
                        <Badge className="bg-gradient-to-r from-[var(--vw-pink)] to-[var(--vw-purple)] text-white">
                            <span className="font-pixel text-[7px]">Y2K COMPLIANT</span>
                            <span className="font-pixel text-[10px]">✓ PROBABLY</span>
                        </Badge>
                        <Badge className="bg-white">
                            <span className="font-pixel text-[7px] text-black">FREE OF</span>
                            <span className="font-pixel text-[8px] text-[#e50000]">POP-UPS*</span>
                            <span className="text-[7px] text-[var(--w95-gray)]">*except the fun ones</span>
                        </Badge>
                    </div>

                    <VisitorCounter />

                    {/* webring */}
                    <div className="flex items-center gap-2 text-[12px]">
                        <button className="w95-btn px-2 py-[2px]">« prev</button>
                        <span className="font-pixel text-[9px] text-[var(--w95-navy)]">RETRO·DEV·WEBRING</span>
                        <button className="w95-btn px-2 py-[2px]">random</button>
                        <button className="w95-btn px-2 py-[2px]">next »</button>
                    </div>

                    <p className="text-[12px] text-center">
                        © 1996–2026 RafaelMatias.dev — Algarve, Portugal 🌊 — built with Next.js,
                        nostalgia, and a dial-up connection to the past.
                    </p>
                </div>
            </div>

            {/* ── The final screen ─────────────────────────── */}
            <div className="bg-black min-h-[40vh] mb-10 flex items-center justify-center p-8">
                <p className="font-pixel text-[#ffa424] text-[14px] md:text-[20px] text-center leading-relaxed">
                    It&apos;s now safe to turn off
                    <br />
                    your computer.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
