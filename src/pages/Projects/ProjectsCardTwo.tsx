import React from 'react'
import Icons from './Icons'
import { BiLink } from 'react-icons/bi';

const ProjectsCardTwo = () => {

    const title = "Pearson Specter Litt"
    const content = "<p>Pearson Specter Litt is a demo law firm website inspired by the TV show Suits. It offers a smooth experience for clients seeking representation. It also showcases my skills in creating professional and visually appealing websites. With <span>responsive design</span> and <span>easy navigation</span>, clients can quickly learn about the firm and its services. The site also allows direct communication with desired lawyers via a simple form, powered by <span>AWS SES and Lambda</span>. Pearson Specter Litt exemplifies my ability to blend <span>functionality</span> and <span>aesthetics</span> in web development.</p>"
    const iconsArr = ["figma", "html", "sass", "typescript", "react", "aws"]
    const photoUrl = ['/images/pearsonspecterlitt/psl-2.png', '/images/pearsonspecterlitt/psl-3.png', '/images/pearsonspecterlitt/psl-1.png']
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
            <div className="projectscard-right-container ">
                <div className="projectscard-right-canvas-first">
                    <img className="canvas-first" src={photoUrl[0]} />
                    <img className="canvas-third" src={photoUrl[1]} />
                    <img className="canvas-second" src={photoUrl[2]} />
                    {photoUrl[3] && <img className="canvas-first" src={photoUrl[3]} />}
                </div>
            </div>
        </div >

    )
}

export default ProjectsCardTwo