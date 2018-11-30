import React, { Component } from "react";

import AddPost from "./AddPost.js";

export default class AllPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      // data: this.props.data,
      term: "ruhel",
      // serachItem: this.props.data.searchFor,
      date: new Date()
    };

    console.log(this.state.data);

    this.addPostItem = this.addPostItem.bind(this);
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  deletePost(index) {
    this.setState({
      posts: this.state.posts.filter(function(e, i) {
        return i !== index;
      })
    });
  }

  addPostItem(e) {
    this.setState({ posts: [...this.state.posts, e] });
  }

  render() {
    const { posts } = this.state;

    //console.log(posts);

    return (
      <div className="allPost">
        <AddPost onAddPost={this.addPostItem} />
        <span
          style={{
            background: "#FFFFFF",
            display: "block",
            paddingLeft: "10px",
            marginLeft: "2px",
            marginRight: "1px",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: " 5px"
          }}
        >
          {`Total Posts: ${posts.length}`}
          <span style={{ float: "right", marginRight: "10px" }}>
            Today : {this.state.date.toLocaleTimeString()}
          </span>
        </span>

        {posts.map((post, index) => (
          <div
            className="list-group"
            style={{ marginBottom: "15px" }}
            key={index}
          >
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{post.title}</h5>
                <small>3 days ago</small>
              </div>
              <small className="mb-1" style={{ marginBottom: "10px" }}>
                <i className="fas fa-user" />
                <span> {post.name} </span>
              </small>
              <p className="mb-1 mt-2">{post.content}</p>
              {/* <button className="btn btn-info btn-sm"> Edit </button> */}
              <button
                className="btn btn-danger btn-sm"
                onClick={this.deletePost.bind(this, index)}
              >
                Delete
              </button>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
