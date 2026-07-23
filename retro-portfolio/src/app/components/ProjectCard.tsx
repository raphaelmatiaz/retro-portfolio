'use client';

interface ProjectCardProps {
    projectName: string;
    projectNumber: number;
    projectSummary: string;
    projectImage: string;
    projectTechnologies: string[];
    projectFeatures?: string[];
    projectCtaText: string;
    projectCtaLink: string;
    projectGithubLink?: string;
    projectInstagramLink?: string;
}

function ProjectCard(props: ProjectCardProps) {
    const exeName =
        props.projectName.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") + ".exe";

    return (
        <div className="w-[340px] flex flex-col bevel-out bg-[var(--w95-silver)] p-[3px] text-black">
            {/* Title bar */}
            <div className="w95-titlebar flex items-center justify-between gap-2 px-1 py-[2px] select-none">
                <span className="font-bold text-[13px] truncate">{exeName}</span>
                <div className="flex items-center gap-[2px] shrink-0">
                    <button aria-label="Minimize" className="w95-btn h-[16px] w-[16px] p-0 flex items-center justify-center text-[10px] font-bold leading-none text-black">
                        <span className="translate-y-[2px]">_</span>
                    </button>
                    <button aria-label="Close" className="w95-btn h-[16px] w-[16px] p-0 flex items-center justify-center text-[10px] font-bold leading-none text-black">
                        ✕
                    </button>
                </div>
            </div>

            {/* Menu bar */}
            <div className="flex items-center text-[12px] border-b border-[var(--w95-gray)]">
                {["File", "Edit", "View", "Help"].map((m) => (
                    <span key={m} className="w95-menu-item">
                        <u>{m.charAt(0)}</u>
                        {m.slice(1)}
                    </span>
                ))}
            </div>

            {/* Screenshot in a sunken frame */}
            <div className="bevel-field p-[3px] m-2 mb-0">
                <img
                    src={props.projectImage}
                    alt={`Screenshot of ${props.projectName}`}
                    className="w-full h-[150px] object-cover object-top"
                />
            </div>

            {/* Body */}
            <div className="p-2 flex flex-col gap-2 flex-1">
                <p className="font-bold text-[15px] leading-tight">{props.projectName}</p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1">
                    {props.projectTechnologies.map((tech, i) => (
                        <span key={i} className="bevel-out-thin bg-[var(--w95-silver)] px-2 py-[1px] text-[10px]">
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="text-[12px] leading-snug">{props.projectSummary}</p>

                {/* Features listbox */}
                {props.projectFeatures && props.projectFeatures.length > 0 && (
                    <div className="bevel-field h-[84px] overflow-y-auto px-2 py-1">
                        {props.projectFeatures.map((feature, i) => (
                            <p key={i} className="text-[11px] leading-[1.5] whitespace-nowrap">
                                <span className="text-[var(--w95-navy)]">■</span> {feature}
                            </p>
                        ))}
                    </div>
                )}

                <div className="flex-1" />

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button
                        className="w95-btn flex-1 px-2 py-[5px] text-[12px] font-bold"
                        onClick={() => window.open(props.projectCtaLink, "_blank")}
                    >
                        <span className="animate-point-left">☛</span>
                        <span className="px-1">{props.projectCtaText}</span>
                    </button>
                    {props.projectGithubLink && (
                        <button
                            title="View source on GitHub"
                            className="w95-btn px-2 py-[5px] text-[12px]"
                            onClick={() => window.open(props.projectGithubLink, "_blank")}
                        >
                            <img src="/images/icons/github.png" alt="GitHub" className="w-4 h-4 pixelated" />
                        </button>
                    )}
                    {props.projectInstagramLink && (
                        <button
                            title="Follow on Instagram"
                            className="w95-btn px-2 py-[5px] text-[12px]"
                            onClick={() => window.open(props.projectInstagramLink, "_blank")}
                        >
                            📷
                        </button>
                    )}
                </div>
            </div>

            {/* Status bar */}
            <div className="flex gap-[3px] mt-[2px]">
                <div className="bevel-in-thin flex-1 px-2 py-[1px] text-[11px]">
                    {props.projectFeatures?.length ?? 0} feature(s)
                </div>
                <div className="bevel-in-thin px-2 py-[1px] text-[11px]">
                    {props.projectTechnologies.length} tech
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
