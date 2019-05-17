/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,AsyncStorage,Image,Dimensions,ImageBackground} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import { Container, Spinner,Header, Button, Icon } from 'native-base';

type Props = {};
export default class FirstScreen extends Component<Props> {
    static navigationOptions = {
        header: null,
    };
  render(){
    return(
        <View style={{flex: 1}}>     
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              position:'absolute',height:Dimensions.get('window').height, width:Dimensions.get('window').width
              }} >
            <ImageBackground        
              source={require('./../../Images/Background/onboarding-bg-left.png')}
              style={{
                width:'100%',height:'96%',marginBottom:'10%'}}>
                  <Image style={{
                                alignSelf: 'center',
                                height: '17%',
                                width: '72%',marginTop:'60%'}}
                          resizeMode="contain"
                          source={require('./../../Images/Logo/khrogaty-logo.png')}/>  
                  <View style={{flex:1,alignItems: 'center',
                              justifyContent: 'center',flexDirection:'column',marginTop:'15%'}}>    
                      <Image resizeMode='contain' source={require('./../../Images/VectorIcons/onboard-first-icon.png')} style={{alignSelf: 'center',width:'15%',height:'70%',marginBottom:'-7%'}} />        
                      <Text style={{fontWeight:'bold',fontSize:20}}>Places For Going Out</Text>        
                      <Text style={{fontSize:15}}>Wanna To Go Out But Don't Know Where To Go!{'\n'}Khrogaty Provides you a Variety Of Places To Visit</Text>
                      <View style={{alignItems:'flex-end',flex:1,marginTop:'10%'}}>
                          <Button transparent onPress={()=>{
                            this.props.navigation.navigate('SecondScreen')
                          }}>
                              <Text style={{fontWeight:'bold',marginLeft:'70%',fontSize:20}}>Next{' '}
                                  <Icon color='black' name="ios-arrow-forward" />
                              </Text>
                          </Button>
                      </View>
                  </View>
            </ImageBackground>
          </View> 
          {this.saveToAsync()}
        </View>
    );}
    saveToAsync(){
      AsyncStorage.setItem('newCommer','yes'); 
   }
}

    
       
    


  


   