import './Movie.css'
import fav from '../assets/fav.png'
import play from '../assets/play.png'
import pause from '../assets/pause.png'

const Movie = ({movieData,setmovieCount,movieCount,setplayStatus,playStatus}) => {
    return(
      <div className='movie'>
        <div className='movie-text'>
          <p className='t1'>{movieData.text1}</p>
          <p className='t2'>{movieData.text2}</p>
        </div>

        <div className='movie-watch'>
          <p>Watch Your Favorite</p>
          <img src={fav} alt="" />
        </div>

        <div className='movie-dot-play'>
          <ul className='movie-dots'>
            <li onClick={()=>setmovieCount(0)} className={movieCount===0?'movie-dot green':'movie-dot'}></li>
            <li onClick={()=>setmovieCount(1)} className={movieCount===1?'movie-dot green':'movie-dot'}></li>
            <li onClick={()=>setmovieCount(2)} className={movieCount===2?'movie-dot green':'movie-dot'}></li>
          </ul>

        

        <div className='movie-play'>
          <img onClick={()=>setplayStatus(!playStatus)} src={playStatus?pause:play} alt="" />
          <p>See the latest trailer</p>

        </div>
        </div>
        
      </div>
    )
  }
  
  export default Movie
  