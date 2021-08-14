import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,TextInput, View, Button } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './Components/HomeScreen.js';
import { ListScreen } from './Components/ListScreen.js';
import { ActivityIndicator, FlatList } from "react-native";
import { FavorietenScreen } from './Components/favorietenscreen.js';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';





export const stack = createStackNavigator();
export const MainTab = createBottomTabNavigator();



export default function App()   {
  const [api , SetApi] = useState([])
  const [laden,Setladen] = useState(true);
  const [favo, Setfavo]= useState([]);
  console.log(favo);
  //bezig met favo : als je dit ziet heb je mijn deel ook.
  
  useEffect(()=>{
  
      const FetchData =  async()=>{
      const result = await fetch('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek5/MapServer/581/query?where=1%3D1&outFields=*&outSR=4326&f=json');
      const data = await result.json();

      if (data != "") {
        SetApi(data.features)
        Setladen(false)
      }
      
    };
    
    FetchData();
  },[])
  

  if (!laden) {
    
  return (
   <NavigationContainer>
     <MainTab.Navigator>
      
      <MainTab.Screen name='Map' options={{
        tabBarIcon: ({color,size})=>(
          <FontAwesome name="map-pin" size={size} color={color} />
        )
      }}>
      {props=><HomeScreen  {...props} fetch={api}/>}
        </MainTab.Screen>
      
      <MainTab.Screen name="List" options={{
        tabBarIcon:({color,size})=>(
          <Entypo name="list" size={size} color={color} />  
        )
      }}>
        {props=><ListScreen {...props} listdata={api} s_favo={Setfavo} />}
      </MainTab.Screen>
      
      <MainTab.Screen name='Favorieten' options={{
        tabBarIcon:({color,size})=>(
          <Fontisto name="favorite" size={size} color={color} />
        )
      }}>

        {props => <FavorietenScreen {...props} favo ={favo}/>}

        </MainTab.Screen>
     </MainTab.Navigator>
   </NavigationContainer>
   
  );
}
else {
  return(
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <ActivityIndicator size="large" color="#0064b4"/>
    </View>
  )
}

}



