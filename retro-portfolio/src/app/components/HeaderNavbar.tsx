'use client';
import {
  Button,
  MenuList,
  MenuListItem,
  ScrollView,
  Separator,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader
} from 'react95';
import styled from 'styled-components';

// Icon stuff
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css';

import { Computer, Folder, Settings, InfoBubble, 
    User, Notepad, Star, Mail, Phone, Wordpad, Memory, 
    Internat151, Shell3214, ScrollingMarquee100, Progman39, WindowAbc, FilePick, Progman35,
    Main103,
    MystifyYourMind100,
    Systray306,
    Progman14,
    Drvspace7,
    Brush,
} from '@react95/icons';


function HeaderNavbar() {
    return(
        <>
         <WindowHeader className='window-title'>
            RafaelMatias.dev
         </WindowHeader>
        <nav className="bg-[var(--color-gray-light)] border-1 sticky top-0 z-[10] p-32  border-[var(--color-gray-medium)] flex justify-start">
            <Button variant='menu'>
                <Progman39 width={24} height={24} style={{ marginRight: 4 }} />
                Home
            </Button>
            <Button variant='menu'>
                <Main103 width={24} height={24} style={{ marginRight: 4 }} />
                Skills</Button>
            <Button variant='menu'>
                 <MystifyYourMind100 width={24} height={24} style={{ marginRight: 4 }} />
                Projects</Button>
            <Button variant='menu'>
                 <Systray306 width={24} height={24} style={{ marginRight: 4 }} />
                Technologies</Button>
            <Button variant='menu'>
                 <User width={24} height={24} style={{ marginRight: 4 }} />
                About</Button>
            <Button variant='menu'>
                 <WindowAbc width={24} height={24} style={{ marginRight: 4 }} />
                Education</Button>
            <Button variant='menu'>
                 <Progman14 width={24} height={24} style={{ marginRight: 4 }} />
                Experience</Button>
            <Button variant='menu'>
                 <Brush width={24} height={24} style={{ marginRight: 4 }} />
                Hobbies</Button>
            <Button variant='menu'>
                 <Drvspace7 width={24} height={24} style={{ marginRight: 4 }} />
                Interests</Button>
            <Button variant='menu'>
                 <Progman35 width={24} height={24} style={{ marginRight: 4 }} />
                Contact</Button>
            <Button variant='menu'>
                 <FilePick width={24} height={24} style={{ marginRight: 4 }} />
                Resume</Button>
        </nav>
        </>
    )
}

export default HeaderNavbar;
