import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="card post-body">
          <div className="card-body">
            Hello I am a Post
          </div>
        </div>
        <div className="card post-editor">
          <div className="card-body">
            <textarea className="form-control post-editor-input"/>
            <button className="btn btn-success post-editor-btn">Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
