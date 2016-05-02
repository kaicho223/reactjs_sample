import React from 'react'

export default class Page2 extends React.Component {
	submitNext(e) {
		e.preventDefault();

		this.context.router.push('/page3');
	}
	render() {
		return (
			<div className="contents">
				Page2
				<p>
					<button onClick={this.submitNext.bind(this)}>Next</button>
				</p>
			</div>
		);
	}
}
Page2.contextTypes = {
	router: React.PropTypes.object.isRequired
};