import React from 'react';
import { asset, View, Model } from 'react-vr'; // StyleSheet

export default class Turtle extends React.Component {
  render() {
    return (
      <View>
        <Model   
          source={{
            obj: asset('turtle.obj'),            
          }}  
          
          style={{
            transform: [
              {translate: [-6, -3, 6]}, // position x, y, z
              {scale:0.005}, // taille
              // {color:"green"},
              // {rotateX:}
              // {rotateY:}
              // {rotateZ:}
            ],
            
          }}
          texture={{ ...asset('texture.jpg'), repeat: [4, 4],}}
        />
      </View>
    );
  }
};
