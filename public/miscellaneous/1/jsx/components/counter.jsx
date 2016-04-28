import React from 'react'

export default class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		};
	}
	submitCountUp() {
		this.setState({
			count: this.state.count + 1
		});
	}
	submitCountDown() {
		this.setState({
			count: this.state.count - 1
		});
	}
	render() {
		return (
			<div className="counter">
				<span>{this.state.count}</span><br />
				<button onClick={this.submitCountUp.bind(this)}>Count Up!</button>
				<button onClick={this.submitCountDown.bind(this)}>Count Down!</button>
			</div>
		);
	}
}