import React from 'react';
import { useState, useEffect} from 'react';
import { Image } from 'semantic-ui-react';
import virtual from '../../images/virtual.jpg';
import {TransitionablePortal, Segment, Button, Header, Icon} from 'semantic-ui-react';


const Carousel = () => {
    const [index, setIndex] = useState(0);
    const [isShown, setIsShown] = useState(false)
    console.log(isShown)

    const onMouseenterhandler = (e) =>{
        console.log(e)
        setIsShown(prev => {return !prev})
    }

    const onclose = () =>{
        setIsShown( false )
    }

    const gallery = [virtual]

    const nextSlide = () => {
        setIndex(
            prevIndex => {
                if (prevIndex === gallery.length - 1) {
                    return 0
                }
                else {
                    return prevIndex + 1
                }

            }
        )
    }

    
    useEffect(() => {
        const autoPlay = setInterval(nextSlide, 5000);
        
        return () => clearInterval(autoPlay);
    }, [nextSlide]);

    return (
        <>
            <Image src={gallery[index]} fluid style={{height: '70vh'}} onMouseEnter={onMouseenterhandler}/>
            
        </>
    )
}

export default Carousel;