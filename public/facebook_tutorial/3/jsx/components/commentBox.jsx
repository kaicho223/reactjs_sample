import React from 'react'
import CommentList from './commentList.jsx'
import CommentForm from './commentForm.jsx'

export default class CommentBox extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="commentBox">
				<CommentList />
				<CommentForm />
			</div>
		);
	}
}