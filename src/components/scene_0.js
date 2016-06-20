import 'aframe';
import {Animation, Entity, Scene} from 'aframe-react';
import React, {Component} from 'react';

import Scene0Assets from './scene_0_assets';
import Camera from './camera';
import Cursor from './cursor';
import Sky from './sky';
import Couch from './couch';
import Cans from './cans';
import Table from './table';

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
        <Scene0Assets/>
        <Camera><Cursor/></Camera>

        <Sky/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>

        <Couch/>
        <Table/>
        <Cans/>
      </Scene>
      );
  }
}
