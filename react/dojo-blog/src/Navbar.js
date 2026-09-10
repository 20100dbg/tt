import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/demo">Demo stuff</Link>
                <Link to="/create">New post</Link>
            </div>
        </nav>
    );
}

export default Navbar;