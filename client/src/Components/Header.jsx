import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="Images/logo.png" alt="" />
                <h2>ModHUB</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Trending</a></li>
                    <li><a href="/">Games</a></li>
                    <li><a href="/">Premium</a></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" />
                <i className="fas fa-search"></i>
            </div>
        </header>
    )
}

export default Header