import React from 'react'
import Comment from './comment.jsx'
import CommentForm from './commentForm.jsx'

export default class CommentBox extends React.Component {
	render() {
		var commentNodes = this.props.data.map(function (comment) {
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
				<CommentForm />
			</div>
		);
	}
}