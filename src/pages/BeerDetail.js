import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beerDetail: []
        }
    }
    componentDidMount() {
        let id = window.location.pathname.slice(10)
        console.log(id);
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ beerDetail: data }));
    }
    render() {


        return (
            <section className="beerDetail">
                <img src={this.state.beerDetail.img_url} alt="" />
                <h1>{this.state.beerDetail.name}</h1>
                <h2>{this.state.beerDetail.tagline}</h2>
                <article>
                    <p>First brewed:</p>
                    <p>{this.state.beerDetail.first_brewed}</p>
                </article>
                <article>
                    <p>Attenuation Level:</p>
                    <p>{this.state.beerDetail.attenuation_level}</p>
                </article>
                <p>{this.state.beerDetail.description}</p>
                <Link to="/allbeers">Back</Link>
            </section>
        );
    }
}


export default BeerDetail;