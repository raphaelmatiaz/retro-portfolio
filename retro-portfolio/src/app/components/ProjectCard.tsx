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

function ProjectCard() {
  return (
    <Window className='min-h-fit'>
        <div id="main-div" className="w-[600] min-h-fit max-h-[400] bg-[#808080] mx-auto box-shadow-lg shadow-lg">
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

                <p>Random Meme Generator:</p>
                <br />
                <div className='flex'>
                    <p>A simple web app coded in vanilla JS, that generates absurd memes by combining randomized stock images and english words. </p>
                    <img src="images/my-modulus.webp"
                        alt="Meme sample generated through my web app"
                        title='Sample meme from this app'
                        className='w-64'
                    />
                </div>

                <Button variant='raised' fullWidth className='min-h-fit mt-8' onClick={() => window.open("https://raphaelmatiaz.github.io/Absurd-Meme-Generator/", "blank")}>
                    <p className='text-3xl p-4 flex items-center justify-center gap-2'>
                        <span className="animate-point-left">&#x261B;</span>
                        <span className='px-2'>Try it out!</span>
                        <span className="animate-point-right">&#x261A;</span>
                    </p>
                </Button>
        
            </div>
        </div>
    </Window>
        
  );
}

export default ProjectCard;


