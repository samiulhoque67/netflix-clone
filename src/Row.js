import React,{useState,useEffect} from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url="https://image.tmdb.org/t/p/original/";



function Row({title,fetchUrl,isLarge}) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(()=>{
      async function fetchData (){
       const request=await axios.get(fetchUrl);
       console.log(request.data.results);
       setMovies(request.data.results);
       return request;
      }
      fetchData();
    },[fetchUrl]);
const opts={
    height:"390",
    width:"100%",
    playerVars:{
        //https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    }
}
const handleclick=(movie)=>{
    console.log(movie?.title);
    if(trailerUrl){
        setTrailerUrl("");
    }
    else{
        movieTrailer(movie?.title||"")
        .then ((url) =>{
            const urlParams=new URLSearchParams(new URL(url).search);
            console.log(urlParams);
            setTrailerUrl(urlParams.get('v'));
            
        })
        .catch((err)=>console.log(err))
    }
}
    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(mov => (
                   
                    <img 
                    key={mov.id}
                    onClick={()=> handleclick(mov)}
                    className={`row__poster ${isLarge && "row__posterLarge"}`}
                    src={`${base_url}${isLarge? mov.poster_path:mov.backdrop_path}`} alt={mov.name}
                    />
                ))}
            </div>
{trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
             {/* container */}
        </div>
    )
}

export default Row;
