import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity>
    <Entity obj-model={{obj: '#can-obj', mtl:'#can-mtl'}}
           scale="0.15 0.15 0.15" position="0 -1.5 -5"/>
    <Entity obj-model={{obj: '#can-obj', mtl:'#can-mtl'}}
           scale="0.15 0.15 0.15" position="-0.5 -1.5 -5.5"/>
    <Entity obj-model={{obj: '#can-obj', mtl:'#can-mtl'}}
           scale="0.15 0.15 0.15" position="1 -1.5 -4"
           rotation="90 0 30"/>
    <Entity obj-model={{obj: '#can-obj', mtl:'#can-mtl'}}
           scale="0.15 0.15 0.15" position="-2 -1.5 -4.6"
           rotation ="90 0 123"/>
  </Entity>
);