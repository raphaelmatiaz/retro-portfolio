'use client'

/* Pick a theme of your choice */
import TextType from '@/components/TextType/TextType';

import Win95WindowTab from './Win95WindowTab';
import Win95Button from './Win95Button';

function HeroGreeting() {

    return (
        <Win95WindowTab>

            <div id="main-div" className="w-[600] min-h-fit max-h-[400] bg-(--color-grey-light) mx-auto box-shadow-lg shadow-lg">
                
                <div id='text-container' className="text-3xl p-8 text-left">
                    <p>
                        Hi, <br/>
                        My Name is <strong className=''>Rafael Matias</strong> <br/>
                    </p>
                    
                    I'm &nbsp;  
                    <TextType
                        text={[" a Full-Stack Web Developer 💾", " an Indie Game Developer 👾", "a Musician and Artist 🎼🎨"]}
                        textColors={["#b400aeff", "#007cc4ff", "#0000ff", "#59007cff"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                    />
                    
                
                </div>

                <div id='button-container' className='w-full flex items-center justify-center p-4'>

                    {/* <button className='min-h-fit mt-8' onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}> */}
                        <Win95Button>
                            <p className='text-3xl p-4 flex items-center justify-center gap-2'>
                                <span className="animate-point-left">&#x261B;</span>
                                <span className='px-2'>Meet this Guy</span>
                                <span className="animate-point-right">&#x261A;</span>
                            </p>
                        </Win95Button>
                    {/* </button> */}
                </div>
            
            </div>
        </Win95WindowTab>
    );
}

export default HeroGreeting;
