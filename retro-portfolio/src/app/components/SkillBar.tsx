'use client';

interface SkillBarProps {
    label: string;
    /** 0 – 100 */
    value: number;
    icon?: string;
}

/** Win95 file-copy style segmented progress bar */
export default function SkillBar({ label, value, icon }: SkillBarProps) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
                <span className="text-[13px] flex items-center gap-1.5">
                    {icon && <span>{icon}</span>}
                    {label}
                </span>
                <span className="font-terminal text-[15px] text-[var(--w95-navy)]">{value}%</span>
            </div>
            <div className="bevel-field h-[18px] p-[3px]">
                <div
                    className="h-full"
                    style={{
                        width: `${value}%`,
                        background:
                            "repeating-linear-gradient(90deg, var(--w95-navy) 0 12px, transparent 12px 15px)",
                    }}
                />
            </div>
        </div>
    );
}
