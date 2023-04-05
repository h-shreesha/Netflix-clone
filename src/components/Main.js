import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
    console.log(movies);
    return (
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movies?.title}
                />
                <div className="absolute w-full top-[20%] p-4 md:p-8">
                    <h1 className="text-left text-3xl md:text-5xl font-bold my-4">
                        {movie?.title}
                    </h1>
                    <div>
                        <button className="relative right-[42%] border bg-gray-300 text-black border-gray-300 py-2 px-5">
                            Play
                        </button>
                        <button className="relative right-[42%] border text-white  border-gray-300 py-2 px-5  ml-4">
                            Watch Later
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm text-left mt-4 mb-2">
                        Released : {movie?.release_date}
                    </p>
                    <p className="text-left w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
