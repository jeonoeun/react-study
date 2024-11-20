import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { company, content } from './data/data';
import Header from './pages/Header';
import Detail from './pages/Detail';

const App = () => {
    return (
        <div>
            <Header data={company} />
            {
                content.map(it => {
                    return <div key={it.id}><Link to={'/list/' + it.id} >{it.id}</Link></div>
                })
            }
            <Routes>
                <Route path='/list/:num' element={<Detail list={content} />} />
            </Routes>

        </div >
    )
}

export default App;