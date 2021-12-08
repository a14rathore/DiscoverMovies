import React, { useEffect, useState } from 'react';
import Card from './card';

let api="";
export default function Main(props) {
   
    const [film, setFilms] = useState([]);
    useEffect(() => {
        api = `https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort_by=${props.category}.desc&include_adult=false&include_video=false&page=2`;
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setFilms(data.results);
                console.log(data.results);
            });
    },[props.category]);

    return (
        <div style={{
            marginTop: "80px", padding: "15px", border: "1px solid blue", width: "100%", display: "flex", flexDirection: 'row',
            flexWrap: "wrap", justifyContent: "space-evenly"
        }}>
            <Card data={film} category={props.category}></Card>
        </div>
    )
}
