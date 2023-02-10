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
            className='img-container'
            onMouseEnter={() => setHoverState(prev => !prev)}
            onMouseLeave={() => setHoverState(prev => !prev)}
            onClick={() => {
                props.setCurrentProduct(props.obj.id);
                props.setLightboxState(true)
            }}>
            <img src={"images/marketplace/" + props.img} alt={props.img} />
            {
                hoverState &&
                <div className='img-container-abs'>
                    <h3>{props.obj.name}</h3>
                    <h4>{'$' + props.obj.price}</h4>
                </div>}
        </div >
    )
}



const MarketPlace = () => {
    const [currentProduct, setCurrentProduct] = useState(1003)
    const [lightboxstate, setLightboxState] = useState(false)
    const [photoToShow, setPhotoToShow] = useState(0)

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

                    <h1 className='mp-header'>Surprised to see you here! Welcome to the secret market place.</h1>
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
                            setLightboxState={setLightboxState}
                            key={i.id}
                        />
                    )}


                    {lightboxstate &&
                        <div
                            className="lightbox"
                            onClick={() => { setLightboxState(false); setPhotoToShow(0) }}
                            onScroll={() => { setLightboxState(false); setPhotoToShow(0) }}
                        >
                            <div className="lightbox-middle-container"
                                onClick={(e) => { e.stopPropagation() }}
                            >
                                <div className="lightbox-left">

                                    {constantObj && <img src={"images/marketplace/" + constantObj.img[photoToShow]} alt={constantObj.img[0]} className="lightbox-img" />}
                                    {/* container for small images */}
                                    <div className="lightbox-left-abs">
                                        {constantObj?.img[0] &&
                                            <img
                                                src={"images/marketplace/" + constantObj.img[0]}
                                                alt={constantObj.img[0]} className="lightbox-abs-img"
                                                onClick={() => setPhotoToShow(0)}
                                                onMouseEnter={() => setPhotoToShow(0)}

                                            />}
                                        {constantObj?.img[1] &&
                                            <img
                                                src={"images/marketplace/" + constantObj.img[1]}
                                                alt={constantObj.img[1]} className="lightbox-abs-img"
                                                onClick={() => setPhotoToShow(1)}
                                                onMouseEnter={() => setPhotoToShow(1)}
                                            />}
                                        {constantObj?.img[2] &&
                                            <img
                                                src={"images/marketplace/" + constantObj.img[2]}
                                                alt={constantObj.img[2]} className="lightbox-abs-img"
                                                onClick={() => setPhotoToShow(2)}
                                                onMouseEnter={() => setPhotoToShow(2)}

                                            />}
                                        {constantObj?.img[3] &&
                                            <img
                                                src={"images/marketplace/" + constantObj.img[3]}
                                                alt={constantObj.img[3]} className="lightbox-abs-img"
                                                onClick={() => setPhotoToShow(3)}
                                                onMouseEnter={() => setPhotoToShow(3)}

                                            />}
                                    </div>

                                </div>
                                {constantObj &&
                                    <div className="lightbox-right">
                                        <div className="lightbox-right-inner">
                                            <h1>{constantObj.name}</h1>
                                            <h2>{"$" + constantObj.price}</h2>
                                            <p className='product-description'>{constantObj.description}</p>

                                            <p>{"Condition: " + constantObj.condition}</p>
                                            <p>{"Size: " + constantObj.length + '" x ' + constantObj.width + '" x ' + constantObj.height + '"'}</p>
                                            <p>{constantObj.brand && "Brand: " + constantObj.brand}</p>

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


