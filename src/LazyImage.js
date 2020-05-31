import React , { useState, useEffect } from 'react'

import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';

import 'aos/dist/aos.css';

const placeHolder ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const LazyImage = ({src, alt, index}) => {

    const [imgSrc, setImgSrc] = useState(placeHolder)
    const [imgRef, setImgRef] = useState()

    const onLoad = event => event.target.classList.add('loaded')
     
    AOS.init({
    duration:1200
    });
    AOS.refresh()
    useEffect(() => {
    // this.aos = AOS;
        AOS.init({
        duration:1200
        });
        AOS.refresh()
    
    }, [])

    useEffect(() => {
        let observer
        let didCancel = false

        if(imgRef && imgSrc !== src) {
            if(IntersectionObserver)  {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            if(!didCancel && (entry.intersectionRatio > 0 ||
                                entry.isIntersecting))
                                {
                                    setImgSrc(src)
                                    observer.unobserve(imgRef)
                                }
                        })
                    },
                    {
                        threshold:0.01, 
                        rootMargin:"75%"
                    }
                )
                observer.observe(imgRef)
            } else {

                // Fallback for old browser
                setImgSrc(src)
            }
        }

        return () => {
            didCancel = true
            if(observer && observer.unobserve) { 
                observer.unobserve(imgRef)
            }
        }

    }, [src,imgRef, imgSrc])


    return (

       <figure  className="item gallery__img" data-aos='fade-up'>
            <img 
            ref={setImgRef}
            src={imgSrc} 
            onLoad={onLoad}
            alt={alt}></img>
            <figcaption>{index} - {alt}</figcaption>
        </figure>
    )
  }

  export default Watch(LazyImage)