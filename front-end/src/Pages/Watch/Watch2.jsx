import './Watch.css'
import Movie7 from './assets/movie7.jpg';
import Movie8 from './assets/movie8.jpg';
import Movie9 from './assets/movie9.jpg';
import Movie10 from './assets/movie10.jpg';
import Movie11 from './assets/movie11.jpg';
import Movie12 from './assets/movie12.jpg';
import { Link } from "react-router-dom";
const movies = [
  {
    id: 1,
    title: 'LOVER',
    hero:'Manikandan',
    director: 'Prabhuram Vyas',
    music:'Sean Roldan',
    imageUrl: Movie7,
    time:'2:33:12',
    btn:'Watch',
  },
  {
    id: 2,
    title: 'JEO',
    hero:'Rio Raj',
    director: 'Hariharan Ram S',
    music:'Sean Roldan',
    imageUrl: Movie8,
    time:'2:17:28',
    btn:'Watch',
  },
  {
    id: 3,
    title: 'PARKING',
    hero:'Harish Kalyan',
    director: 'Ramkumar Balakrishnan',
    music:'Sean Roldan',
    imageUrl: Movie9,
    time:'2:34:50',
    btn:'Watch',
  },
  {
    id: 4,
    title: 'SIDDHA',
    hero:'Siddarth',
    director: 'S U Arun Kumar',
    music:'Santhosh Narayanan',
    imageUrl: Movie10,
    time:'2:39:08',
    btn:'Watch',
  },
  {
    id: 5,
    title: 'IRUGA PATTRU',
    hero:'Vikram Pirabu',
    director: 'Yuvaraj Dhayalan',
    music:'Justin Prabhakaran',
    imageUrl: Movie11,
    time:'2:17:40',
    btn:'Watch',
  },
  {
    id: 6,
    title: 'ADIYEE',
    hero:'G.V Pirakash Kumar',
    director: 'Vignesh Karthik',
    music:'Anirudh',
    imageUrl: Movie12,
    time:'2:29:01',
    btn:'Watch',
  },
  
];

const Watch2 = () => {

  

  return(
    <div className='movie-head'>
        <h1>Latest Movies</h1>
        <div className="next-button">
          <button><Link to='/watch/1'>Back</Link></button>
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

export default Watch2;