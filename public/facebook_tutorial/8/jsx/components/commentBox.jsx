import React from 'react'
import CommentList from './commentList.jsx'
import CommentForm from './commentForm.jsx'
import $ from 'jquery'

export default class CommentBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		};
	}
	loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: (data) => { this.setState({data: data}); },
			error: (xhr, status, err) => {
				console.error(this.props.url, status, err.toString());
			}
		});
	}
	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
	}
	render() {
		return (
			<div className="commentBox">
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
}