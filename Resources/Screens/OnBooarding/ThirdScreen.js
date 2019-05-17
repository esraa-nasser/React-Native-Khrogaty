/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,AsyncStorage,Image,Dimensions,ImageBackground} from 'react-native';
import { Container, Spinner,Header, Button, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

type Props = {};
class ThirdScreen extends Component<Props> {
    static navigationOptions = {
        header: null,
    };
  render(){
    return(
        <View style={{flex: 1}}>     
          <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',position:'absolute',height:Dimensions.get('window').height, width:Dimensions.get('window').width}} >
            <ImageBackground source={require('./../../Images/Background/onboarding-bg-left.png')}style={{width:'100%',height:'96%',marginBottom:'10%'}}>
                  <Image style={{alignSelf: 'center',height: '17%',width: '72%',marginTop:'60%'}}resizeMode="contain" source={require('./../../Images/Logo/khrogaty-logo.png')}/>  
                  <View style={{flex:1,alignItems: 'center',justifyContent: 'center',flexDirection:'column',marginTop:'15%'}}>    
                      <Image resizeMode='contain' source={require('./../../Images/VectorIcons/onboard-third-icon.png')} style={{alignSelf: 'center',width:'15%',height:'70%',marginBottom:'-7%'}} />        
                      <Text style={{fontWeight:'bold',fontSize:20}}>What Do I Do ?</Text>        
                      <Text style={{fontSize:15}}>Poor and want to play Something new ! {'\n'} khrogaty Provides you a variety of Activities to do</Text>
                      <View style={{alignItems:'center',flex:0.5,marginTop:'10%'}}>
                          <Button success rounded style={{width:'50%'}} onPress={()=>{
                            this.saveToAsync()
                            this.props.navigation.navigate('Home')
                            }}>
                              <Text style={{fontSize:20,color:'white',textAlign:'center',paddingHorizontal:'20%',paddingVertical:'5%'}}>Start</Text>
                          </Button>
                      </View>
                      <View style={{alignItems:'flex-start',flex:1,marginTop:'0%',marginRight:'70%'}}>
                          <Button transparent onPress={()=>{
                            this.props.navigation.navigate('SecondScreen')
                          }}>
                          <Icon color='black' name="ios-arrow-back" />
                              <Text style={{fontWeight:'bold',fontSize:20}}>
                                  {' '}Prev
                              </Text>
                          </Button>
                      </View>
                  </View>
            </ImageBackground>
          </View>
        </View>
    );
}
saveToAsync(){
    AsyncStorage.setItem('newCommer','yes');

 }
}

export default withNavigation(ThirdScreen)
       
    


  


   