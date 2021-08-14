import React from 'react';
import { stack } from '../App';
import { Favolist } from './favolist';



export const FavorietenScreen = (props) => {

    let favo = props.favo;
    
    return(
   <stack.Navigator>
       <stack.Screen name="listwithFavo"  options={{
           title:"PARKANT",
           headerStyle:{backgroundColor:'#0064b4'},
           headerTintColor:"#fff",
           headerTitleStyle:{fontSize:18}
           }}>
               {
                   props =><Favolist {...props} datafavo={favo}/>
               }
           </stack.Screen>

   </stack.Navigator>
    )
}




