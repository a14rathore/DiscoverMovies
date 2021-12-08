import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
export default function navbar() {
    return (
        <div>
            <div className="navbar" >
                <h1>Discover</h1>
                <ul className="navList">

                    <li><Link to='/popular'>POPULAR</Link></li>
                    <li><Link to='/Newest'>NEWEST</Link></li>
                    <li><Link to='/trending'>TRENDING</Link></li>
                    <li><Link to='/toprated'>TOP RETAED</Link></li>
                </ul>
                <div>
                    <input placeholder="Search" disabled/>
                </div>

            </div>
        </div>
    )
}
