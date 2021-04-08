import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SeachableMovieReviewsContainer extends Component {
	constructor(){
		super()

		this.state = {
			reviews: [],
			searchTerm: ""
		}
	}


	render(){
		return  <div className="searchable-movie-reviews">
							<form className="form-inline" onSubmit={e => this.searchHandler(e)}>
							  <input  className="form-control mb-2 mr-sm-2" 
							  				placeholder="Search" 
							  				onKeyUp={e => this.inputHandler(e)}/>

							  <button className="btn btn-primary mb-2" >Submit</button>
							</form>
							<MovieReviews reviews={this.state.reviews}/>
						</div>
	}

	inputHandler = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	}

	searchHandler = (e) => {
		e.preventDefault()

		const newURL = URL + "&query={searchTerm}"
		
		fetch(URL)
			.then(response => response.json())
			.then(json => this.setState({
					reviews: json.results
					})
				)
	}
}