'use client'

/* Pick a theme of your choice */
import TextType from '@/components/TextType/TextType';

function HeroGreeting() {
  return (
    <div className='min-h-fit'>
        <div id="main-div" className="w-[600] min-h-fit max-h-[400] bg-[#808080] mx-auto box-shadow-lg shadow-lg">
            <div id="main-div-navbar" className="flex flex-row items-center justify-between bg-linear-to-r from-[#00007b] to-[#0884ce]">
            
             {/* <div className="flex flex-row p-16 items-center justify-between bg-[linear-gradient(90deg,rgba(56,88,207,1)_0%,rgba(50,137,151,1)_13%,rgba(60,154,74,1)_24%,rgba(136,167,68,1)_34%,rgba(181,142,76,1)_45%,rgba(199,87,178,1)_56%,rgba(185,138,138,1)_65%,rgba(242,236,170,1)_76%,rgba(178,213,103,1)_100%,rgba(161,255,205,1)_99%,rgba(206,217,94,1)_96%,rgba(219,90,219,1)_95%,rgba(55,132,219,1)_100%)]"> */}
                <p className="text-white text-2xl">Greeting.exe</p>
                <div className="flex items-center space-x-0.5">
                    {/* <button >
80                  </button> */}
                    <button disabled className='cursor-not-allowed'>
                        <span className="flex items-center justify-center w-4 h-4">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg>

                        
                        </span>
                    </button>
                </div>
            </div>
            <div className="text-3xl p-8 bg-(--color-gray-light)">
                Hi, <br/> 
                My Name is <strong className=''>Rafael Matias</strong> <br/>
                I'm &nbsp;  
                <TextType
                    
                    text={[" a Full-Stack Web Developer 💾", " an Indie Game Developer 👾", "a Musician and Artist 🎼🎨"]}
                    textColors={["#b400aeff", "#007cc4ff", "#0000ff", "#59007cff"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                />
                
            
                <button className='min-h-fit mt-8' onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                    <p className='text-3xl p-4 flex items-center justify-center gap-2'>
                        <span className="animate-point-left">&#x261B;</span>
                        <span className='px-2'>Meet this Guy</span>
                        <span className="animate-point-right">&#x261A;</span>
                    </p>
                </button>
            
            </div>
           
        </div>
    </div>
        
  );
}

export default HeroGreeting;
