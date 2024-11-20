import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Header = ({ children }) => {
    return (
        <header className='Header'>
            <div className="inner flex">
                <h1>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
                    </Link>
                </h1>
                <nav className='gnb'>
                    {children}
                </nav>
                <Search />
            </div>
        </header>
    )
}

export default Header