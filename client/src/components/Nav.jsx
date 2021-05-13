// import link from react-router-dom
import { NavLink } from 'react-router-dom';
import './Nav.css'


function Nav() {
  return (
    <nav>
      <NavLink style={{ color: "#ff5722"}} to="/">
        <h1 className="full-text">Would You Rather?</h1>
        <h1 className="short-text">WYR?</h1>
        {/* Reference: https://stackoverflow.com/questions/39894291/how-to-change-text-not-font-size-according-to-screen-size-in-css/39894493 */}
      </NavLink>
      <div className="menu-items">
        <NavLink exact activeStyle={{borderBottom: '2px solid currentColor'}} to="/how">How To</NavLink>
        <span> / </span>
        <NavLink exact activeStyle={{borderBottom: '2px solid currentColor'}} to="/results">Results</NavLink>
        <span> / </span>
        <NavLink exact activeStyle={{borderBottom: '2px solid currentColor'}} to="/play">Play!</NavLink>
      </div>
    </nav>
  )
}

export default Nav;