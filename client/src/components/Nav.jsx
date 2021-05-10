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
      <div className="menut items">
        <Link to="/how">How To</Link>
        <span> / </span>
        <Link to="/results">Results</Link>
        <span> / </span>
        <Link to="/play">Play!</Link>
      </div>
    </nav>
  )
}

export default Nav;