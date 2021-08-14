import React from 'react';
import {StyleSheet , View , Text} from 'react-native';
import {stack} from '../App.js';
import {MapScreen} from '../Components/Map';
import {FlatList} from 'react-native-web';
import { DetailScreen } from './DetailScreen.js';




export const HomeScreen  = (props)=> {
  
  let mapdata = props.fetch;
  
  return (
<stack.Navigator>
 <stack.Screen name='Map'
  options={
    {
    title:"PARKANT", 
    headerStyle:{backgroundColor:'#0064b4'}, 
    headerTintColor:"#fff",
    headerTitleStyle: {
    fontSize:18,
    }
  }
} 
>
{props => <MapScreen {...props} map={mapdata}/>}
</stack.Screen>



<stack.Screen name="minidetail"

options={{
  title:"Details"
}}

component={minidetail}/>



</stack.Navigator>
  )
}



export const minidetail = ({route})=> {

  let data = route.params;
  return(

    <View style={styles.container}>
    <View style={styles.TextBlock}>
    <Text style ={styles.Text_header}>{
        data.attributes.NAAM == null ? <Text style={styles.Text_header}>{data.attributes.Straat}</Text>
        : <Text style={styles.Text_header}>{data.attributes.NAAM}</Text>
    }</Text>
    <Text style={styles.Text_info}>Capaciteit: {data.attributes.Totaal_Plaatsen}</Text>
    <Text style={styles.Text_info}>Autostaanplaats(en): {data.attributes.Max_Auto}</Text>
    
    {
        data.attributes.Max_Fiets != null ? <Text style={styles.Text_info}>Fietsstaanplaats(en): {data.attributes.Max_Fiets}</Text>
        : null}
    {
    data.attributes.Max_Motor != null ?
            <Text style={styles.Text_info}>Motorstaanplaats(en): {data.attributes.Max_Motor}</Text>
        : null}
    <Text style={styles.Text_info}>Postcode: {data.attributes.Postcode}</Text>
    <Text style={styles.Text_info}>District: {data.attributes.District}</Text>
    <Text style={styles.Text_info}>Eigenaar: {data.attributes.Eigenaar}</Text> 
    </View>   
     
    </View>

  )
}





const styles = StyleSheet.create({
  container: {
      flex:1,
    
  },
  TextBlock:{
      margin:10,
      padding:10,
      backgroundColor:"#BE2929"

  },
  Text_header : {
      color:'white',
      padding:5,
      fontSize:30
      
  },
  Text_info: {
      color:'white',
      padding:5,
      fontSize:20
  }
})








































 