import React, { Component } from 'react'

import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
import Page3 from './page3.jsx'

export default class Contents extends Component {
	constructor(props){
		super(props);
		this.state = {
			stepNo: 1,
			displayPageName: "Page1"
		};
	}
	handleContentsSubmit(data) {
		this.setState(data);
	}
	render() {
		return (
			<div>
				<header>
					this is header
				</header>
				{(() => {
					switch (this.state.displayPageName) {
						case "Page1":
							return <Page1 displayPageName={this.state.displayPageName} onContentsSubmit={this.handleContentsSubmit.bind(this)} />;
						case "Page2":
							return <Page2 displayPageName={this.state.displayPageName} onContentsSubmit={this.handleContentsSubmit.bind(this)} />;
						case "Page3":
							return <Page3 displayPageName={this.state.displayPageName} onContentsSubmit={this.handleContentsSubmit.bind(this)} />;
						default:
					}
				})()}
				<footer>
					this is footer
				</footer>
			</div>
		);
	}
}
