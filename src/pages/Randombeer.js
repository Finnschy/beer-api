import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Randombeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomBeer: []
        }
    }

    componentDidMount() {
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => response.json())
            .then(data => this.setState({ randomBeer: data }));
    }
    render() {
        return (
            <section className="randombeer">
                <img src={this.state.randomBeer.img_url} alt="" />
                <h1>{this.state.randomBeer.name}</h1>
                <h2>{this.state.randomBeer.tagline}</h2>
                <article>
                    <p>First brewed:</p>
                    <p>{this.state.randomBeer.first_brewed}</p>
                </article>
                <article>
                    <p>Attenuation Level:</p>
                    <p>{this.state.randomBeer.attenuation_level}</p>
                </article>
                <p>{this.state.randomBeer.description}</p>
                <Link to="/allbeers">Back</Link>
            </section>
        );
    }
}

export default Randombeer;