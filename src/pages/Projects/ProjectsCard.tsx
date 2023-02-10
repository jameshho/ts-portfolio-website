import Icons from './Icons'
import { BiLink } from 'react-icons/bi';
import dataProject from '../../data/dataProject';

type PropsType = {
    num: number
}
const ProjectsCard = (props: PropsType) => {
    const obj = dataProject[props.num]
    return (
        <div className='projectscard'>
            <div className="projectscard-left-container">

                <h2 className='project-title'>{obj.title}</h2>

                <div dangerouslySetInnerHTML={{ __html: obj.content }} />
                <div className='projectscard-left-icons'>

                    {obj.iconsArr.map((i,index) => <Icons img={i} key={index} />)}

                </div>
                <p className='viewproject'>View Project<BiLink className='button-link' size={"1.1rem"} /></p>


            </div>
            <div className="projectscard-right-container ">
                <div className="projectscard-right-canvas-first">
                    {obj.photoUrl[3] ?
                        <div>

                            <img className="canvas-four-first" alt="first page of the demo website" src={obj.photoUrl[0]} />
                            <img className="canvas-four-second" alt="second page of the demo website" src={obj.photoUrl[1]} />
                            <img className="canvas-four-third" alt="third page of the demo website" src={obj.photoUrl[2]} />
                            <img className="canvas-four-fourth" alt="fourth page of the demo website" src={obj.photoUrl[3]} />

                        </div> :
                        <div>

                            <img className="canvas-first" alt="first page of the demo website" src={obj.photoUrl[0]} />
                            <img className="canvas-second" alt="second page of the demo website" src={obj.photoUrl[1]} />
                            <img className="canvas-third" alt="thrid page of the demo website" src={obj.photoUrl[2]} />
                        </div>}
                </div>
            </div>
        </div >

    )
}

export default ProjectsCard