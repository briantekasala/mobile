
import React from 'react';
import {StyleSheet , View , Text, TouchableOpacity} from 'react-native';
import { Button } from 'react-native';
import {useState} from 'react';
import { withNavigation } from 'react-navigation';
import { Camera } from 'expo-camera';
import { CameraScreen } from './CameraScreen';










export const DetailScreen  = ( props ) => {
    const [click , Setclick] = useState(true);
    const Setfavo= props.Sfavo;
    const navigation = props.navigation;

   
const data = props.route.params;
  
return (
    
    
    

<Detailweergaven data={data}  set_favo = {Setfavo} set_click={Setclick} click={click} navigation={navigation}/>

)


}






    
const Detailweergaven = (props)=>{

    let data = props.data;
    const Sclick = props.set_click;
    const click = props.click;
    const Sfavo = props.set_favo;


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
            {
                click != false ? <Button title="Toevoegen aan Favorieten" color="#BE2929" onPress={()=>{
                    Sclick(false)
                    Sfavo(data);
                    
                }}/>:
                <Button title="Verwijderen van item" color="#BE2929" onPress={()=>{Sclick(true)}}/>
            }
      <Button title="Camera" onPress={() => props.navigation.navigate('CameraScreen')}>
          <CameraScreen></CameraScreen></Button>
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
    },
    camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
      },
      button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        borderColor: 'red',
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
      },
      snapButton :{
        alignSelf: 'flex-end',
        backgroundColor: 'white', 
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        flexDirection: "row",


         
      }

})

