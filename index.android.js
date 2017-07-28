import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  View
} from 'react-native';
 
export default class gadoth extends Component {
  render() {
  	return (

	      <View style={styles.textContainer}>  
	      	  {/* Image file in the local drive */}
		      <Image source={require('./img/hs1.jpg')} style={styles.homepic} /> 	
		      <Image source={require('./img/hs2.jpg')} style={styles.homepic}  > 
		 	  {/* Text to display at the middle of the image */}
		      	  
			  </Image>
		      <Image source={require('./img/hs3.jpg')} style={styles.homepic} /> 	
		      <Text style={styles.welcome}>
				          Gadoth Bar & Club  
				          <Text style={styles.you}>
	          			   {'\n'}Welcomes You !!!
       		 			  </Text>
			  </Text>			  			      
		  </View>
    );
  }
}
 
// To get mobile device's height and width.
const win = Dimensions.get('window')  
 
const styles = StyleSheet.create({
  textContainer: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  welcome: {
    fontSize: 30,
    color: '#fff',
    opacity: 1,
    textAlign: 'center',
    backgroundColor: 'transparent', 
    // To display the text on top of the image.
    position: 'absolute',	
    margin: 10,
  },
  you: {
    fontSize: 20,
    color: '#fff',
    opacity: 1,
    textAlign: 'center',
    backgroundColor: 'transparent',  
    marginBottom: 5,
  },
  homepic: {
  	// Vertical alignment
  	flexDirection: 'column',
  	alignItems: 'center',
  	width: win.width,
  	// 33% of screen height
  	height: win.height * 0.33,  	
  	opacity: 0.57,	
  	backgroundColor: 'black', 	
  },
});
 
AppRegistry.registerComponent('gadoth', () => gadoth);