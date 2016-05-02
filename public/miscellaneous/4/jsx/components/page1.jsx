import React from 'react'

export default class Page1 extends React.Component {
	submitNext(e) {
		e.preventDefault();

		this.context.router.push('/page2');
	}
	render() {
		return (
			<div className="contents">
				Page1
				<p>
					<button onClick={this.submitNext.bind(this)}>Next</button>
				</p>
			</div>
		);
	}
}
Page1.contextTypes = {
	router: React.PropTypes.object.isRequired
};