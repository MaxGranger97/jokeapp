import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Image from "react-bootstrap/Image";

class Header extends React.Component {
    render() {
        return (
                <header className="app-header">
                    <h1>The Ultimate Chuck Norris Joke Page!</h1>
                    <div className="main-link">
                        <Link to="/main">Main Page</Link>
                    </div>
                    <Image src="https://i.pinimg.com/564x/48/1d/3c/481d3c66c1402b15b1f2ddc6a1af30d7.jpg" fluid className="chuckimg" />
                </header>
        )
    }
}

export default Header