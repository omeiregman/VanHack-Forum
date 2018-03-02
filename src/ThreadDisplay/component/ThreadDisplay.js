import React from 'react';
import Post from '../../Post/component/Post';
import PostEditor from '../../PostEditor/component/PostEditor';
import axios from 'axios';

const EVENT_URL = 'https://vanhackforum-api.herokuapp.com/posts';

class ThreadDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);

    this.state = {
      posts: []
    }
  }

  api=()=>{
    axios.get (EVENT_URL).then(
      (response) => {
        let postThread = [];
        for (let i =0; i<response.data.length; i++) {
          postThread[i] = (response.data[i].mypost);
        }
        this.setState({
          posts: postThread
        })
      }
    );
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
