'use client'

import TextType from '@/components/TextType/TextType';

import Win95Window from './Win95Window';
import Win95Button from './Win95Button';

function HeroGreeting() {
    return (
        <Win95Window
            title="greeting.exe"
            icon="👋"
            menu={["File", "Edit", "Help"]}
            statusBar={["Ready", "NUM"]}
            className="w-[600px] max-w-[92vw] shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
        >
            <div id="text-container" className="text-3xl p-8 text-left">
                <p>
                    Hi, <br />
                    My Name is <strong>Rafael Matias</strong> <br />
                </p>

                I&apos;m &nbsp;
                <TextType
                    text={[" a Full-Stack Web Developer 💾", " an Indie Game Developer 👾", "a Musician and Artist 🎼🎨"]}
                    textColors={["#b400aeff", "#007cc4ff", "#0000ff", "#59007cff"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                />
            </div>

            <div id="button-container" className="w-full flex items-center justify-center p-4 pb-6">
                <Win95Button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <p className="text-3xl p-4 flex items-center justify-center gap-2">
                        <span className="animate-point-left">&#x261B;</span>
                        <span className="px-2">Meet this Guy</span>
                        <span className="animate-point-right">&#x261A;</span>
                    </p>
                </Win95Button>
            </div>
        </Win95Window>
    );
}

export default HeroGreeting;
