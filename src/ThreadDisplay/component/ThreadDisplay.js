import React from 'react';
import Post from '../../Post/component/Post';
import PostEditor from '../../PostEditor/component/PostEditor';
import axios from 'axios';
class ThreadDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);

    this.state = {
      posts: []
    }
  }

  api=()=>{
    const EVENT_URL = 'https://vanhackforum-api.herokuapp.com/posts';
    axios.get (EVENT_URL).then(
      (response) => {
        this.setState({
          posts:response.data
        });
      });
  }

  componentDidMount() {
    this.api();
  }

  addPost(newPostBody) {
    const newState = Object.assign({}, this.state);
    newState.posts.push(newPostBody);
    this.setState(newState);
  }

  render() {
    return (
      <div>
        {this.state.posts.map((postBody, idx) => {
          return (<Post key={idx} postBody={postBody}/>)
        })
}

        <PostEditor addPost={this.addPost}/>
      </div>
    )
  }

}

export default ThreadDisplay;
