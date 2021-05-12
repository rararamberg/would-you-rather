// import link from react-router-dom
import { Link } from 'react-router-dom';


function Nav() {
  return (
    // link navigation to Home, Howto, Results, and Play
    // align Home on left
    // align How,Results, Play right
    <nav>
      <Link style={{ color: "#ff5722", textDecoration: "none"}} to="/">
        <h1 className="full-text">Would You Rather?</h1>
        <h1 className="short-text">WYR?</h1>
        {/* Reference: https://stackoverflow.com/questions/39894291/how-to-change-text-not-font-size-according-to-screen-size-in-css/39894493 */}
      </Link>
      <div className="menut items">
        <Link  style={{ color: "#00adb5", textDecoration: "none", fontWeight: "bold"}} to="/how">How To</Link>
        <span style={{ color: "#303841", fontWeight: "bold"}}> / </span>
        <Link  style={{ color: "#00adb5", textDecoration: "none", fontWeight: "bold"}} to="/results">Results</Link>
        <span style={{ color: "#303841", fontWeight: "bold"}}> / </span>
        <Link style={{ color: "#00adb5", textDecoration: "none", fontWeight: "bold"}}  to="/play">Play!</Link>
      </div>
    </nav>
  )
}

export default Nav;