import { Link } from "react-router-dom";
import "../css/NotFound.css";
function NotFound(props) {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">
        <button className="button is-secondary">Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
