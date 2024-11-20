import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Load from './Load';

const List = ({ genre, limit }) => {
    //데이터 가져오기
    const [movie, getMovie] = useState([]);
    const [load, setLoad] = useState(true);
    const movieData = async () => {
        setLoad(true)
        const movie = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}&genre=${genre}`);
        getMovie(movie.data.data.movies);
        setLoad(false)
    }
    useEffect(() => {
        movieData()
    }, [genre])
    return (
        <section className='List sec'>
            <h2 className='inner'>{genre}</h2>
            {
                load
                    ? <Load />
                    :
                    <ul className='inner grid'>
                        {
                            movie.map(it => {
                                return (
                                    <li key={it.id} className='itm'>
                                        <Link to={`/detail/${it.id}`}>
                                            <figure>
                                                <img src={it.medium_cover_image} alt={it.title} />
                                            </figure>
                                            <div className="case">
                                                <div className='desc'>{it.title}</div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
            }
        </section>
    )
}

export default List