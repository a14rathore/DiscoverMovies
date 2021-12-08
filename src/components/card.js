import React from 'react';
import '../App.css';

export default function card(props) {
    return (

        props.data.map((ele, index) => {
            return (

                <div key={index} className="carddiv" style={{ border: "1px solid black", maxWidth: "210px", height: "350px", margin: "5px" }}>
                    <img src={ele.backdrop_path?`https://image.tmdb.org/t/p/original${ele.backdrop_path}`:"https://image.tmdb.org/t/p/original/qvHFh4DMxgcA7JVi1Pau4qa3T1j.jpg"} alt="img" style={{ height: "200px", width: "200px", border: "1px solid black" }} />
                    <hr />
                    <h6 style={{ textAlign: "center", height: "20px", overflow: "clip" }}>{ele.title}</h6>
                    <hr />
                    <div style={{ width: "100%",height:"100px",lineHeight:"8px" }}>
                        <p>Rating</p>
                        <p>{ele.vote_average}</p>
                        <p>{ele.release_date}</p>
                    </div>
                </div>

            )
        })


    )
}
