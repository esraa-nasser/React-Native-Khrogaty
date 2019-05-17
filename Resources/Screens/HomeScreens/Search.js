
import React, {Component} from 'react';
import {Image,Dimensions,ImageBackground,TextInput,WebView} from 'react-native';
import { Container,Left,Right,Body,Content ,Card,CardItem, Button, Spinner, Icon, Title,Text,Footer,FooterTab} from 'native-base';
import MyHeader from './../../common/MyHeader'

type Props={}
export default class RestaurantsDetails extends Component<Props> {
    state = {SearchedPlace:"",Search:0}    
    static navigationOptions = {
        header: null,
    }
    render(){
        return(     
            <Container>
                <MyHeader title="Search"/>
           {this.chkSearchOrWebView()}
                        <Footer style={{backgroundColor:'transparent',flexDirection:'row'}} > 
                            <FooterTab style={{backgroundColor:'transparent',flexDirection:'row'}} >
                            <Button vertical transparent onPress={()=>{
                                this.props.navigation.navigate('Home')
                            }}>
                                <Image source={require('./../../Images/Icon/home.png')} style={{width:25,height:25}}/>
                                <Text uppercase={false} style={{color:'#999',fontSize:8,textAlign:'center',flexWrap:'wrap'}}>Home</Text>
                            </Button>
                           
                            
                            <Button vertical transparent onPress={()=>{
                                this.props.navigation.navigate('Search')
                            }}>
                                <Image source={require('./../../Images/Icon/gfilter.png')} style={{width:25,height:25}}/>
                                <Text  uppercase={false} style={{color:'#999',fontSize:8,textAlign:'center',flexWrap:'wrap'}}>Filter</Text>
                            </Button>    
                            <Button vertical transparent onPress={()=>{
                                this.props.navigation.navigate('SelectedPlaces')
                            }}>
                                <Image source={require('./../../Images/Icon/find-places.png')} style={{width:25,height:25}}/>
                                <Text  uppercase={false} style={{color:'#999',fontSize:8,textAlign:'center',flexWrap:'wrap'}}>Find Places</Text>
                            </Button>
                              
                            <Button vertical transparent onPress={()=>{
                                this.props.navigation.navigate('SelectedRestaurants')
                            }} style={{width:80}}>
                                <Image source={require('./../../Images/Icon/restaurants.png')} style={{width:25,height:25}}/>
                                <Text  uppercase={false} style={{color:'#999',fontSize:8,textAlign:'center',flexWrap:'wrap'}}>Restaurants</Text>
                            </Button>
                            
                            
                           
                            <Button vertical transparent style={{flex:1,flexDirection:'column'}} onPress={()=>{
                                this.props.navigation.navigate('SelectedActivities')
                            }}>
                                <Image source={require('./../../Images/Icon/todo.png')} style={{width:25,height:25}}/>
                                <Text uppercase={false} style={{color:'#999',fontSize:8,textAlign:'center',flexWrap:'wrap'}}>Things ToDo
                                </Text>
                            </Button>
                           
                        </FooterTab>
                       </Footer>
          </Container>
        )
    }
    chkSearchOrWebView(){
        if(this.state.Search===0){
            return( <Content>               
                    
                 
                <Card transparent style={{marginLeft:0,marginTop:25}}>
                    <CardItem style={{paddingLeft:'5%',paddingTop:-5,flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <TextInput
                            style={{fontStyle:'italic',height: 40, width: '95%', borderColor: 'black', borderWidth: 0.5,borderRadius:8,flex:1,paddingTop:10,paddingRight:10,paddingBottom:10,paddingLeft:0}}             
                            placeholder="  What's On Your Mind ?!"
                            
                            onChangeText={(name) => this.setState({SearchedPlace:name})}
                            value={this.state.SearchedPlace}
                        />
                        <Button style={{marginLeft:'-12%'}} transparent onPress={()=>{
                            this.setState({Search:1})
                        }}>
                            <Icon  name='ios-search' style={{color:'#999'}} />
                        </Button>
                        
                    </CardItem>

                    
                </Card>
                
                <Card transparent style={{paddingHorizontal:70,paddingBottom:-50}}>
                    <CardItem style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}} > 
                        <Image source={require('./../../Images/VectorIcons/nosearch-icon.png')} style={{width:130,height:130}}/>
                        <Text style={{color:'#999',fontSize:18,textAlign:'center',paddingTop:20}}>Search For Any Place</Text>
                    </CardItem>
                </Card>
</Content>)
        }
        else{
            return(
                <WebView source={{uri: `https://www.google.com.eg/search?source=hp&ei=SFfbXLWwIozyasiLupgL&q=${this.state.SearchedPlace}&oq=${this.state.SearchedPlace}&gs_l=psy-ab.12..35i39j0i203j0i67l2j0i203j0j0i67j0i203l3.971.3633..4005...0.0..0.270.1713.0j9j1....3..0....1..gws-wiz.......0i131.AVWgSw-Bqqs`}} />
            )
        }
    }
   
}
