'use client';

import { useEffect, useState } from "react";
import DesktopIcon from "./DesktopIcon";

/**
 * A desktop icon begging not to be clicked.
 * Clicking it does exactly what you think it does.
 */
export default function BsodEasterEgg() {
    const [crashed, setCrashed] = useState(false);

    useEffect(() => {
        if (!crashed) return;
        const onKey = () => setCrashed(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [crashed]);

    return (
        <>
            <DesktopIcon icon="⚠️" label="do_NOT_click.exe" onClick={() => setCrashed(true)} />

            {crashed && (
                <div
                    className="fixed inset-0 z-[9995] bg-[#0000aa] flex items-center justify-center p-8 cursor-pointer"
                    onClick={() => setCrashed(false)}
                >
                    <div className="font-terminal text-white text-[20px] md:text-[24px] max-w-[640px] leading-relaxed">
                        <p className="text-center mb-8">
                            <span className="bg-[var(--w95-silver)] text-[#0000aa] px-3 font-bold">
                                &nbsp;RAFAEL95&nbsp;
                            </span>
                        </p>
                        <p className="mb-6">
                            A fatal exception 0E has occurred at 0028:C0011E36 in
                            PORTFOLIO_V2.EXE. The current application will be terminated.
                        </p>
                        <p className="mb-6">
                            * You were literally told not to click that.
                            <br />
                            * All unsaved nostalgia will be lost.
                            <br />
                            * This incident has been reported to nobody.
                        </p>
                        <p className="text-center">
                            Press any key (or click) to return to the website
                            <span className="blink">&nbsp;_</span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
