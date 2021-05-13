// import link from react-router-dom
import { Link } from 'react-router-dom';
import './Nav.css'


function Nav() {
  return (
    <nav>
      <Link style={{ color: "#ff5722"}} to="/">
        <h1 className="full-text">Would You Rather?</h1>
        <h1 className="short-text">WYR?</h1>
        {/* Reference: https://stackoverflow.com/questions/39894291/how-to-change-text-not-font-size-according-to-screen-size-in-css/39894493 */}
      </Link>
      <div className="menut items">
        <Link  style={{ color: "#00adb5", fontWeight: "bold"}} to="/how">How To</Link>
        <span style={{fontWeight: "bold"}}> / </span>
        <Link  style={{ color: "#00adb5", fontWeight: "bold"}} to="/results">Results</Link>
        <span style={{fontWeight: "bold"}}> / </span>
        <Link style={{ color: "#00adb5", fontWeight: "bold"}}  to="/play">Play!</Link>
      </div>
    </nav>
  )
}

export default Nav;