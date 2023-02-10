import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div className="projects">
      <div className='projects-header'>
        <div></div>
        <div>

          <h2>Projects</h2>
          <p>Check out some of my past web projects.</p>
        </div>
      </div>
      <ProjectsCard num={0} />
      <ProjectsCard num={1} />
      <ProjectsCard num={2} />


    </div>
  )
}

export default Projects