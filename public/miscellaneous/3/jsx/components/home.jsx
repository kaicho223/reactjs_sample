import React from 'react'

export default class Home extends React.Component {
	submitNext(e) {
		e.preventDefault();

		this.context.router.push('/page1');
	}
	render() {
		return (
			<div>
				Home
				<p>
					<button onClick={this.submitNext.bind(this)}>Next</button>
				</p>
			</div>
		);
	}
}
Home.contextTypes = {
	router: React.PropTypes.object.isRequired
};
