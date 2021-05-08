// import link from react-router-dom
import { Link } from 'react-router-dom';


function Nav() {
  return (
    // link navigation to Home, Howto, Results, and Play
    // align Home on left
    // align How,Results, Play right
    <nav>
      <Link to="/">
        <h1>Would You Rather?</h1>        
      </Link>
      <Link to="/how">How To</Link>
      <Link to="/results">Results</Link>
      <Link to="/play">Play!</Link>
    </nav>
  )
}

export default Nav;