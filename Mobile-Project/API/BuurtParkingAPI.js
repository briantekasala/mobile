import fetch from 'node-fetch';
import React, { useEffect, useState } from 'react';
//https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek5/MapServer/581/query?where=1%3D1&outFields=*&outSR=4326&f=json

export const parkingData = ()=> {
    
    const [parkingdata,Setparkingdata] = useState([])

    useEffect(()=>{
        const fetchdata = async ()=> {
            let result  = await fetch('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek5/MapServer/581/query?where=1%3D1&outFields=*&outSR=4326&f=json');
            let data = await result.json();
            Setparkingdata(data);
           
            
        }

       
    },[])


    return parkingdata;
 
}
    
 
