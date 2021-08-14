import React from 'react';
import {StyleSheet , View , Text, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';

import { FlatList } from 'react-native';
/**
 * <Text style={styles.Text_header}>{favodata.attributes.NAAM}</Text>
            <Text style={styles.Text_info}>Maxauto:{favodata.attributes.Adres}</Text>
 */

 export const Tonenfavo = (props) =>{
    
    let Dfavo = props.favoarray;

    return(
        Dfavo.map((a,x)=><Text style={favostyles.item}>{a}</Text>)
    )

 }

    export const Favolist= (props) => {
        
        let favodata =props.datafavo;
        let array = [];
    

        const [binnen, Setbinnen] =useState(false);

        useEffect(()=>{

            if (favodata != "") {
                Setbinnen(true)
                array.push(favodata.attributes.Eigenaar)
                console.log(array)
            }
        })
       
      if (binnen) {
        return(

            <SafeAreaView style={favostyles.container}>
              <ScrollView View={favostyles.ScrollView}>

              {
                  <Text style={favostyles.item}>
                  {favodata.attributes.Eigenaar}
                  </Text>
                  }
                             

              </ScrollView>

                   
         
       </SafeAreaView>
       
        )
       
      }

      else{

        return(

            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:"center",
                backgroundColor:"#fff",
            }}>
                <View style={{
                    
                    backgroundColor:'#0064b4',
                    padding:40,
                    borderRadius:25,
                    opacity:0.95
                }}>
        <Text style={{
        fontSize:20,
        textAlign:"center",
        color:'#fff',
        }}
>
    U moet nog elementen toevoegen !
    </Text>
    </View>
    </View>
        )

      }
        
        

    }
        
 
    const favostyles = StyleSheet.create({
        container : {
          flex:1,
          backgroundColor:'#FCFCFC'
        
        },
        ScrollView:{
            marginHorizontal:10,
        }
        ,
    
        item:{
          backgroundColor:'#BE2929',
          marginTop:10,
          padding:50,
          height:10,
          color:'#fff',
          textAlign:"center"
          
    
        }
      });
   

   

   
   
   
   
   
   
   
   
   
   
   
   //*  <FlatList data={favodata}keyExtractor={item=>item.attributes.Straat}renderItem={({item})=>( <Text style={favostyles.item}>{item.attributes.Straat}{"\n"}{item.attributes.Eigenaar} </Text>)}>*/
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    const styles = StyleSheet.create({
        container: {
            flex:1,
          
        },
        TextBlock:{
            
            padding:10,
            backgroundColor:"#BE2929",
            marginTop:10
    
        },
        Text_header : {
            color:'white',
            padding:5,
            fontSize:45
            
        },
        Text_info: {
            color:'white',
            padding:5,
            fontSize:20
        }
    })







     /**
     *       <View style={styles.container}>
            <View style={styles.TextBlock}>
            <FlatList
            
            data ={favodata}
            keyExtractor ={(Item)=>Item.attributes.OBJECTID}
            renderItem
            
            
            />
            </View>   
            </View>





            <View style={styles.container}>
            <FlatList
            
            data ={favodata}
            keyExtractor ={(Item)=>Item.attributes.OBJECTID}
            renderItem ={({Item})=>(
            <Text style={styles.Text_header}>{favodata.attributes.Adres}</Text>
            )}
            
            
            />
            </View>  
     */