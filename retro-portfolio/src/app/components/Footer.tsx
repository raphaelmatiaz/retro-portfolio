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

import { 
    Computer, 
    Folder, 
    Settings, 
    InfoBubble, 
    User, 
    Notepad, 
    Star, 
    Mail, 
    Phone, 
    Wordpad, 
    Memory, 
    Internat151, 
    Shell3214, 
    ScrollingMarquee100, 
    Progman39, 
    WindowAbc, 
    FilePick, 
    Progman35,
    Main103,
    MystifyYourMind100,
    Systray306,
    Progman14,
    Drvspace7,
    Brush,
    Globe
} from '@react95/icons';

function Footer() {
    return (
        <footer className="flex flex-col bg-[var(--color-gray-light)] border border-[var(--color-gray-medium)] mt-8">
            <WindowHeader className='window-title w-full'>
                © 2025 RafaelMatias.dev - Built with Next.js & React95
            </WindowHeader>
            <div className='p-4 min-h-[64px] flex flex-wrap items-center justify-center gap-4'>
                <div className='flex items-center gap-2'>
                    <Globe width={16} height={16} />
                    <span className='text-sm'>Made with passion</span>
                </div>
                <Separator orientation='vertical' />
                <div className='flex items-center gap-2'>
                    <Globe width={16} height={16} />
                    <span className='text-sm'>Portugal</span>
                </div>
                <Separator orientation='vertical' />
                <div className='flex gap-2'>
                    <Button size='sm' variant='flat'>
                        <Mail width={16} height={16} style={{ marginRight: 4 }} />
                        Email
                    </Button>
                    <Button size='sm' variant='flat'>
                        <Computer width={16} height={16} style={{ marginRight: 4 }} />
                        GitHub
                    </Button>
                    <Button size='sm' variant='flat'>
                        <User width={16} height={16} style={{ marginRight: 4 }} />
                        LinkedIn
                    </Button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
