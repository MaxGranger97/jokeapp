import React from 'react';
import './Random.css';
import {Button, Card} from "react-bootstrap";

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: ""
        };
    }

    generateJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    joke: data.value
                })
            });
    };

    render() {
        return (
            <div className="app-random">
                <h1>Random Joke!</h1>
                <Button onClick={ this.generateJoke } variant="outline-primary">Generate</Button>
                <Card style={{ width: '12rem' }} className="joke-card">
                    <Card.Img src="https://www.clipartkey.com/mpngs/m/277-2778119_chuck-norris-chuck-norris-cartoon-pics-transparent.png"/>
                    <Card.Text>
                        { this.state.joke }
                    </Card.Text>
                </Card>
            </div>
        )
    }
}

export default Random