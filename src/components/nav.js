import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchPosts} from '../actions/index';

class Nav extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className={this.props.slug && this.props.slug == post.slug ? "nav-item active" : "nav-item"} key={post.id}>
          <Link to={"/" + post.slug} className="nav-link">
            <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <Link to="/" className="navbar-brand col-sm-3">
          <div className="row">
            <strong className="col-xs-7 col-sm-3 vcenter">TECHNOLOGY</strong>
          </div>
        </Link>
        <ul className="nav navbar-nav">
          {this.renderPosts()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(Nav);
