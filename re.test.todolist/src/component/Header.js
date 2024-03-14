import React from 'react';

const Header = () => {
    return (
        <div>
            <h3>할 일</h3>
            <h1>{new Date().toDateString}</h1>
        </div>
    )
}

export default Header;