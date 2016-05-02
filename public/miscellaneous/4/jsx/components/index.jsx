import React from 'react'
import RouteCSSTransitionGroup from "./cssTransitionGroup.jsx"

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<header>
					this is header
				</header>
				<main className="container">
					<RouteCSSTransitionGroup transitionName="example" component="div" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
						{this.props.children}
					</RouteCSSTransitionGroup>
				</main>
				<footer>
					this is footer
				</footer>
			</div>
		);
	}
}