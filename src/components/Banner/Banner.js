import React,{useEffect,useState} from "react";
import axios from '../../axios';
import {API_KEY,imageUrl} from '../../Cosnstant/Constants';
function Banner() {
    const [movie,setMovie] = useState();
    useEffect(()=> {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
            setMovie(response.data.results[Math.floor(Math.random()*19)]);
        });
    },[]);
    return(
        <div className="banner" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
            <div className="content">
                <h1 className="title">{movie ? movie.title :''} </h1>
                <div className="Banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade"></div>
        </div>
    );
}

export default Banner;