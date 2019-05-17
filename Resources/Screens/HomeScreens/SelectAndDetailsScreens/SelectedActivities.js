import React, { Component } from 'react';

import {Text, View,AsyncStorage,Image,Dimensions,ImageBackground} from 'react-native';
import { withNavigation } from 'react-navigation';
import {Card, CardItem, Left, Body,  Spinner, Container,Content, Button,Footer,FooterTab} from 'native-base';
import MyHeader from '../../../common/MyHeader';
type props={}
export default class SelectedActivities extends Component<props>{
state={Restaurants:[],loaded:0}
static navigationOptions = {
    header: null,
};
componentDidMount(){
    fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4').then((r)=> r.json())
    .then((rj)=>{
        this.setState({Activities: rj, loaded: 1}, function(){
            console.log(rj)
        })
    })
}
render(){return(   
    <Container> 
        <MyHeader title="Activities"/>
    <Content style={{marginTop:'-10%'}}>
        {this.getAllActivities()}
    
      </Content>
      <Footer style={{backgroundColor:'transparent',flexDirection:'row'}} > 
                            <FooterTab style={{backgroundColor:'transparent',flexDirection:'row'}} >
                            <Button vertical  onPress={()=>{
                                this.props.navigation.navigate('Home')
                            }}>
                                <Image source={require('./../../../Images/Icon/home.png')} style={{width:25,height:25}}/>
                                <Text uppercase={false} style={{color:'#999',fontSize:8,textAlign:'center',flexWrap:'wrap'}}>Home</Text>
                            </Button>                     
                            <Button vertical  onPress={()=>{
                                this.props.navigation.navigate('Search')
                            }}>
                                <Image source={require('./../../../Images/Icon/filter.png')} style={{width:25,height:25}}/>
                                <Text  uppercase={false} style={{color:'#999',fontSize:8,textAlign:'center',flexWrap:'wrap'}}>Filter</Text>
                            </Button>                   
                            <Button vertical  onPress={()=>{
                                this.props.navigation.navigate('SelectedPlaces')
                            }}>
                                <Image source={require('./../../../Images/Icon/find-places.png')} style={{width:25,height:25}}/>
                                <Text  uppercase={false} style={{color:'#999',fontSize:8,textAlign:'center',flexWrap:'wrap'}}>Find Places</Text>
                            </Button>                      
                            <Button vertical  onPress={()=>{
                                this.props.navigation.navigate('SelectedRestaurants')
                            }} style={{width:80}}>
                                <Image source={require('./../../../Images/Icon/restaurants.png')} style={{width:25,height:25}}/>
                                <Text  uppercase={false} style={{color:'#999',fontSize:8,textAlign:'center',flexWrap:'wrap'}}>Restaurants</Text>
                            </Button>        
                            <Button vertical  style={{flex:1,flexDirection:'column'}} onPress={()=>{
                                this.props.navigation.navigate('SelectedActivities')
                            }}>
                                <Image source={require('./../../../Images/Icon/gtodo.png')} style={{width:25,height:25}}/>
                                <Text uppercase={false} style={{color:'#999',fontSize:8,textAlign:'center',flexWrap:'wrap'}}>Things ToDo
                                </Text>
                            </Button>
                           
                        </FooterTab>
                       </Footer>
</Container>
  )}
getAllActivities(){
  if(this.state.loaded === 1){
    return(this.state.Activities.map((item)=>{
      return(            
        <Card style={{marginTop:5}}>
            <CardItem style={{paddingTop:40}}>
                <Left style={{flex: 1,marginLeft:-18,marginTop:-25}}>
                    <Image
                        source={{uri:  item.better_featured_image.media_details.sizes.thumbnail.source_url}}
                        style={{width:  item.better_featured_image.media_details.sizes.thumbnail.width, height:  item.better_featured_image.media_details.sizes.thumbnail.height, borderRadius: 10}}/>
                </Left>
                <Body style={{flex: 1}}>
                <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold',marginTop:-30}}>
                    {item.title.rendered.replace(/(&([^]+);)/ig,'')}
                </Text>
                <Text style={{color: 'green', fontSize: 13}}>
                    <Image source={require('./../../../Images/Icon/map-marker.png')} style={{width:15,height:15}}/>
                    {item.acf.address}
                </Text>
                <Text style={{marginBottom:20}}>
                    {item.excerpt.rendered.replace(/(<([^>]+)>)/ig,'')}
                </Text>
                <Button success style={{borderRadius:10,color:'white',width:150,height:35,textAlign:'center'}} onPress={()=>{
                    this.props.navigation.navigate('TabsScreen',{id:item.id,slug:item.title.rendered,img:item.better_featured_image.media_details.sizes.medium.source_url,address:item.acf.address,email:item.acf.email_address,phone_number:item.acf.phone_number,content:item.content.rendered,url:item.acf.map_location})
                }}>
                <Text style={{paddingLeft:50,color:'white',fontSize:15}}> Details</Text>
                </Button>
                </Body>
            </CardItem>
        </Card>
      )
  })
 )}
 else{
     return(<Spinner color="light pink"/>)
 }
}
}