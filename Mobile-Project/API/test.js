

const fetch = require('node-fetch'); 

(async() => {
    try{
    let data = await fetch('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek5/MapServer/581/query?where=1%3D1&outFields=*&outSR=4326&f=json');

    
    let response = await data.json() ;
    
    for( let i = 0; i < 1; i++){
        console.log( response.features[0])
        
    }}
    catch(e){
        console.log(e);
    }})();

    

   

