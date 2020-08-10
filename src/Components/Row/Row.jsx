import React, {useState, useEffect} from "react"
import axios from "../../axios"
import styles from "./Row.module.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const baseURL = "https://image.tmdb.org/t/p/original"

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const handleClick = m => {
        if(trailerUrl){
            setTrailerUrl("")
        } else {
            console.log(m.name)
            movieTrailer(m?.title || m?.name || m?.original_name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"))
                })
                .catch(err => console.log(err))
        }
    }

    return <div className={styles.row}>
        <h2>{title}</h2>
        <div className={styles.rowPosters}>
            {movies.map(m => (
                <img
                    onClick={() => handleClick(m)}
                    key={m.id}
                    src={`${baseURL}${isLargeRow ? m.poster_path : m.backdrop_path }`}
                    className={isLargeRow ? `${styles.rowPosterLarge} ${styles.rowPoster}`
                        : styles.rowPoster} alt={m.name}/>
            ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
}

export default Row
