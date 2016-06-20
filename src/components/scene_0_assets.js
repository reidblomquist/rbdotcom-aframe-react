import React from 'react';

export default props => (
  <a-assets>
    <a-asset-item id="couch-obj" src={require("../models/couch/24_Ligne_Roset_Citta_OBJ/mpm_vol.07_p24.obj")}></a-asset-item>
    <a-asset-item id="couch-mtl" src={require("../models/couch/materials/mpm_vol.07_p24_vray_g2.2_matlib.mat")}></a-asset-item>
    <a-asset-item id="can-obj" src={require("../models/can/SA_LD_12oz_Can_OBJ/SA_LD_12oz_Can.obj")}></a-asset-item>
    <a-asset-item id="can-mtl" src={require("../models/can/SA_LD_12oz_Can_OBJ/SA_LD_12oz_Can.mtl")}></a-asset-item>
    <img id="bg-texture" src={require("../images/mars_sky.vr.jpg")}/>
  </a-assets>
);