import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{primitive: 'sphere', radius: 100}}
          material={{src: '#bg-texture', shader: 'flat'}}
          scale="5 5 -5" rotation="0 72 0"/>
);