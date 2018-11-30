import React, { Component } from "react";

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Md.RUhel Khan",
      title: "",
      content: ""
    };

    this.inputChange = this.inputChange.bind(this);
    this.postSubmit = this.postSubmit.bind(this);
  }

  //Edit post
  inputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  // save post
  postSubmit(event) {
    event.preventDefault();
    this.props.onAddPost(this.state);
    this.setState({
      name: "Md.RUhel Khan",
      title: "",
      content: ""
    });
  }

  render() {
    // const { posts } = this.state;
    // console.log(posts);

    return (
      <div
        style={{
          paddingTop: "10px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "flex-end"
          // paddingBottom: "30px",
          // backgroundColor: "#E9ECEF",
          // //padding: "30px"
        }}
      >
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          Add New Post
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add New post
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.postSubmit}>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Title
                    </label>
                    <input
                      name="title"
                      type="text"
                      className="form-control"
                      id="postTitle"
                      placeholder="Add Title.."
                      value={this.state.title}
                      onChange={this.inputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Description:
                    </label>
                    <textarea
                      name="content"
                      className="form-control"
                      id="description"
                      rows="3"
                      placeholder="Description.."
                      value={this.state.content}
                      onChange={this.inputChange}
                    />
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      // <div
      //   style={{
      //     marginBottom: "30px",
      //     paddingBottom: "30px",
      //     backgroundColor: "#E9ECEF",
      //     padding: "30px"
      //   }}
      // >

      //   <h3> Add New Post</h3>
      //   <form onSubmit={this.postSubmit}>
      //     <div className="form-group">
      //       <label htmlhtmlFor="postTitle">Title</label>
      //       <input
      //         name="title"
      //         type="text"
      //         className="form-control"
      //         id="postTitle"
      //         placeholder="Add Title.."
      //         value={this.state.title}
      //         onChange={this.inputChange}
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlhtmlFor="description">Description</label>
      //       <textarea
      //         name="content"
      //         className="form-control"
      //         id="description"
      //         rows="3"
      //         placeholder="Description.."
      //         value={this.state.content}
      //         onChange={this.inputChange}
      //       />
      //     </div>

      //     <button type="submit" className="btn btn-primary">
      //       Sumbit
      //     </button>
      //   </form>
      // </div>
    );
  }
}
