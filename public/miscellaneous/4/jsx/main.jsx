import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { hashHistory, Router, Route, Link, IndexRoute } from 'react-router'
import Loader from 'react-loader'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: false
		};
	}
	componentWillUpdate() {
		console.log('componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}
	render() {
		const { pathname } = this.props.location

		// Only take the first-level part of the path as key, instead of the whole path.
		const key = pathname.split('/')[1] || 'root'

		return (
			<div>
				<Spinner isLoading={this.state.isLoading} />
				<ReactCSSTransitionGroup component="div" transitionName="swap" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					{React.cloneElement(this.props.children, { key: key, isLoading: this.state.isLoading })}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

class Page1 extends Component {
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

class Page2 extends Component {
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

class Page3 extends Component {
	render() {
		return (
			<div className="Image">
				<h1>Page 3</h1>
				<p>
					Test
				</p>
			</div>
		)
	}
}

class Spinner extends Component {

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
				background: 'rgba(0, 0, 0, 0.2)',
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

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Page1} />
			<Route path="page2" component={Page2} />
			<Route path="page3" component={Page3} />
		</Route>
	</Router>
), document.getElementById('contents'))
