import React, { Component } from 'react';

import {Text, View,AsyncStorage,Image,Dimensions,ImageBackground} from 'react-native';

import AllRestaurants from './AllRestaurants'
import AllPlaces from './AllPlaces'
import AllActivities from './AllActivities'



import {Card, CardItem, Left, Body, Spinner, Container,Content, Right, Button,Thumbnail,Footer,FooterTab} from 'native-base';
type props={}
export default class Home extends Component<Props> {
    state={loadedR:0,AllRest:[],Categories:[],Places:[],AllAct:[],All:[],res:[]}
    componentDidMount(){
        fetch('http://reactnative.website/iti/wp-json/wp/v2/categories')
            .then((r)=> r.json())
            .then((rj)=>{
                this.setState({Categories: rj, loadedR: 1}, function(){
                    console.log(rj)
                })
            })       
    }
    static navigationOptions = {
        header: null,
    };
    render(){return(
            <Container style={{height:'70%',width:'100%',flex:1}}>
                <ImageBackground source={require('./../../Images/Background/home-header.png')} style={{width:Dimensions.get('window').width,height:'35%' ,marginBottom:'-30%'}} resizeMode='cover'>
                    <Image style={{alignSelf: 'center',height: '25%',width: '76%',marginTop:7}}resizeMode="contain"source={require('./../../Images/Logo/khrogaty-logo.png')}/>  
                </ImageBackground>
                
                    {this.chkContentBack()}
                
                <Footer style={{backgroundColor:'transparent',flexDirection:'row'}} > 
                            <FooterTab style={{backgroundColor:'transparent',flexDirection:'row'}} >
                            <Button vertical transparent onPress={()=>{
                                this.props.navigation.navigate('Home')
                            }}>
                                <Image source={require('./../../Images/Icon/ghome.png')} style={{width:25,height:25}}/>
                                <Text uppercase={false} style={{color:'#999',fontSize:12,textAlign:'center',flexWrap:'wrap'}}>Home</Text>
                            </Button>                     
                            <Button vertical transparent onPress={()=>{
                                this.props.navigation.navigate('Search')
                            }}>
                                <Image source={require('./../../Images/Icon/filter.png')} style={{width:25,height:25}}/>
                                <Text  uppercase={false} style={{color:'#999',fontSize:12,textAlign:'center',flexWrap:'wrap'}}>Filter</Text>
                            </Button>                   
                            <Button vertical transparent onPress={()=>{
                                this.props.navigation.navigate('SelectedPlaces')
                            }}>
                                <Image source={require('./../../Images/Icon/find-places.png')} style={{width:25,height:25}}/>
                                <Text  uppercase={false} style={{color:'#999',fontSize:12,textAlign:'center',flexWrap:'wrap'}}>Find Places</Text>
                            </Button>                      
                            <Button vertical transparent onPress={()=>{
                                    this.props.navigation.navigate('SelectedRestaurants')
                            }} style={{width:80}}>
                                <Image source={require('./../../Images/Icon/restaurants.png')} style={{width:25,height:25}}/>
                                <Text  uppercase={false} style={{color:'#999',fontSize:12,textAlign:'center',flexWrap:'wrap'}}>Restaurants</Text>
                            </Button>        
                            <Button vertical transparent style={{flex:1,flexDirection:'column'}} onPress={()=>{
                                this.props.navigation.navigate('SelectedActivities')
                            }}>
                                <Image source={require('./../../Images/Icon/todo.png')} style={{width:25,height:25}}/>
                                <Text uppercase={false} style={{color:'#999',fontSize:12,textAlign:'center',flexWrap:'wrap'}}>Things ToDo
                                </Text>
                            </Button>
                           
                        </FooterTab>
                       </Footer>
            </Container>)}
    chkContentBack(){
        if(this.state.loadedR===1&&this.state.Categories!==undefined){
            return(  
                <Content style={{paddingBottom:310,flexDirection:'column',flex:1}}>       
                    <View  style={{flexDirection:'row',flex:1,justifyContent:'center'}}>
                                <Image source={require('./../../Images/VectorIcons/home-first-icon.png')} style={{height: 30,width: 30,resizeMode : 'stretch',marginLeft:'3%',marginTop:'3%'}} />
                             
                                    <Text style={{marginTop:'4%',paddingLeft:'3%',fontSize:15}}>Places For Going Out</Text>
                                    <Button transparent style={{ marginLeft:'auto',marginRight:'5%'}}  onPress={()=>{
                                    this.props.navigation.navigate('SelectedPlaces')
                                }}>
                                    <Text style={{color:'#0877ae'}}>View More</Text>
                                </Button>
                            
                    </View>
                                
                         <AllPlaces/>
                        
                         <View  style={{flexDirection:'row',flex:1,justifyContent:'center'}}>
                                <Image source={require('./../../Images/VectorIcons/home-first-icon.png')} style={{height: 30,width: 30,resizeMode : 'stretch',marginLeft:'3%',marginTop:'3%'}} />
                             
                                    <Text style={{marginTop:'4%',paddingLeft:'3%',fontSize:15}}>Restaurants & Coffe</Text>
                                    <Button transparent style={{ marginLeft:'auto',marginRight:'5%'}}  onPress={()=>{
                                    this.props.navigation.navigate('SelectedRestaurants')
                                }}>
                                    <Text style={{color:'#0877ae'}}>View More</Text>
                                </Button>
                            
                    </View>
                         <AllRestaurants/>
                         <View  style={{flexDirection:'row',flex:1,justifyContent:'center'}}>
                                <Image source={require('./../../Images/VectorIcons/home-first-icon.png')} style={{height: 30,width: 30,resizeMode : 'stretch',marginLeft:'3%',marginTop:'3%'}} />
                             
                                    <Text style={{marginTop:'4%',paddingLeft:'3%',fontSize:15}}>What Do I Do !</Text>
                                    <Button transparent style={{ marginLeft:'auto',marginRight:'5%'}} transparent onPress={()=>{
                                    this.props.navigation.navigate('SelectedActivities')
                                }}>
                                    <Text style={{color:'#0877ae'}}>View More</Text>
                                </Button>
                            
                    </View>
                         <AllActivities/> 
                       </Content>
                 
          )
                
            
        
    }
    else{
        return(<Spinner color="black"/>)
    }
    }
}
