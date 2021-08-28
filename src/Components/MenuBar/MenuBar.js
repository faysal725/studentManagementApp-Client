import './MenuBar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div className="container pb-5">
    
            <ul className="nav justify-content-center bg-warning pb-3 pt-3">
                <li className="nav-item">
                    <a className="nav-link active" href="/addStudents">Add Students</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home">Home Page</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sort Students</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                </li>
            </ul>

        </div>
    );
};

export default MenuBar;