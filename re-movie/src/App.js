import React from 'react'
import List from './List';
import './common.scss'
import { Link, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import Glist from './Glist';
import All from './All';
import Detail from './Detail';

const App = () => {
    const genreList = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Romance",
        "Thriller",
        "Western"
    ]
    return (
        <div>

            <Header>
                <ul className='flex'>
                    {
                        genreList.map(it => {
                            return (
                                <li>
                                    <Link to={it}>{it}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </Header>
            <Routes>
                <Route path="/" element={<Main limit={50} />}>
                    <Route path="/detail/:id" element={<Detail />} />
                </Route>
                {
                    genreList.map(it => {
                        return (
                            <Route path={it} element={<Glist genre={it} limit={20} />}>
                                <Route path={`/${it}/:id`} element={<Detail limit={50} />} />
                            </Route>
                        )
                    })
                }

            </Routes>


            {/* <All /> */}


        </div>
    )
}

export default App