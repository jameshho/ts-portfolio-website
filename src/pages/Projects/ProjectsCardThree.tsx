import React from 'react'
import Icons from './Icons'
import { BiLink } from 'react-icons/bi';


const ProjectsCardThree = () => {

    const title = "Wall Street Journey"
    const content = "   <p>Introducing <i>Wall Street Journey</i>, my replica of the <i>Wall Street Journal</i> website. This clean, responsive platform demonstrates my expertise in <span>React</span>, <span>Sass</span>, and <span>API management</span>. With full <span>CRUD</span> functionality and user authorization, authorized users can easily upload, edit, and delete articles. The Sass styling perfectly replicates the aesthetic of the official Wall Street Journal, while ensuring <span>clean and scalable code</span>. The node backend efficiently handles API calls to <span>Firebase</span>, ensuring secure storage of images, article information, and user data.</p>"
    const iconsArr = ['html', 'sass', 'typescript', 'nodejs', 'express', 'react', 'firebase']
    const photoUrl = ['/images/wsj/wsj-2.png', '/images/wsj/wsj-4.png', '/images/wsj/wsj-3.png', '/images/wsj/wsj-1.png']

    return (
        <div className='projectscard'>
            <div className="projectscard-left-container">

                <h2 className='project-title'>{title}</h2>
                {content}
                <div className='projectscard-left-icons'>
                    {iconsArr.map(i => <Icons img={i} />)}

                </div>
                <p className='viewproject'>View Project<BiLink className='button-link' size={"1.1rem"} /></p>
            </div>
            <div className="projectscard-right-container">
                <div className="projectscard-right-canvas-second">

                    <img className="canvas-fourth" src={photoUrl[0]} />
                    <img className="canvas-third" src={photoUrl[1]} />
                    <img className="canvas-second" src={photoUrl[2]} />
                    {photoUrl[3] && <img className="canvas-first" src={photoUrl[3]} />}
                </div>
            </div>
        </div >

    )
}

export default ProjectsCardThree