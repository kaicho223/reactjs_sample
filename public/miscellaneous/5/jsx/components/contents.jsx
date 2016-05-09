import React, { Component } from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './app.jsx'
import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
import Page3 from './page3.jsx'

export default class Contents extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Page1} />
					<Route path="page2" component={Page2} />
					<Route path="page3" component={Page3} />
				</Route>
			</Router>
		);
	}
}
