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
import { createGlobalStyle, ThemeProvider } from 'styled-components';

/* Original Windows95 font (optional) */
// import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
// import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body, input, select, textarea {
    font-family: 'Arial', 'sans-serif';
  }
`;

function HeroGreeting() {
  return (
    <Window>
        <div id="main-div" className="w-[600] max-h-[400] bg-[#808080] my-12 mx-auto box-shadow-lg shadow-lg p-8">
            {/* <div id="main-div-navbar" className="flex flex-row p-16 items-center justify-between bg-gradient-to-r from-[#00007b]  via-[#ffeb3b]  via-[#3fea3b]  to-[#0884ce]">
             */}
             <div className="flex flex-row p-16 items-center justify-between bg-[linear-gradient(90deg,rgba(56,88,207,1)_0%,rgba(50,137,151,1)_13%,rgba(60,154,74,1)_24%,rgba(136,167,68,1)_34%,rgba(181,142,76,1)_45%,rgba(199,87,178,1)_56%,rgba(185,138,138,1)_65%,rgba(242,236,170,1)_76%,rgba(178,213,103,1)_100%,rgba(161,255,205,1)_99%,rgba(206,217,94,1)_96%,rgba(219,90,219,1)_95%,rgba(55,132,219,1)_100%)]">
                <p className="text-white text-2xl">Greeting.exe</p>
                <div className="flex items-center space-x-0.5">
                    <Button >
80                  </Button>
                    {/* <button type="button" className="flex items-center justify-center px-0.5 w-8 h-8 bg-[#cac6cb] border border-white border-b-black border-r-black">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg>
                    </button> */}
                    <button type="button" className="flex items-center justify-center w-8 h-8 bg-[#cac6cb] border border-white border-b-black border-r-black">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 21h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2V7h16l.001 12H4z"></path></svg>
                    </button>
                    <button type="button" className="flex items-center justify-center w-8 h-8 bg-[#cac6cb] border border-white border-b-black border-r-black">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg>
                    </button>
                </div>
            </div>
            <div style={{padding: "16px", height: "100%"}} className="text-4xl bg-white p-8">Hi, <br/> My Name is <strong className=''>Rafael Matias</strong> <br/>I'm a Junior Web Developer, Indie Game Developer, UX/UI Designer, Artist and Musician (yes, that's a lot)</div>
            <Button fullWidth className='text-4xl' style={{padding: "16px", height: "64px"}}><p className='text-4xl'>Meet the Guy</p></Button>
            {/* <Window resizable shadow className=''>
                <WindowHeader></WindowHeader>
                <WindowContent></WindowContent>
            </Window> */}
        </div>
    </Window>
        
  );
}

export default HeroGreeting;


{/* <div className="border border-b-[#dadada]">
                <ul className="flex">
                    <li className="p-1 first-letter:underline">New</li>
                    <li className="p-1 first-letter:underline">Options</li>
                    <li className="p-1 first-letter:underline">Help</li>
                </ul>
            </div> */}
            {/* <div className="space-y-0.5 bg-[#808080] h-full">
                <div className="p-1 bg-[#cac6cb] h-full">
                    <div className="flex flex-col mt-2 space-y-3 h-full">
                        <p>Text description exemple.</p>
                        <button type="button" className="flex items-center justify-center px-2 bg-[#cac6cb] border border-white border-b-black border-r-black">
                            Button Exemple
                        </button>
                        <span className="text-[#a099a1]">Footer card text.</span>
                    </div>
                </div>
            </div> */}