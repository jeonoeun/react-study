import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { main_content } from '../data/common'
import '../css/MainSlide.scss'

const MainSlide = () => {
    const MainSlide = useRef(null);

    return (
        <div className='MainSlide'>
            <Slider
                arrows={false}
                autoplay={true}
                pauseOnHover={false}
                ref={MainSlide}
                dots={true}
            >
                {
                    main_content.slice(0, 3).map((it, idx) => {
                        return (
                            <figure className={`itm itm0${idx + 1}`}>
                                <div className="inner">
                                    <strong>  {it.strong}</strong>
                                    <p>{it.content}</p>
                                    <div className='des'>{it.des}</div>
                                    <Link to={it.link}>more</Link>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
        </div>

    )
}

export default MainSlide