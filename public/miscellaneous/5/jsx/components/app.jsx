import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Spinner from './spinner.jsx'

import $ from 'jquery'

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: false
		};
	}
	componentWillReceiveProps() {
		this.setState({isLoading: true});

		// Spinnerを出すためにわざとタイムラグを生じさせている
		// 本来はここで処理を書き、isLoadingをfalseにする
		var self = this;
		setTimeout(function(){
			self.setState({isLoading: false});
		}, 2000);
	}
	render() {
		const { pathname } = this.props.location

		// Only take the first-level part of the path as key, instead of the whole path.
		const key = pathname.split('/')[1] || 'root'

		return (
			<div>
				<Spinner isLoading={this.state.isLoading} />
				<ReactCSSTransitionGroup component="div" transitionName="swap" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					{React.cloneElement(this.props.children, { key: key })}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}