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

import { Container, Spinner,Header, Button, Icon, ListItem, List } from 'native-base';

type Props = {};
export default class SecondScreen extends Component<Props> {
    static navigationOptions = {
        header: null,
    };
  render(){
    return(
        <View style={{flex: 1}}>     
          <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',position:'absolute',height:Dimensions.get('window').height, width:Dimensions.get('window').width}} >
            <ImageBackground source={require('./../../Images/Background/onboarding-bg-right.png')}style={{width:'100%',height:'96%',marginBottom:'10%'}}>
                <Image style={{alignSelf: 'center',height: '17%',width: '72%',marginTop:'60%'}}resizeMode="contain"source={require('./../../Images/Logo/khrogaty-logo.png')}/>  
                  <View style={{flex:1,alignItems: 'center',justifyContent: 'center',flexDirection:'column',marginTop:'30%'}}>    
                      <Image resizeMode='contain' source={require('./../../Images/VectorIcons/onboard-second-icon.png')} style={{alignSelf: 'center',width:'15%',height:'70%',marginTop:'0%',paddingBottom:'15%'}} />        
                      <Text style={{fontWeight:'bold',fontSize:20}}>Resraurant & Coffee Shops</Text>        
                      <Text style={{fontSize:15}}>What about eating Something Or Have a Drink !{'\n'} Here, You'll Find Everything You Want To</Text>
                      <View style={{alignItems:'flex-end',flex:1,marginTop:'10%',marginLeft:'70%'}}>   
                        <Button transparent  style={{padding:0}} onPress={()=>{this.props.navigation.navigate('ThirdScreen')}}>
                          <Text style={{fontWeight:'bold',fontSize:20}}>Next{' '}
                            <Icon color='black' name="ios-arrow-forward" />
                          </Text>
                        </Button>
                      </View>
                      <View style={{alignItems:'flex-start',flex:1,marginRight:'70%'}}>
                        <Button transparent onPress={()=>{this.props.navigation.navigate('FirstScreen')}}>
                          <Icon color='black' name="ios-arrow-back" />
                          <Text style={{fontWeight:'bold',fontSize:20}}>Prev{' '}</Text>
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

    
       
    


  


   