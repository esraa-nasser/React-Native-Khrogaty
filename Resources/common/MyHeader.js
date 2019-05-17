import React, {Component} from 'react';
import {Image,Dimensions,ImageBackground,TextInput} from 'react-native';

import { Container,Left,Body,Content ,Card,CardItem, Button, Spinner, Icon, Title,Text} from 'native-base';
import { withNavigation } from 'react-navigation';
type Props = {};
class MyHeader extends Component<Props> {
    render(){
        return(
                <Card transparent style={{marginLeft:-17,marginTop:-20}}>
                <CardItem style={{}}>
                        <ImageBackground source={require('./../Images/Background/theme-header.png')} style={{width:Dimensions.get('window').width, height: 80}} >
                            <Button Left transparent style={{}} onPress={()=>{
                                this.props.navigation.goBack()
                            }}>
                                <Image source={require('./../Images/Icon/left-arrow.png')} style={{width:30,height:15,marginLeft:35,marginTop:40}}/>
                            </Button>
                            <Title style={{marginTop:-18,marginRight:100}}>{this.props.title}</Title>
                        </ImageBackground>
                </CardItem>
            </Card>
        )    
  
    }
}


    export default withNavigation(MyHeader);