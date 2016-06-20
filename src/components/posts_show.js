import React, {Component, PropTypes} from 'react';
import Nav from './nav';
import Post from './post';


export default class PostsShow extends Component {

  render() {
    return (
      <div>
        <Nav slug={this.props.params.slug}/>
        <Post slug={this.props.params.slug}/>
      </div>
    );
  }
}
