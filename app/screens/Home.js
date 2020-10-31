import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Dimensions} from 'react-native';
import {Navigation} from 'react-native-navigation'
import Activity from './Activity.js'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
const Home = (props) => {
    var user = "David"
    var balance = "5.00" 
    const images = [
        'https://placeimg.com/640/640/nature',
        'https://placeimg.com/640/640/people',
        'https://placeimg.com/640/640/animals',
        'https://placeimg.com/640/640/beer',
      ];
    function handlePush(name){
        if(name=="Activity"){
            Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
                bottomTabs: {
                  currentTabIndex: 1
                }
              });
        }else if(name=="Setting"){
            Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
                bottomTabs: {
                  currentTabIndex: 2
                }
              });
        }else if(name=="Account"){
            Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
                bottomTabs: {
                  currentTabIndex: 3
                }
              });
        }else{
            Navigation.push(props.componentId, {
                component: {
                  name: name, // Push the screen registered with the 'Settings' key
                  options: { // Optional options object to configure the screen
                    topBar: {
                      title: {
                        text: name // Set the TopBar title of the new Screen
                      }
                    }
                  }
                }
              });
        }
        
    }
  return (
    <Container>
        <Content>
            <View style={{flex:1, justifyContent:'center', alignSelf:'center'}}>
            <Text>Hello, {user} !</Text>
            </View>
          <Card style={{width:'80%', alignSelf:'center'}}>
              <View style={{justifyContent:'space-between', flex:1, flexDirection:"row"}}>
              <CardItem header>
              <Text>Balance</Text>
            </CardItem>
            <TouchableOpacity onPress={()=>{alert("Topup Here")}}>
            <CardItem header>
              <Text>SGD {balance}</Text>
            </CardItem>
            </TouchableOpacity>
            
              </View>
              <View style={{borderColor:'black', borderWidth:1}}/>
              <CardItem>
                  <Body style={{flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
                      <TouchableOpacity onPress={()=>{handlePush('Activity')}}>
                      <Image source={require('../image/activity.png')} style={{height: 50, width: 50, alignSelf:'center'}}/>
                      <Text>Activity</Text>     
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{handlePush('Setting')}}>
                      <Image source={require('../image/setting.png')} style={{height: 50, width: 50, alignSelf:'center'}}/>    
                      <Text>Setting</Text> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{handlePush('Account')}}>
                      <Image source={require('../image/account.png')} style={{height: 50, width: 50, alignSelf:'center'}}/>   
                      <Text>Account</Text>  
                      </TouchableOpacity>
                </Body>
              </CardItem>
          </Card>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
              <TouchableOpacity onPress={()=>{handlePush('Activity')}}>
                      <Image source={require('../image/activity.png')} style={{height: 50, width: 50, alignSelf:'center'}}/>
                      <Text>Activity</Text>     
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{handlePush('Setting')}}>
                      <Image source={require('../image/setting.png')} style={{height: 50, width: 50, alignSelf:'center'}}/>    
                      <Text>Setting</Text> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{handlePush('Account')}}>
                      <Image source={require('../image/account.png')} style={{height: 50, width: 50, alignSelf:'center'}}/>   
                      <Text>Account</Text>  
            </TouchableOpacity> 
          </View>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
              <TouchableOpacity onPress={()=>{handlePush('Activity')}}>
                      <Image source={require('../image/activity.png')} style={{height: 50, width: 50, alignSelf:'center'}}/>
                      <Text>Activity</Text>     
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{handlePush('Setting')}}>
                      <Image source={require('../image/setting.png')} style={{height: 50, width: 50, alignSelf:'center'}}/>    
                      <Text>Setting</Text> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{handlePush('Account')}}>
                      <Image source={require('../image/account.png')} style={{height: 50, width: 50, alignSelf:'center'}}/>   
                      <Text>Account</Text>  
            </TouchableOpacity> 
          </View>
         <View style={{alignSelf:'center'}}>
         <SliderBox
                autoplay
                images={images}
                sliderBoxHeight={200}
                onCurrentImagePressed={index =>
                    alert(`image ${index} pressed`)
                }
                parentWidth={Dimensions.get('window').width*0.8}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                dotStyle={{
                    width: 15,
                    height: 15,
                    borderRadius: 15,
                    marginHorizontal: 10,
                    padding: 0,
                    margin: 0
                }}
            />
         </View>
        </Content>
      </Container>
  );
};


  

export default Home
