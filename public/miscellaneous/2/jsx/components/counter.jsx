import React from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'

export default class Counter extends React.Component {
	constructor(props) {
		super(props);
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
		let AwesomeCounter = <AwesomeCounter1 key={this.state.count} count={this.state.count} />;
		if (this.state.count % 2 === 1) {
			AwesomeCounter = <AwesomeCounter2 key={this.state.count} count={this.state.count} />;
		}
		return (
			<div className="counter">
				<CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{AwesomeCounter}
				</CSSTransitionGroup><br />
				<p>
					<button onClick={this.submitCountUp.bind(this)}>Count Up!</button>
					<button onClick={this.submitCountDown.bind(this)}>Count Down!</button>
				</p>
			</div>
		);
	}
}
class AwesomeCounter1 extends React.Component {
	render(){
		return (
			<div className='awesome'>
				<p className='awesome1'>
					{this.props.count}
				</p>
			</div>
		);
	}
}
AwesomeCounter1.propTypes = {
	count: React.PropTypes.number.isRequired
};
class AwesomeCounter2 extends React.Component {
	render(){
		return (
			<div className='awesome'>
				<p className='awesome2'>
					{this.props.count}
				</p>
			</div>
		);
	}
}
AwesomeCounter2.propTypes = {
	count: React.PropTypes.number.isRequired
};