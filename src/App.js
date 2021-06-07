import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Profile } from "./Profile.js";
// import "./Edit.js";
// import { Edit } from "./Edit.js";

// import AddPost from "./AddPost.js";
import AllPost from "./AllPost.js";

import {
  BrowserRouter as Router,
  /*Link,*/ NavLink,
  Switch
} from "react-router-dom";
import Route from "react-router-dom/Route";

const posts = [
  {
    id: 1,
    name: "Md.Ruhel Khan",
    title: "Hello EveryOne, How r u?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla neque in ultrices fermentum.Nunc tristique, sfds consectetur rhoncus, elit nisi suscipit nisl, non laoreet nunc lacus quis ante. "
  },

  {
    id: 2,
    name: "Md.Raj Khan",
    title: "Hi, i'm fin9 and u?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla neque in ultrices fermentum.Nunc tristique, sfds consectetur rhoncus, elit nisi suscipit nisl, non laoreet nunc lacus quis ante. "
  },

  {
    id: 3,
    name: "Md.Suhel Khan",
    title: "Hello EveryOne, How r u?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla neque in ultrices fermentum.Nunc tristique, sfds consectetur rhoncus, elit nisi suscipit nisl, non laoreet nunc lacus quis ante. "
  }
];

// const User = ({ match }) => {
//   return <h1> Welcome User {match.params.userName} </h1>;
// };

const Message = () => {
  return <h1> Message </h1>;
};
// const Profile = () => {
//   return <h1> Profile </h1>;
// };

function searchFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts,
      term: ""
    };

    this.searchPost = this.searchPost.bind(this);
  }

  searchPost(e) {
    this.setState({ term: e.target.value });
    let ruhel = this.state.posts.filter(searchFor(this.state.term));
    this.setState({
      posts: ruhel
    });

    console.log(this.state.posts);
  }

  render() {
    const { posts, search /*modalOpen*/ } = this.state;
    return (
      <Router>
        <div className="container" style={{ marginTop: "10px" }}>
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: " #3A5999", color: "#fff" }}
          >
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <NavLink
              to="/"
              exact
              activeStyle={{ color: "#ddd" }}
              className="nav-link"
              style={{
                color: "#fff",
                border: "solid 2px #fff",
                marginRight: "10px"
              }}
            >
              FatBook <span className="sr-only">(current)</span>
            </NavLink>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <NavLink
                    to="/"
                    exact
                    activeStyle={{ color: "red" }}
                    className="nav-link"
                    style={{ color: "#fff" }}
                  >
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    exact
                    activeStyle={{ color: "red" }}
                    className="nav-link"
                    style={{ color: "#fff" }}
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/message"
                    exact
                    activeStyle={{ color: "red" }}
                    className="nav-link"
                    style={{ color: "#fff" }}
                  >
                    Message
                  </NavLink>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="search"
                  onChange={this.searchPost}
                  value={search}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  style={{ backgroundColor: "green", color: "#fff" }}
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
          <div className="jumbotron" style={{ paddingTop: "0px" }}>
            <Switch>
              <Route
                path="/"
                exact
                strict
                render={() => {
                  return <AllPost posts={posts} />;
                  //data={() => searchFor(this.state.term)}
                }}
              />

              <Route
                path="/profile"
                render={() => {
                  return <Profile posts={posts} />;
                }}
              />
              {/* <Route path="/user/:userName" exact strict component={User} /> */}
              <Route path="/message" component={Message} />
            </Switch>
          </div>

          {/* {posts.filter(searchFor(this.state.term)).map((post, index) => (
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
              </a>
            </div>
          ))} */}
        </div>
      </Router>
    );
  }
}
