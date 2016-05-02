import React from 'react'

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<header>
					this is header
				</header>
				<main>
					{this.props.children}
				</main>
				<footer>
					this is footer
				</footer>
			</div>
		);
	}
}