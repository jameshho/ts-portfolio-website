import React from 'react'
type PropsType = {
  img: string
}
const Icons = (props: PropsType) => {
  let iconName = "firebase.png"
  if (props.img === ("firebase")) {
    iconName = `${props.img}.png`
  } else if (props.img === ("express")) {
    return (
      <div className='icon-express-container'>
        <img src="/images/icons/express.png" className="icon-express" />
      </div>
    )
  } else if (props.img === ("aws")) {
    return (
        <img src="/images/icons/aws.svg" className="icon" />
    )
  } else {
    iconName = `${props.img}.svg`

  }
  return (
    <div>
      <img src={"/images/icons/" + iconName} className="icon" />
    </div>
  )
}

export default Icons