import './Player.css';
import Loading from './loading.gif';

const Player = () => {
  return(
    <div className="main">
      <div className="container">
      <h1>Watch the Movie here.............!</h1>
      <img src={Loading} alt="" className='load-pic'></img>
      <p>wait few time, sever busy.</p>
      </div>
    </div>
  );
}
export default Player; 