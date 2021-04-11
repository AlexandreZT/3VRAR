import React from 'react';
import { asset, View, Video, Image, VrButton, Text, VideoControl } from 'react-vr'; // StyleSheet

export default class Panels extends React.Component {
    constructor() {
        super();
        this.state = {                    
        };
        this.mode = false;
      }

      playPause() {
        console.log("playPause");
        if (this.mode == false){
        this.setState({
            mode: true
        });

        return (
            <Video
                // loop={true}
                // volume={this.volume}
                // playPause={this.mode}
                // playPause={}                                
                source={asset('turtles.mp4')}
                style={{
                    transform: [
                        { translate: [2, 4 , -10] },
                        // { rotateY: 90 }
                        // { rotateX: 90 }
                    ],
                    width: 6,
                    height: 4
                }}>            
            </Video>
        )
        } else {
          this.setState({
            mode: false
          });
        }
      }

  render() {
    return (
      <View>        
        <Image
            source={asset('tortue.jpg')}
            style={{
                transform: [
                    { translate: [-5, 0, -10] },
                    // { rotateY: 90 }
                    // { rotateX: 90 }
                ],
                width: 6,
                height: 4
              }}            
        />
                   
        <VrButton onClick={this.playPause.bind(this)}>
            <Text 
                style={{
                backgroundColor: '#777879',
                fontSize: 0.8,
                fontWeight: '400',
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [2, 4, -10]}],
                }}>Play
            </Text>
        </VrButton>
      </View>
    );
  }
};
