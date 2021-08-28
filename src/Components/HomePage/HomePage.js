import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import Search from '../Search/Search';
import './HomePage.css'


const HomePage = () => {
    return (
        <div className="container">

            <div>
                <Search></Search>
            </div>
        </div>
    );
};

export default HomePage;