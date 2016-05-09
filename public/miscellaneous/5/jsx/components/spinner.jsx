import React, { Component } from 'react'
import Loader from 'react-loader'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Spinner extends Component {

	static get propTypes() {
		return { isLoading: React.PropTypes.bool };
	}

	constructor(props){
		super(props);
	}

	get options() {
		return (
			{
				lines: 13,
				length: 20,
				width: 10,
				radius: 30,
				corners: 1,
				rotate: 0,
				direction: 1,
				color: '#000000',
				speed: 1,
				trail: 60
			}
		);
	}

	get styleForOverlay() {
		return (
			{
				background: 'rgba(0, 0, 0, 0.0)',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 10,
				display: 'block'
			}
		);
	}

	render() {
		return (
			<ReactCSSTransitionGroup transitionName="spinner" transitionLeave={false} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
			{this.props.isLoading ?
					<div style={this.styleForOverlay}>
						<Loader key='Loader' options={this.options}></Loader>
					</div>
			: null}
			</ReactCSSTransitionGroup>
		);
	}

}
