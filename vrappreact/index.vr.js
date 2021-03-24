import React from 'react';
import {
  AppRegistry,
  asset,
  Model,
  Pano,
  Text,
  View,
  AmbientLight, 
  Sound, 
  VrButton
} from 'react-vr';
import Turtle from './Turtle';

export default class vrappreact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'welcome.jpg',
      sound: 'home.wav',
      volume: 0.7,
      visible: false,
    };
  }

  changeScene() {
    console.log(this.state.background)
    if (this.state.background == "welcome.jpg"){
      this.setState({
        background: 'background.jpg',
        sound: 'outside.wav',        
        visible: true
      });
    } else {
      this.setState({
        background: 'welcome.jpg',
        sound: 'home.wav',
        visible: false
      });
    }
  }

  toggleVolume(){
    console.log("toggleVolume");
    if (this.state.volume == 0.7){
    this.setState({
      volume: 0
    });
    } else {
      this.setState({
        volume: 0.7
      });
    }
  }
  
  renderItems(){
    if (this.state.visible === true) {
      return <Turtle />
    }
  }

  render() {
    return (
      <View>
        <AmbientLight intensity={ 2.5 } />
        <Pano source={asset(this.state.background)} />    
        
        {/*
        <Video 
          source={{
            mp4: asset('turtles.mp4')
          }}
          style={{
              transform: [
                  { translate: [0, 0, -3] },
                  //{ rotateY: 90 }
              ]
          }}
        />
        */}
        
        <VrButton onClick={this.changeScene.bind(this)}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [-5, 0, -10]}],
            }}>
            Launch
          </Text>
        </VrButton>
        
        <Sound
          loop={true}
          volume={this.state.volume}
          source={{
            wav: asset(this.state.sound)
        }}      
        />
       
        <VrButton onClick={this.toggleVolume.bind(this)}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [2, 1, -10]}],
            }}>
            Settings
          </Text>
        </VrButton>
        {this.renderItems()}
      </View>
    );
  }
};

AppRegistry.registerComponent('vrappreact', () => vrappreact);