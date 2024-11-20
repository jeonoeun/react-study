import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = ({ list }) => {

    const { num } = useParams();
    const match = list.find(it => String(it.id) == num);

    const liStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        background: '#ddd',
        margin: '0 5px'
    }


    return (
        <>
            <img src={match.image_link} onError={e => e.target.src = process.env.PUBLIC_URL + '/asets/images/main_m01.jpg'} alt="" />
            <div>{match.name}</div>
            <div>{match.description.substring(0, 30)} ...</div>
            <div>{match.price}</div>
            <ul>
                {
                    match.product_colors.map(color => <li style={{ ...liStyle, background: color.hex_value }}>color</li>)
                }
            </ul>
        </>

    )
}

export default Detail;
