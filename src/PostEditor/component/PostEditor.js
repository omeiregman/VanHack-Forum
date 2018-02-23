import React, {Component} from 'react';

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPostBody: ''
    };

    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handlePostEditorInputChange(e) {
    this.setState({newPostBody: e.target.value});
  }

  createPost() {
    let emptyPostCheck = this.state.newPostBody.split(' ').join('');
    if (emptyPostCheck != '') {
    this.props.addPost(this.state.newPostBody);
    this.setState({newPostBody: ''});
  }
  }

  render() {
    return (
      <div className="card post-editor">
        <div className="card-body">
          <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange}/>
          <button className="btn btn-success post-editor-btn" onClick={this.createPost}>Post</button>
        </div>
      </div>

    )
  }

};

export default PostEditor;
