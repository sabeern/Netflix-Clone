import React,{useEffect,useState} from "react";
import axios from '../../axios';
import {imageUrl,API_KEY} from '../../Cosnstant/Constants';
import Youtube from 'react-youtube';

function RowPost(props) {
    let [post,setPost] = useState([]);
    let [videoUrl,setVideoUrl] = useState('');
    useEffect(()=> {
        axios.get(props.url).then((response)=> {
            setPost(response.data.results);
        }).catch((err)=> {
            alert('Network error');
        });
    },[props.url]);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    function getVideoId(Id) {
        console.log(Id);
        axios.get(`/movie/${Id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=> {
            if(response.data.results.length !== 0) {
                setVideoUrl(response.data.results[0].key);
            }
        });
    }
    return(
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    post.map((movie,index)=> {
                        return(
                            <img onClick={()=> {
                                getVideoId(movie.id)
                            }} className={props.isSmall ? "smallPoster" : "poster"} key={index} src={imageUrl+movie.backdrop_path} alt="Posters"/>
                        );
                    })
                }
            </div>
            {videoUrl && <Youtube videoId={videoUrl} opts={opts}/> }
        </div>
    );
}

export default RowPost;