import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{primitive: 'box', width:'8', depth:'3.5', height:'0.25'}}
          material={{color: 'gray', shader: 'standard', opacity: '0.75'}}
          position="0 -2 -5"/>
);