'use client'



interface ProjectCardProps {
    projectName: string;
    projectNumber: number;
    projectSummary: string;
    projectImage: string;
    projectTechnologies: string[];
    projectFeatures?: string[];
    projectCtaText: string;
    projectCtaLink: string;
    projectGithubLink?: string;
    projectInstagramLink?: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <div className='min-h-fit'>
        <div id="main-div" className="w-[40vw] min-h-fit max-h-[400] bg-[#808080] mx-auto box-shadow-lg shadow-lg">
            <div id="main-div-navbar" className="flex flex-row items-center justify-between bg-linear-to-r from-[#BA1AA7] to-[#4F1ABA]">
                <p className="text-white text-2xl">Project.exe</p>
                <div className="flex items-center space-x-0.5">

                    <button disabled className='cursor-not-allowed'>
                        <span className="flex items-center justify-center w-4 h-4">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg>
                        </span>
                    </button>

                </div>
            </div>
            <div className="text-3xl p-8 bg-(--color-gray-light)]">

                <p className="font-bold">{props.projectName}</p>
                <div className='flex justify-between content-center py-4 border-b-2 border-b-(--color-gray-medium)'>
                    <div>
                        {props.projectTechnologies.map((tech, index) => (
                            <span key={index} className="text-base inline-block border-b-(--color-gray-medium) text-white px-2 py-1 pt-1 rounded mr-2">
                                {tech}
                            </span>
                        ))}
                    </div>
                    {props.projectGithubLink ? 
                        <button className="flex justify-center content-center" onClick={() => window.open(`${props.projectGithubLink}`, "blank")}>
                            Github
                        </button> : <></>}

                    {props.projectInstagramLink ? 
                        <button className="flex justify-center content-center" onClick={() => window.open(`${props.projectInstagramLink}`, "blank")}>
                            Instagram
                        </button> : <></>}
                </div>
                <br />
                <div className='flex flex-col'>
                     <img src={props.projectImage}
                        alt="Meme sample generated through my web app"
                        title='Sample meme from this app'
                        className='w-full h-auto object-contain mb-4'
                    />
                    <div className="text-lg">
                        <p className='font-semibold pb-2 ' >Summary</p>
                        <p className='mb-4'>{props.projectSummary}</p>
                    </div>
                   
                   
                </div>

                 <ul className="list-disc text-base">
                    <p className='font-semibold pb-2'>Features</p>
                        {props.projectFeatures?.map((feature, index) => (
                            <li key={index} className=''>
                                {feature}
                            </li>
                        ))}
                    </ul>
                

                <button 
                    className='min-h-fit mt-8' 
                    onClick={() => window.open(`${props.projectCtaLink}`, "blank")}>
                    <p 
                        className='text-xl p-4 flex items-center justify-center gap-2'>
                        <span className="animate-point-left">&#x261B;</span>
                        <span className='px-2'>{props.projectCtaText}</span>
                        <span className="animate-point-right">&#x261A;</span>
                    </p>
                </button>
        
            </div>
        </div>
    </div>
        
  );
}

export default ProjectCard;


