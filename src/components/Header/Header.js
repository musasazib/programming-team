import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div>
                <nav>
                    <a href="/works">How We Works</a>
                    <a href="/programmer">Our Programmers</a>
                    <a href="/about">About Us</a>
                </nav>
            </div>
            <h2>The Best Programming Team In The World</h2>
            <h3>The mission of this team is to create the most expensive website in the world with the biggest programmers in the world.</h3>
            <h2>Budget : 100Million USD</h2>
        </div>
    );
};

export default Header;