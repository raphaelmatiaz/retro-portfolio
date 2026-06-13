import Win95Button from "./Win95Button"

// Default Export
export default function Win95WindowTab( {children}: any) {
    return (
        <div className="w-fit p-1 border-t-4 border-t-white border-r-black border-r-4 border-b-4 border-b-black border-l-white border-l-4 bg-[#C0C7C8] shadow-[inset_-4px_0_0_#87888F,inset_0_-4px_0_#87888F]">
            <Win95WindowTabHeader></Win95WindowTabHeader>
            <div className="w-full">
                {children}
            </div>
           
        </div>
    )
}

// Tab Header
function Win95WindowTabHeader() {
    return (
        <div id="main-div-navbar" className="flex flex-row items-center justify-between bg-linear-to-r from-[#00007b] to-[#0884ce]">
            <p className="text-white text-2xl">Greeting.exe</p>
            <div className="flex items-center space-x-0.5">
                {/* <button disabled className='cursor-not-allowed'> */}
                <Win95Button>
                    <span className="font-bold">&#10005;</span>
                </Win95Button>
                   
                {/* </button> */}
            </div>
        </div>
    )
}

