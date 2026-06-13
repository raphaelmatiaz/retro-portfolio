import Win95Button from "./Win95Button"

// Tab Header
export default function Win95WindowTabHeader() {
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