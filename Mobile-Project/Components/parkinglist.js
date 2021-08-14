import  React from "react";
import { View , Text, TouchableOpacity, ViewOverflow } from 'react-native';
import {StyleSheet} from 'react-native';
import {  FlatList } from "react-native";



export const ParkingScreen= ( props) => {

    let apiArray = props.parking;
    return (
        <View style={styles.container}>
            <FlatList
                data={apiArray}
                keyExtractor={item => item.attributes.Straat}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('Details', item)}>
                      
                        <Text style={styles.item}>
                            {item.attributes.Adres}</Text>
                        
                    </TouchableOpacity>
                )} />
        </View>
    );
}
    
    
    
    const styles = StyleSheet.create({
        container : {
          flex:1,
          backgroundColor:'#FCFCFC',
         
        
        },
    
        item:{
          backgroundColor:'#BE2929',
          marginTop:10,
          padding:50,
          height:10,
          color:'#fff', 
          
          
    
        }
      });
   