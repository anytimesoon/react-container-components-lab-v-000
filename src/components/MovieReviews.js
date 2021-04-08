// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => (<ul className="review-list">
																	{props.reviews.map((review, i) => {
																					return <li className="review" key={i}>{review.display_title}</li>
																			}
																	)}
																</ul>)

export default MovieReviews