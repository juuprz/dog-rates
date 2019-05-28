import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const uuidv4 = require('uuid/v4');

// for now this will just layout the list of comment objects
const CommentSection = ({ replyVisibility, HandleReplyClick, HandleCommentSubmit }) => {
    return (
      <Comment.Group>
        <Header as='h3' dividing>
          Comments
    </Header>
        <ChatComment
          HandleReplyClick={HandleReplyClick}
          replyVisibility={replyVisibility}
          HandleCommentSubmit={HandleCommentSubmit}
        ></ChatComment>
      </Comment.Group>
    )
}
// we'll work ungrouped first and adjust once we have the individual ones down
// state fields we'll need to supply as props: { photo id, comment id, author, text}
// methods we'll need to dispatch -> onReplyClick
// need a commentId attribute
const ChatComment = ({ replyVisibility, HandleReplyClick, HandleCommentSubmit }) => {
  const chatId = uuidv4();
  return (
    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Julian</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>some previous text</Comment.Text>
        <Comment.Actions>
          <Comment.Action onClick={() => HandleReplyClick()}>Reply</Comment.Action>
          <div>
            {replyVisibility ? <Reply chatId={chatId} HandleCommentSubmit={HandleCommentSubmit}/> : ''}
          </div>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  )
}

// for when a reply is requested on a comment
class Reply extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { commentText: '' };
  }
  handleChange(text) {
    this.setState({ commentText: text });
    console.log('fired with ', text);
  }
  handleClick(chatId) {
    let post = this.state.commentText;
    console.log(post, chatId);
    this.props.HandleCommentSubmit(post, chatId);
  }
  render() {
    return (
    <Form reply>
        <Form.TextArea onChange={(e) => this.handleChange(e.target.value)}/>
        <Button onClick={() => this.handleClick(this.props.chatId)} content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    )
  }
}
export default CommentSection;