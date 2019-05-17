
import React, {Component} from 'react';
import {Image,Dimensions,ImageBackground,TextInput} from 'react-native';
import { Container,Left,Right,Body,Content ,Card,CardItem, Button, Spinner, Icon, Title,Text} from 'native-base';
import MyHeader from './../../common/MyHeader'

type Props={}
export default class RestaurantsDetails extends Component<Props> {
    state = {counter: 0, name: 'Esraa', comment: '', addCommentResponse: [], sendingComment: 0,loaded:0,AllComments:[]}    
    static navigationOptions = {
        header: null,
    }
    componentDidMount(){
        fetch(`http://reactnative.website/iti/wp-json/wp/v2/comments?post=${this.props.id}`).then((r)=> r.json())
        .then((rj)=>{
            this.setState({AllComments:rj,loaded:1 })
        })
    }
    render(){
        return(     
            <Content >               
                    
                    <Card transparent style={{marginLeft:0,marginTop:-20}}>
                        <CardItem style={{paddingLeft:-6,paddingTop:-5}}>
                                <Image source={{uri: this.props.img}} style={{width:Dimensions.get('window').width, height: 200,}} />
                        </CardItem>
                    </Card>
                    <Card transparent style={{paddingHorizontal:20,paddingBottom:-50}}>
                        <CardItem style={{flex:1,flexDirection:'column',paddingBottom:-10,borderRadius:5,borderWidth:0.5,borderColor:'black',alignItems:'flex-start',justifyContent:'center'}} bordered> 
                            
                            <Text style={{fontWeight:'bold',fontSize:18,alignSelf:'flex-start',color:'#000000',paddingBottom:-25}}>{this.props.slug} </Text>
                            <Text style={{}}>{this.props.content.replace(/(&([^]+);)/ig,'')}</Text>
                        </CardItem>
                    </Card>
                    <Text style={{fontWeight:'bold',marginHorizontal:42,color:'black'}}>More Information</Text>
                    <Card style={{marginLeft:22,marginRight:22,borderRadius:8,borderWidth:0.5,borderColor:'black'}}>
                        <CardItem style={{}}>
                            <Image source={require('./../../Images/Icon/address.png')} style={{width:25,height:25}} />
                            <Text >{this.props.address}</Text>
                        </CardItem>
                        
                        <CardItem >
                            <Image source={require('./../../Images/Icon/call.png')} style={{width:25,height:25}} />
                            <Text>{this.props.phone_number}</Text>
                        </CardItem>
                        <CardItem >
                            <Image source={require('./../../Images/Icon/mail.png')} style={{width:25,height:25}} />
                            <Text>{this.props.email}</Text>
                        </CardItem>
                    </Card>
                    <Text style={{marginHorizontal:42,fontWeight:'bold',color:'black'}}>Leave Comment</Text>
                    
                        {this.getAllComments()}
                    <Card style={{marginLeft:22,marginRight:22,borderRadius:8,borderWidth:0.5,borderColor:'black'}}>
                        <CardItem>
                            <TextInput
                                style={{height: 35, width: '95%', borderColor: 'black', borderWidth: 0.5,borderRadius:15}}
                                onChangeText={(name) => this.setState({name})}
                                value={this.state.name}
                                placeholder="enter Your name"
                            />
                            </CardItem>
                            <CardItem>
                            <TextInput
                                style={{height: 35, width: '95%', borderColor: 'black', borderWidth: 0.5,borderRadius:15}}
                                onChangeText={(comment) => this.setState({comment})}
                                value={this.state.comment}
                                placeholder="Enter Your comment"
                            />
                            {this.commentButton()}
                        </CardItem>
                    </Card>
                </Content>
        );
    }
    getAllComments(){
        if(this.state.loaded===1&&this.state.AllComments!==undefined){
            return(this.state.AllComments.map((item)=>{
                var hour=new Date(item.date).toLocaleTimeString();
              return(  
                <Card style={{marginLeft:22,marginRight:22,borderRadius:8,borderWidth:0.5,borderColor:'black'}}>      
                <CardItem style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginTop:-20}}>       
                  
                    <Left style={{flex:1,paddingBottom:20}}>            
                      <Image source={require('./../../Images/Icon/profile.png')} style={{width:30,height:30}}/>
                      <Text style={{color: '#000', fontSize: 15, fontWeight: 'bold'}}>
                            { item.author_name}
                        </Text>
                        
                        <Text style={{color: '#999', fontSize: 10,width:'100%'}}>
                            { this.tConvert(hour)}
                        </Text>    
                                          
                        </Left>   
                </CardItem> 

                <CardItem style={{marginTop:-25}}>
                <Text >
                            { (item.content.rendered).replace(/(&([^]+);)/ig,'')}
                        </Text>     
                </CardItem> 
                </Card>
    
              )
          })
         )}
    }
    commentButton(){
        if(this.state.sendingComment === 0){
            return(
                <Button style={{marginLeft:'-12%'}} transparent onPress={() => {
                    this.setState({sendingComment: 1});
                    this.sendComment()
                }}>
                    <Image source={require('./../../Images/Icon/telegram.png')} style={{width:26,height:22}}/>
                </Button>
            )
        }else{
            return(
                <Button onPress={() => {
                }}>
                    <Spinner />
                </Button>

            )
        }
    }
    sendComment() {
        fetch(`http://reactnative.website/iti/wp-json/wp/v2/comments?author_name=${this.state.name}&author_email=EsraaNasser&content=${this.state.comment}&post=${this.props.id}`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((resjson) => {
                this.setState({addCommentResponse: resjson, sendingComment: 0, name: "", comment: ""}, function () {
                    console.log(resjson);
                })
            })
    }

tConvert (time){
   
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }}
