import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs ,TabHeading,Text} from 'native-base';
import {Image} from 'react-native';
import DetailsforSelected from './../../Details/DetailsforSelected';
import Location from './../../Details/Location';
import MyHeader from './../../../common/MyHeader'
export default class TabsScreen extends Component {
    static navigationOptions = {
        header: null,
    }
  render() {
    return (
      <Container>
        <MyHeader title={this.props.navigation.getParam('slug')} />
        <Tabs style={{marginTop:'-5%'}}>     
        <Tab heading={<TabHeading style={{backgroundColor:'#f7faf9',marginBottom:'1%'}}><Image source={require('./../../../Images/Icon/gabout.png')} style={{width:25,height:25}} /><Text style={{color:'	#256b1a'}}>About</Text></TabHeading>}>
            <DetailsforSelected id={this.props.navigation.getParam('id')} slug={this.props.navigation.getParam('slug')} img={this.props.navigation.getParam('img')} address={this.props.navigation.getParam('address')} email={this.props.navigation.getParam('email')} phone_number={this.props.navigation.getParam('phone_number')} content={this.props.navigation.getParam('content').replace(/(<([^>]+)>)/ig,'')} />
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor:'#f7faf9'}}><Image source={require('./../../../Images/Icon/map-marker.png')} style={{width:25,height:25}} /><Text style={{color:'	#256b1a'}}>Map</Text></TabHeading>}>         
            <Location url={this.props.navigation.getParam('url')} />
          </Tab>
        </Tabs>
        </Container>
    )
  }
}