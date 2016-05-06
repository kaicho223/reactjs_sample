import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Index extends React.Component {
	render() {
		return (
			<div>
				{ /*
				<header>
					this is header
				</header>
				*/ }
				<main className="contents">
				<ReactCSSTransitionGroup component="div" transitionName="swap" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					{this.props.children}
				</ReactCSSTransitionGroup>
				</main>
				{ /*
				<footer>
					this is footer
				</footer>
				*/ }
			</div>
		);
	}
}