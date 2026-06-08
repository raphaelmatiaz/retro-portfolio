
import Image from "next/image";

type SkillCardProps = {
  cardName: string;
  cardImage: string;   // URL to image
  comfortLevel: string;
  progress: number;    // percentage 0–100
};

export default function SkillCard({ cardName, cardImage, comfortLevel, progress }: SkillCardProps) {
  return (
    <div>
      <div className="min-w-[255px] min-h-[255px] max-w-[255px] flex flex-col items-center justify-center gap-8 p-8">
        
        {/* Technology info row */}
        <div id="technology-info" className="flex flex-row items-start justify-start">
          <Image
            src={cardImage}
            alt={cardName}
            width={64}
            height={64}
            style={{ imageRendering: "pixelated" }}
          />
          <p className="ml-8 text-xl font-bold">{cardName}</p>
        </div>

        {/* Progress bar */}
        <div id="progress" className="w-full">
          <label htmlFor={`${cardName}-comfort-level`}>
            <em>Comfort Level: </em>{comfortLevel}
          </label>
        </div>
      </div>
    </div>
  );
}
