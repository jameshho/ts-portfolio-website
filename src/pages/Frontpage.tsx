import { useNavigate } from 'react-router-dom'

const Frontpage = () => {
  const navigate = useNavigate()
  return (
    <div className='frontpage-container'>
      <div className="frontpage-container-left">
        <p>Welcome, my name is </p>
        <h2>James Ho</h2>
        <h3>Web developer</h3>
        <h4>Enhancing online experience,</h4>
        <h4>one pixel at a time!</h4>
        <button onClick={()=>navigate('/projects')}>See my projects {'>'}</button>
      </div>
      <div className="frontpage-container-right">
        <img src='/images/james-headshot-1.jpg' />
      </div>
    </div>
  )
}

export default Frontpage