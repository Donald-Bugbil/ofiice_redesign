import React from 'react';
import { useState, useEffect} from 'react';
import { Image } from 'semantic-ui-react';
import photo from '../../images/photo.jpeg';
import fin from '../../images/fin.jpeg';



const Carousel = () => {
    const [index, setIndex] = useState(0)
    const gallery = [photo, fin]

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
        <Image src={gallery[index]} fluid style={{height: '70vh'}}/>
    )
}

export default Carousel;