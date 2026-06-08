'use client';

function HeaderNavbar() {
    return(
        <>
        <nav className="flex flex-col bg-[var(--color-gray-light)] border sticky top-0 z-50 border-[var(--color-gray-medium)]">
            <div className='window-title w-full'>
                RafaelMatias.dev
                
            </div>

            <div className="flex flex-row items-center justify-between">
                <div id="nav-button-list" className='p-1 min-h-[48px]'>
                    <button
                        onClick={() => { globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}>
                        <img width={24} height={24} style={{ marginRight: 4 }} />
                        Home
                    </button>
                    <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                        <img width={24} height={24} style={{ marginRight: 4 }} />
                        About</button>
                    <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
                        <img width={24} height={24} style={{ marginRight: 4 }} />
                        Skills</button>
                    <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            <img width={24} height={24} style={{ marginRight: 4 }} />
                        Projects</button>
                    <button onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}>
                            <img width={24} height={24} style={{ marginRight: 4 }} />
                        Technologies</button>

                    <button onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}>
                            <img width={24} height={24} style={{ marginRight: 4 }} />
                        Education</button>
                    <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                            <img width={24} height={24} style={{ marginRight: 4 }} />
                        Experience</button>
                    <button onClick={() => document.getElementById('hobbies')?.scrollIntoView({ behavior: 'smooth' })}>
                            <img width={24} height={24} style={{ marginRight: 4 }} />
                        Hobbies</button>
                    <button onClick={() => document.getElementById('interests')?.scrollIntoView({ behavior: 'smooth' })}>
                            <img width={24} height={24} style={{ marginRight: 4 }} />
                        Interests</button>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            <img width={24} height={24} style={{ marginRight: 4 }} />
                        Contact</button>
                    <button onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}>
                            <img width={24} height={24} style={{ marginRight: 4 }} />
                        Resume</button>
                </div>
                <div id='socials' className='mr-4 flex gap-2'>
                    <button onClick={() => {
                        window.open('https://github.com/raphaelmatiaz', '_blank')
                    }}>
                        <img src="/images/icons/github.png" className='w-6 h-6 mr-2'></img>
                         Github</button>
                    <button 
                        
                        onClick={() => { window.open('https://www.linkedin.com/in/rafael-matias-80780226b/', '_blank')}}>
                        <img src="/images/icons/linkedin.png" className='w-6 h-6 mr-2'></img>
                        LinkedIn
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default HeaderNavbar;
