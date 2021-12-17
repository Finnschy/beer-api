import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Allbeers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allBeers: []
        }
    }

    componentDidMount() {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => response.json())
            .then(data => this.setState({ allBeers: data }));
    }
    render() {
        return (
            <section className="allbeers">
                <Link to="/">Back</Link>
                {this.state.allBeers.map(beer => (
                    <section key={beer._id}>
                        <img src={beer.image_url} alt={beer.name} />
                        <h1>{beer.name}</h1>
                        <h2>{beer.tagline}</h2>
                        <p>{beer.contributed_by.slice(0, 9)}</p>
                        <Link to={`/allbeers/${beer._id}`}>Details</Link>
                    </section>
                    ))}
            </section>
        );
    }
}

export default Allbeers;