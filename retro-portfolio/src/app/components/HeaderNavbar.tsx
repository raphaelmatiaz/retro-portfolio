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
  WindowHeader,
  ProgressBar
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
        <nav className="flex flex-col bg-[var(--color-gray-light)] border sticky top-0 z-50 border-[var(--color-gray-medium)]">
            <WindowHeader className='window-title w-full'>
                RafaelMatias.dev
                
            </WindowHeader>
            <div id="nav-button-list" className='p-1 min-h-[48px]'>
                <Button variant='menu' onClick={() => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }}
>
                    <Progman39 width={24} height={24} style={{ marginRight: 4 }} />
                    Home
                </Button>
                <Button variant='menu' onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
                    <Main103 width={24} height={24} style={{ marginRight: 4 }} />
                    Skills</Button>
                <Button variant='menu' onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        <MystifyYourMind100 width={24} height={24} style={{ marginRight: 4 }} />
                    Projects</Button>
                <Button variant='menu' onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Systray306 width={24} height={24} style={{ marginRight: 4 }} />
                    Technologies</Button>
                <Button variant='menu' onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                        <User width={24} height={24} style={{ marginRight: 4 }} />
                    About</Button>
                <Button variant='menu' onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}>
                        <WindowAbc width={24} height={24} style={{ marginRight: 4 }} />
                    Education</Button>
                <Button variant='menu' onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Progman14 width={24} height={24} style={{ marginRight: 4 }} />
                    Experience</Button>
                <Button variant='menu' onClick={() => document.getElementById('hobbies')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Brush width={24} height={24} style={{ marginRight: 4 }} />
                    Hobbies</Button>
                <Button variant='menu' onClick={() => document.getElementById('interests')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Drvspace7 width={24} height={24} style={{ marginRight: 4 }} />
                    Interests</Button>
                <Button variant='menu' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Progman35 width={24} height={24} style={{ marginRight: 4 }} />
                    Contact</Button>
                <Button variant='menu' onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}>
                        <FilePick width={24} height={24} style={{ marginRight: 4 }} />
                    Resume</Button>
            </div>
        </nav>
        </>
    )
}

export default HeaderNavbar;
