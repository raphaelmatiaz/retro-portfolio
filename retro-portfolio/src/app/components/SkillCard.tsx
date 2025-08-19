import { propsData } from "@react95/icons";
import Image from "next/image";
import {
  Button,
  MenuList,
  MenuListItem,
  ScrollView,
  Separator,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  ProgressBar,
} from 'react95';



type SkillCardProps = {
  cardName: string;
  cardImage: string;   // URL to image
  comfortLevel: string;
  progress: number;    // percentage 0–100
};

export default function SkillCard({ cardName, cardImage, comfortLevel, progress }: SkillCardProps) {
  return (
    <Window>
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
          <ProgressBar
            variant="tile"
            value={progress}
            id={`${cardName}-comfort-level`}
          />
        </div>
      </div>
    </Window>
  );
}









// import styled from 'styled-components';

// export default function SkillCard(cardName, cardImage) {

//     return (
//         <Window>
//                 <div className="flex flex-col items-center justify-center gap-8 p-8">
                    
//                     <div id="technology-info" className="flex flex-row items-center justify-start">
                        
//                     <Image
//                         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
//                         alt="JavaScript"
//                         width={64}
//                         height={64}
//                         style={{ imageRendering: "pixelated" }}
//                     />
//                     <p className="ml-8 text-xl font-bold">{props.cardName} JavaScript</p>
//                     </div>

//                     <div id="progress" className="w-full">
//                     <label htmlFor="html-comfort-level"><em>Comfort Level: </em>Good</label>
//                     <ProgressBar variant="tile" value={65} id="html-comfort-level"></ProgressBar>
//                     </div>

//                 </div>
//             </Window>
//     )
    
// }