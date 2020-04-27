import React from 'react';
import Comment from './Comment';
import { Form, Input, Button } from 'react-uikit'
import '../Style.css'

export default class Post extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            comments: [],
            newCommentText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e){
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText}
            ]
        });

        this.setState({ newCommentText: '' });

        e.preventDefault();
    }

    handleTextChange(e){
         this.setState({ newCommentText: e.target.value })   
    }

  render() {
    return (
        <div>
            <h2>{this.props.title}</h2>
            <Form onSubmit={this.handleSubmit}>
            <Form.Fieldset>
                <Input
                    className="inputPost"
                    value={this.state.newCommentText}
                    onChange={this.handleTextChange}
                />
                <Button className="buttonPost" variant="secondary" type="submit">Comentar</Button>
                </ Form.Fieldset>
            </Form>
            { this.state.comments.map((comment, index) => {
                return <Comment key={index} text={comment.text} />
            })}
        </div>
    );
  }
}
