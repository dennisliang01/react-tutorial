import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Bakc to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;