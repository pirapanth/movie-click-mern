import { useEffect, useState } from "react"
import Background from "./Background/Background";
import Movie from "./Movie/Movie";

const Home = () => {

  let movieData=[
    {text1:" Watch ",text2:"Your favorite"},
    {text1:"Hero's",text2:"Films....!"},
    {text1:"Celebrate &",text2:"Enjoy!"},
  ]

  const [movieCount,setmovieCount] = useState(0);
  const [playStatus,setplayStatus] = useState(false);

  useEffect(() => {
    const rotateMovies = () => {
      setmovieCount((count) => (count + 1) % 3);
      setTimeout(rotateMovies, 3000);
    };

    const rotateTimeout = setTimeout(rotateMovies, 3000); 

    return () => clearTimeout(rotateTimeout); 

  }, []);

  return(
    <div>
      <Background playStatus={playStatus} movieCount={movieCount} />
      < Movie 
        setplayStatus={setplayStatus} 
        movieData={movieData[movieCount]}
        movieCount={movieCount}
        setmovieCount={setmovieCount}
        playStatus={playStatus}
      />
      
    </div>
  )
}

export default Home;
