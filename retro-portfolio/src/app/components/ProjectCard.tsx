'use client'
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
  styleReset
} from 'react95';
// import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import original from 'react95/dist/themes/original';
// import TextType from '@/components/TextType/TextType';

// const GlobalStyles = createGlobalStyle`
//   ${styleReset}
//   body, input, select, textarea {
//     font-family: 'Arial', 'sans-serif';
//   }
// `;

import { SiGithub, SiInstagram } from "react-icons/si";


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
  return (
    <Window className='min-h-fit'>
        <div id="main-div" className="w-[40vw] min-h-fit max-h-[400] bg-[#808080] mx-auto box-shadow-lg shadow-lg">
            <div id="main-div-navbar" className="flex flex-row items-center justify-between bg-gradient-to-r from-[#BA1AA7] to-[#4F1ABA]">
                <p className="text-white text-2xl">Project.exe</p>
                <div className="flex items-center space-x-0.5">

                    <Button disabled className='cursor-not-allowed'>
                        <span className="flex items-center justify-center w-4 h-4">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg>
                        </span>
                    </Button>

                </div>
            </div>
            <div className="text-3xl p-8 bg-[var(--color-gray-light)]">

                <p className="font-bold">{props.projectName}</p>
                <div className='flex justify-between content-center py-4 border-b-2 border-b-[var(--color-gray-medium)]'>
                    <div>
                        {props.projectTechnologies.map((tech, index) => (
                            <span key={index} className="text-base inline-block bg-[var(--color-gray-medium)] text-white px-2 py-1 pt-1 rounded mr-2">
                                {tech}
                            </span>
                        ))}
                    </div>
                    {props.projectGithubLink ? 
                        <Button className="flex justify-center content-center" onClick={() => window.open(`${props.projectGithubLink}`, "blank")}
                            ><SiGithub className="mr-2"></SiGithub> Github
                        </Button> : <></>}

                    {props.projectInstagramLink ? 
                        <Button className="flex justify-center content-center" onClick={() => window.open(`${props.projectInstagramLink}`, "blank")}
                            ><SiInstagram className="mr-2"></SiInstagram> Instagram
                        </Button> : <></>}
                </div>
                <br />
                <div className='flex flex-col'>
                     <img src={props.projectImage}
                        alt="Meme sample generated through my web app"
                        title='Sample meme from this app'
                        className='w-full h-auto object-contain mb-4'
                    />
                    <p className="text-lg">
                        <p className='font-semibold pb-2 ' >Summary</p>
                        <p className='mb-4'>{props.projectSummary}</p>
                    </p>
                   
                   
                </div>

                 <ul className="list-disc text-base">
                    <p className='font-semibold pb-2'>Features</p>
                        {props.projectFeatures?.map((feature, index) => (
                            <li key={index} className=''>
                                {feature}
                            </li>
                        ))}
                    </ul>
                

                <Button 
                    variant='raised' 
                    fullWidth 
                    className='min-h-fit mt-8' 
                    onClick={() => window.open(`${props.projectCtaLink}`, "blank")}>
                    <p 
                        className='text-xl p-4 flex items-center justify-center gap-2'>
                        <span className="animate-point-left">&#x261B;</span>
                        <span className='px-2'>{props.projectCtaText}</span>
                        <span className="animate-point-right">&#x261A;</span>
                    </p>
                </Button>
        
            </div>
        </div>
    </Window>
        
  );
}

export default ProjectCard;


