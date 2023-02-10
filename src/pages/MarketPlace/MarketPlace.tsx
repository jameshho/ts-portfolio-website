import { useState, useEffect } from 'react'
import dataMarketPlace from '../../data/dataMarketPlace'


type PropsType = {
    img: string,
    obj: any,
    setCurrentProduct: any,
    setLightboxState: any
}
const MarketPlaceCard = (props: PropsType) => {
    const [hoverState, setHoverState] = useState(false)

    return (
        <div
            className='img-containerTwo'
            onMouseEnter={() => setHoverState(prev => !prev)}
            onMouseLeave={() => setHoverState(prev => !prev)}
            onClick={() => {
                props.setCurrentProduct(props.obj.id);
                props.setLightboxState(true)
            }}>
            {/* // ); */}
            {/* public\images\marketplace\heater-2.jpg */}
            <img src={"images/marketplace/" + props.img} />
            {
                hoverState &&
                <div className='img-containerTwo-abs'>
                    <h3>{props.obj.name}</h3>
                    <h4>{'$' + props.obj.price}</h4>
                </div>}
        </div >
    )
}



const MarketPlace = () => {
    const [currentProduct, setCurrentProduct] = useState(1003)
    const [lightboxstate, setLightboxState] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lightboxstate]);

    const handleScroll = () => {
        setLightboxState(false);
    };


    const constantObj = dataMarketPlace.find(i => i.id === currentProduct)
    return (
        <div>
            <div className="mp-header-container">
                <div></div>
                <div className=''>

                    <h1 className='mp-header'>Surprised to see you here! You found the link to the secret market place.</h1>
                    <p className='mp-header'>You're in for a treat! Get ready to score some fantastic deals and support a friend's quest to the land of endless sunshine - welcome to Jimmy's Market Place!</p>
                </div>

            </div>
            <div className='marketplace'>
                <div></div>

                <div className='marketplace-container'>
                    {dataMarketPlace.map(i =>

                        <MarketPlaceCard
                            img={i.img[0]}
                            obj={i}
                            setCurrentProduct={setCurrentProduct}
                            setLightboxState={setLightboxState} />
                    )}


                    {lightboxstate &&
                        <div className="lightbox" onClick={() => {
                            setLightboxState(false)
                        }}
                            onScroll={() => { setLightboxState(false) }}
                        >
                            <div className="lightbox-middle-container" onClick={(e) => { e.stopPropagation() }}>
                                <div className="lightbox-left">


                                    {constantObj && <img src={"images/marketplace/" + constantObj.img[0]} className="lightbox-img" />}

                                </div>
                                {constantObj &&
                                    <div className="lightbox-right">
                                        <div className="lightbox-right-inner">
                                            <h1>{constantObj.name}</h1>
                                            <h2>{"$" + constantObj.price}</h2>
                                            <p>{constantObj.description}</p>
                                            <ul>

                                                <li>{constantObj.length + " x " + constantObj.width + " x " + constantObj.height}</li>
                                                <li>{constantObj.condition}</li>
                                                <li>{constantObj.brand && constantObj.brand}</li>
                                            </ul>
                                        </div>

                                    </div>}

                            </div>
                        </div>}


                </div>
            </div>
        </div>
    )
}

export default MarketPlace


