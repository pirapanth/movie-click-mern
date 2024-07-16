import './Watch.css'
import Movie1 from './assets/movie1.jpg';
import Movie2 from './assets/movie2.jpg';
import Movie3 from './assets/movie3.jpg';
import Movie4 from './assets/movie4.jpg';
import Movie5 from './assets/movie5.jpg';
import Movie6 from './assets/movie6.jpg';
import { Link } from "react-router-dom";
const movies = [
  {
    id: 1,
    title: 'LEO',
    hero:'Vijay',
    director: 'Lokesh Kanagaraj',
    music:'Anirudh',
    imageUrl: Movie1,
    time:'2:45:02',
    btn:'Watch',
  },
  {
    id: 2,
    title: 'JAILER',
    hero:'Rajini',
    director: 'Nelsan',
    music:'Anirudh',
    imageUrl: Movie2,
    time:'2:34:42',
    btn:'Watch',
  },
  {
    id: 3,
    title: 'JAWAN',
    hero:'Sharkh khan',
    director: 'Atlee',
    music:'Anirudh',
    imageUrl: Movie3,
    time:'2:49:52',
    btn:'Watch',
  },
  {
    id: 4,
    title: 'MILLER',
    hero:'Dhanush',
    director: 'Arun Matheswaran',
    music:'G.V Pirakash Kumar',
    imageUrl: Movie4,
    time:'2:31:18',
    btn:'Watch',
  },
  {
    id: 5,
    title: 'AYALAN',
    hero:'Sivakarthikayan',
    director: 'Ravikumar',
    music:'A.R Rahuman',
    imageUrl: Movie5,
    time:'2:22:39',
    btn:'Watch',
  },
  {
    id: 6,
    title: 'JIGARTHANDA',
    hero:'Rahava Larance',
    director: 'Supurai',
    music:'Santhosh Narayanan',
    imageUrl: Movie6,
    time:'2:16:33',
    btn:'Watch',
  },
  
];

const Watch1 = () => {
  return(
    <div className='movie-head'>
        <h1>Latest Movies</h1>
        <div className="next-button">
          <button><Link to='/watch/2'>Next</Link></button>
        </div>
        <br />    
    <div className="movie-section">
      <div className="movie-cards">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <br />
              <p><p1>Hero :</p1> {movie.hero}</p>
              <p><p1>Director :</p1> {movie.director}</p>
              <p><p1>Music :</p1> {movie.music}</p>
              <p><p1>Duration :</p1> {movie.time}</p>
            </div>
            <div className="watch-button">
                <button><Link to='/watch/player'>{movie.btn}</Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <br />
    </div>
  );
}

export default Watch1;