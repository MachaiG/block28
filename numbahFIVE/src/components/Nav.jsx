import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div id="navbar">
      <nav>
        <Link to="/">Home </Link>
        <Link to="/blue">Blue </Link>
        <Link to="/red">Red </Link>
        <Link to="/brown">Brown </Link>
        <Link to="/yellow">Yellow </Link>
      </nav>
    </div>
  );
}
