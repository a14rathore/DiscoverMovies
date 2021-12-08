import React from 'react';
import Navbar from './Navbar.js';
import Main from './Main.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
export default function section1() {
    return (
        <div className="section1" style={{ border: "1px solid black", width: "75%", background: "rgb(30, 41, 59)" }}>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/popular" element={<Main category={"popularity"} />} />
                    <Route exact path="/Newest" element={<Main category={"newest"} />} />
                    <Route exact path="/trending" element={<Main category={"trending"}/>} />
                    <Route exact path="/toprated" element={<Main category={"toprated"} />} />

                </Routes>
            </Router>
        </div>
    )
}
