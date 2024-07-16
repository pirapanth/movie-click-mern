import { Link } from "react-router-dom";
import Icon from './icon.png';
import './Thanks.css';

const Player = () => {
  return(
    <div className="main thanks">
      <div className="container">
      <h1>Thank you for your message.</h1>
      <img src={Icon} alt="" className='thanks-pic'></img>
      <p><Link to='/'>Back to the home</Link></p>
      </div>
    </div>
  );
}
export default Player; 