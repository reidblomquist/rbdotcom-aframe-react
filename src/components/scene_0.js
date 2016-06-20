import 'aframe';
import {Animation, Entity, Scene} from 'aframe-react';
import React, {Component} from 'react';

import Camera from './camera';
import Cursor from './cursor';
import Sky from './sky';

export default class Scene0 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
    color: colors[Math.floor(Math.random() * colors.length)],
  });
};

  render () {
    return (
      <Scene>
      <Camera><Cursor/></Camera>

      <Sky/>

      <Entity light={{type: 'ambient', color: '#888'}}/>
      <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
      <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>

      <Entity geometry="primitive: box" material={{color: this.state.color}}
        onClick={this.changeColor}
        position="0 0 -5">
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
          </Entity>
          </Scene>
      );
  }
}
