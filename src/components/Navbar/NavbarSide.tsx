import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavbarSide = (props: Props) => {
    const navigate = useNavigate()
    return (
        <div className={props.toggle ? 'navbarside slide-in' : 'navbarside'}
            onClick={() => props.setToggle(false)}>
            <div className='blackbar'><p>X</p></div>

            <p onClick={() => {
                navigate('/')
                props.setToggle(false)
                window.scrollTo(0, 0)
            }}>Home</p>
            <p
                onClick={() => {
                    navigate('/projects')
                    props.setToggle(false)
                    window.scrollTo(0, 0)
                }}>Projects</p>
            <p
                onClick={() => {
                    navigate('/about')
                    props.setToggle(false)
                    window.scrollTo(0, 0)
                }}>About</p>
            <p
                onClick={() => {
                    navigate('/roadmap')
                    props.setToggle(false)
                    window.scrollTo(0, 0)
                }}>Roadmap</p>
            <p
                onClick={() => {
                    navigate('/contact')
                    props.setToggle(false)
                    window.scrollTo(0, 0)
                }}>Contact me</p>
            <p className="special"
                onClick={() => {
                    navigate('/marketplace')
                    props.setToggle(false)
                    window.scrollTo(0, 0)
                }}>Want to support my move to the Great Frontier?</p>


        </div >
    )
}

export default NavbarSide