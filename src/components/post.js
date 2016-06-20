import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';

class Post extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.slug);
  }
  
  componentDidUpdate() {
    this.props.fetchPost(this.props.slug);
  }

  render() {
    const {post} = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container jumbotron post-container">
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost})(Post);
