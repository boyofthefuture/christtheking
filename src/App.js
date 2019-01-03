import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        let dataURL = "http://site.christtheking.com.sg/wp-json/wp/v2/movies?_embed";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    movies: res
                });
            })
    }

    render() {
        let movies = [];
        if (Object.keys(this.state.movies).length === 0) { // check if movie object is empty
            return <div>Data not loaded</div>;
        } else {
            movies = this.state.movies.map((movie, index) => {
                return <div key={index}>
                    <img src={movie._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="Star Warx Rulez" />
                    <p><strong>Title:</strong> {movie.title.rendered}</p>
                    <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
                    <p><strong>Rating:</strong> {movie.acf.rating}</p>
                    <div><strong>Description:</strong><div dangerouslySetInnerHTML={ {__html: movie.acf.description} } /></div>
                </div>
            });
        }


        return (
            <div>
                <h2>Star Wars Movies</h2>
                {movies}
            </div>
        )
    }
}

export default App;
