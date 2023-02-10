import { useNavigate } from 'react-router-dom'
import Icons from './Projects/Icons'

const Roadmap = () => {
    const iconsArr = ["html", "css", "javascript", "aws", "express", "firebase", "git", "mongodb", "postgresql", "nodejs", "react", "python", "sass", "typescript"]
    const navigate = useNavigate()
    return (
        <div className='roadmap' >
            <h1>My Tech Stack</h1>
            <div className="roadmap-icon-bar">
                {iconsArr.map((i,index) => <Icons img={i} key={index}/>)}


            </div>
            <div className='roadmap-container'>

                <h1>Immediate Focus</h1>
                <ul>
                    <li>NEXT.js and SEO</li>
                    <li className='bold'>Your next Billion-Dollar Startup?</li>
                    <li>Chart.js</li>
                    <li>React-table</li>
                </ul>
            <h1>Longer Term Goals</h1>
                <ul>
                    <li>FAST API</li>
                    <li>Docker Basics</li>
                    <li>Redux</li>
                </ul>
            </div>
            <p className='contact-me-button' onClick={() => {navigate('/contact');window.scrollTo(0, 0);}}>Let me know what you think about my road map!</p>

        </div>
    )
}

export default Roadmap