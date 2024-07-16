import './Background.css'
import V1 from '../assets/V1.mp4'
import leo from '../assets/leo.jpg'
import jailer from '../assets/jailer.jpg'
import jawan from '../assets/jawan.jpg'

const Background = ({playStatus,movieCount}) => {
    
    if(playStatus){
        return(
            <video className='background fade-in' autoPlay loop >
                <source src={V1}   type='video/mp4'/>
            </video>
            
        )
    }
    else if(movieCount===0){
        return <img src={leo}  className='background fade-in' alt="" />
    }
    else if(movieCount===1){
        return <img src={jailer}  className='background fade-in' alt="" />
    }
    else if (movieCount===2){
        return <img src={jawan}  className='background fade-in' alt="" />
    }

    

  }
  
  export default Background
  