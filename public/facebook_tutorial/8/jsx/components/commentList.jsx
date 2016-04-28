import React from 'react'
import Comment from './comment.jsx'

export default class CommentList extends React.Component {
	render() {
		var commentNodes = this.props.data.map((comment)=> {
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className='commentList'>
				{commentNodes}
			</div>
		);
	}
}