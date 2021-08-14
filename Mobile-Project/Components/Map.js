import MapView, { Callout, Marker } from 'react-native-maps';
import React from 'react';
import { View, Text} from 'react-native';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {useState, useEffect} from 'react';
import {Geojson} from 'react-native-geojson'
import { buurtParking, parkingAPI, apiArray} from '../API/BuurtParkingAPI';
import {Alert, render} from 'react-native-web';
import {Title} from 'react-native-paper';
import {parkingData} from '../API/BuurtParkingAPI';
import * as Location from 'expo-location';





export const  MapScreen = (props)=> {
  
  // Code om locatie van de gebruiker te verkrijgen, coordinaten uit Object worden doorgespeeld naar MapView & Markers
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      JSON.stringify(location)
      setLocation(location);
    })();
  }, []);

  let datamap = props.map;
  console.log(location)
 
let text = 'Error';
  if (errorMsg) {
    text = errorMsg;
  }
  
  
  if(location == null){
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <ActivityIndicator size="large" color="#0064b4"/>
      </View>
  );
}
    return (
      <View style={MapStyle.container}>      
    <MapView style={MapStyle.Map}  region={{
   latitude: location.coords.latitude,
   longitude: location.coords.longitude,
    latitudeDelta: 0.25,
    longitudeDelta: 0.20,
    }}
    > 
      <Marker style={MapStyle.name} key= "UserLocation" title="Your Location" 
      coordinate = {{latitude : location.coords.latitude,
      longitude: location.coords.longitude }}
      pinColor={'turquoise'}
      showsMyLocationButton={true}></Marker>
    {
      datamap.map((m => <Marker
        key = {m.attributes.OBJECTID}
        title={m.attributes.NAAM}
        coordinate = {
          {latitude : m.geometry.y, longitude: m.geometry.x }
        }
         > 
      
     
        <Callout tooltip onPress={()=>props.navigation.navigate('minidetail', m)}>
        <View>
          <View style={MapStyle.box}>
            
          {
            m.attributes.NAAM == null ? <Text style ={MapStyle.name} >{m.attributes.Eigenaar}{"\n"}{m.attributes.Postcode}</Text>
            : <Text style ={MapStyle.name} >{m.attributes.NAAM}{"\n"}{m.attributes.Postcode}</Text>
          }</View >
          <View style={MapStyle.arrowborder}/>
          <View style={MapStyle.arrow}/>
          
        </View>
      
        </Callout>
      
         </Marker>
         
         ))
    }
    
     
    </MapView>
    </View>
    )
}


    const MapStyle = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          
         
        },
        Map: {
          flex:1,
          alignItems:"stretch",
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },

        box:{
          flexDirection:'column',
          alignSelf:'flex-start',
          backgroundColor:"#0064b4",
          borderRadius:25,
          
          opacity: 0.90,
          padding:10,
          width: 155,
          justifyContent: 'space-around'
          

        },

        name:{
          flex: 1,
          fontSize:14,
          marginBottom:5,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#fff',
          
        },
        arrow:{
          backgroundColor:'transparent',
          borderColor:'transparent',
          borderTopColor:"#0064b4",
          borderWidth:20,
          alignSelf:'center',
          marginTop:-42,
          opacity: 0.90

        },
        arrowborder:{
          backgroundColor:'transparent',
          borderColor:'transparent',
          borderTopColor:"#007a87",
          borderWidth:20,
          alignSelf:'center',
          marginTop:-0.5,
          opacity: 0.90
        }

        

      });

     