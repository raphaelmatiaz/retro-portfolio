'use client';

function Footer() {
    return (
        <footer className="flex flex-col bg-[var(--color-gray-light)] border border-[var(--color-gray-medium)] mt-8">
            <div className='window-title w-full'>
                © 2025 RafaelMatias.dev - Built with Next.js & React95
            </div>
            <div className='p-4 min-h-[64px] flex flex-wrap items-center justify-center gap-4'>
                <div className='flex items-center gap-2'>
                    <div/>
                    <span className='text-sm'>Made with passion</span>
                </div>
                <div />
                <div className='flex items-center gap-2'>
                    <div/>
                    <span className='text-sm'>Portugal</span>
                </div>
                <div/>
                <div className='flex gap-2'>
                    <button>
                        <img width={16} height={16} style={{ marginRight: 4 }} />
                        Email
                    </button>
                    <button>
                        <img width={16} height={16} style={{ marginRight: 4 }} />
                        GitHub
                    </button>
                    <button>
                        <img width={16} height={16} style={{ marginRight: 4 }} />
                        LinkedIn
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
