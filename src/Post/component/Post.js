import React, { Component } from 'react';


class Post extends Component {
//  constructor() {
  //  super();
//}
  render() {
    return (
      <div className="card post-body">
        <div className="card-body">
          {this.props.postBody}
        </div>
      </div>
    );
  }
}

export default Post;
