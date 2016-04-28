import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './components/commentBox.jsx'

var data = [
	{id: 1388534400000, author: "Pete Hunt", text: "This is one comment"},
	{id: 1420070400000, author: "Jordan Walke", text: "This is *another* comment"}
];
ReactDOM.render(
	<CommentBox data={data} />,
	document.getElementById('contents')
);