import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css';
import {Card} from "react-bootstrap";

class Main extends React.Component {
    render() {
        return (
                <Card className="app-main" style={{ width: '25rem' }}>
                    <div className="div-main">
                        <h1>Try not to laugh...</h1>
                        <p>Welcome to the ultimate Chuck Norris joke page, if you have a particular joke category in mind, why not click this link...</p>
                        <p className="main-link">
                            <Link to="/main/categories" className="joke-link">Click here to view joke categories</Link>
                        </p>
                        <p>Alternatively, if you would like a completely random joke generated, click this link...</p>
                        <p className="main-link">
                            <Link to="/main/random" className="joke-link">Click here for the random joke page</Link>
                        </p>
                    </div>
                </Card>
        )
    }
}

export default Main