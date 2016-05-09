import React, { Component } from 'react'

export default class Page2 extends Component {
	submitNext(e) {
		e.preventDefault();

		this.context.router.push('/page3');
	}
	render() {
		return (
			<div className="Image">
				<h1>Page 2</h1>
				<p>
					Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
Page2.contextTypes = {
	router: React.PropTypes.object.isRequired
};