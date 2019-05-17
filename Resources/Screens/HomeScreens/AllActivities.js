import React, { Component } from 'react';

import {Text, View,AsyncStorage,Image,Dimensions,ImageBackground} from 'react-native';

import { withNavigation } from 'react-navigation';
import {Card, CardItem, Left, Body, Spinner, Container,Content, Right} from 'native-base';
type props={}
class AllActivities extends Component<props>{
    state={Activities:[],loaded:0}
    static navigationOptions = {
        header: null,
    };
    componentDidMount(){
        fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4').then((r)=> r.json())
        .then((rj)=>{
            this.setState({Activities:rj,loaded:1 }, function(){
            })
        })
    }
  render(){return(
    <Card transparent style={{flexDirection:'row',height:250,width:'100%'}}>   
    {this.getAllActivities()}
       </Card> 
    )}
  getAllActivities(){
    if(this.state.loaded===1){
        return(this.state.Activities.map((item)=>{
          return(
            <CardItem style={{flex:1,flexDirection:'column',alignItems:'center'}} button onPress={()=>{           
                this.props.navigation.navigate('Details',{id:item.id,slug:item.title.rendered,img:item.better_featured_image.media_details.sizes.medium.source_url,address:item.acf.address,email:item.acf.email_address,phone_number:item.acf.phone_number,content:item.content.rendered})}}>       
                  <Image source={{uri:  item.better_featured_image.media_details.sizes.thumbnail.source_url}}
                          style={{width:  120, height:100, borderRadius: 10}}/> 
                          <View style={{width:'120%',marginLeft:15}}>                                           
                    <Text style={{color: '#000', fontSize: 15, fontWeight: 'bold',paddingTop:5}}>
                        { item.title.rendered.replace(/(&([^]+);)/ig,'')}
                    </Text>  
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginVertical:5}}>
                    <Text style={{color: '#999', fontSize: 13}}>
                    <Image source={require('./../../Images/Icon/address.png')} style={{width:15,height:15}}/>
                        { item.acf.address.substr(0,34)}             
                    </Text>  
                    </View>  
            </CardItem>  
          )
      })
     )}
     else{
         return(<Spinner color="blue"/>)
     }
  }
}
export default withNavigation(AllActivities)