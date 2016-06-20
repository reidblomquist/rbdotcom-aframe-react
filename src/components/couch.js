import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity obj-model={{obj: '#couch-obj'}}
          material={{color: 'red', shader: 'standard'}}
          scale="0.005 0.005 0.005" rotation="0 180 0" position="0 -5 0"/>
);