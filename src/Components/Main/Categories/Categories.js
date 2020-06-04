import React from 'react';
import {Link} from "react-router-dom";
import './Cateories.css';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };

        fetch('https://api.chucknorris.io/jokes/categories')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    categories: data
                })
            })
    }

    render() {
        return (
            <div className="app-categories">
                <h1>Categories!</h1>
                {this.state.categories.map((category) =>
                    <div className="cat-links">
                        <Link to={"/main/categories/"+category}>{category}</Link><br/>
                    </div>
                )}
            </div>
        )
    }
}

export default Categories