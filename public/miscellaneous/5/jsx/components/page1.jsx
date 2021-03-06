import React, { Component } from 'react'

export default class Page1 extends Component {
	submitNext(e) {
		e.preventDefault();
		
		this.context.router.push('/page2');

	}
	render() {
		return (
			<div className="Image">
				<h1>Page 1</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					<button onClick={this.submitNext.bind(this)}>Next</button>
				</p>
			</div>
		)
	}
}
Page1.contextTypes = {
	router: React.PropTypes.object.isRequired
};