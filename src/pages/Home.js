import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <nav>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/allbeers">All beers</Link>
                </li>
                <li>
                    <Link to="/randombeer">Random beer</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Home;