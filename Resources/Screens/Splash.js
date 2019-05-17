/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,AsyncStorage,Image,Dimensions,ImageBackground} from 'react-native';

import { Container } from 'native-base';
type Props = {};
export default class Splash extends Component<Props> {
    static navigationOptions = {
        header: null,
    };
  render(){
    return(
      <View style={{flex: 1}}>     
        <View style={{flex: 1,alignItems: 'center',justifyContent: 'center' }} >
          <ImageBackground source={require('./../Images/Background/splash-bg.png')} style={{height:Dimensions.get('window').height, width:Dimensions.get('window').width}}>
            <Image style={{marginTop: '60%',alignSelf: 'center',height: '20%',width: '90%'}} resizeMode="contain"source={require('./../Images/Logo/khrogaty-logo.png')}/>
          </ImageBackground>
        </View>
        {this.moveToHome()}   
      </View> 
    );
  }
  moveToHome(){      
      AsyncStorage.getItem('newCommer').then((res)=>{
        if(res === 'yes'){
            setTimeout(()=>{
                this.props.navigation.navigate('FirstScreen')
            }, 1000)

        }else{
            setTimeout(()=>{
                this.props.navigation.navigate('Home')
            }, 1000)
        }
    })}}
    

    

    
  