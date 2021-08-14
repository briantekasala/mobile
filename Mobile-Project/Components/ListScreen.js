import React from "react";
import { View , Text } from 'react-native';
import {ParkingScreen} from '../Components/parkinglist'
import {DetailScreen} from './DetailScreen';
import { stack } from "../App";
import { CameraScreen } from "./CameraScreen";






export const ListScreen = (props) => {
 
  const s_favo = props.s_favo;
  let data= props.listdata;
 
  return(
  
    <stack.Navigator>
      <stack.Screen name="parkinglist"
      options={
        {
        title:"PARKANT ", 
        headerStyle:{backgroundColor:'#0064b4'}, 
        headerTintColor:"#fff",
        headerTitleStyle: {
        fontSize:18,
        }
      }
    }
 >
   {props=><ParkingScreen {...props} parking ={data}/>}

    </stack.Screen>
    

    <stack.Screen name="Details" >
      {props => <DetailScreen {...props} Sfavo={s_favo}/>}
      </stack.Screen>

      <stack.Screen name="CameraScreen" component={CameraScreen}/>




    </stack.Navigator>
 
  )
}





 

