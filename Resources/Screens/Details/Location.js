
import React, {Component} from 'react';
import {Text, View,AsyncStorage,WebView} from 'react-native';
import MyHeader from './../../common/MyHeader';
import { Container, Content } from 'native-base';

type Props = {};
export default class Location extends Component<Props> {
    static navigationOptions = {
        header: null,
    };
  render() {
    return (
     <Container>
       
       
                    <WebView source={{uri: this.props.url}} />
                
     </Container>
    );
  }
  
}

