import React, {useEffect, useState} from "react"
import axios from "../../axios"
import styles from "./Banner.module.css"
import requests from "../../requests";

const Banner = () => {
    const [movie, setMovie] = useState({})
    const baseURL = "https://image.tmdb.org/t/p/original"


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginal)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                    ]
            )
        }
         fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    console.log(movie)

    return (
        <header className={styles.banner}
        style={{
            backgroundImage: `url(${baseURL}${movie?.backdrop_path || movie.poster_path})`,
            backgroundPosition: "top center",
            backgroundSize: "cover"
        }}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className={styles.btns}>
                    <button className={styles.btn}>Play</button>
                    <button className={styles.btn}>My List</button>
                </div>
                <h3 className={styles.description}>
                    {truncate(movie.overview, 150)}
                </h3>
            </div>
            <div className={styles.bannerFadeBottom}></div>
        </header>
    )
}

export default Banner
