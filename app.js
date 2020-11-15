const request= require('request')

const url = 'http://api.weatherstack.com/current?access_key=2e1f82819a963adadd4315fbc2c0cead&query=37.8267,-122.4233&units=f'

request({ url: url,json:true },(error,response)=>{
    if(error){
        console.log('Unable to connect to weather service')
    }else if(response.body.error){
        console.log('Unable to find location')
    }else{
        console.log("It is currently "+response.body.current.temperature+"degrees out. There is  a "+response.body.current.precip+"% chance of rain." )
    }
   
})

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3JrYWtpbmciLCJhIjoiY2toaW9saXhkMTM1MjJybWNhcTJ1cHJuOSJ9.3i8ZBr9souRJoSU4MIPynw&limit=1'
 
request({url:url2 , json:true},(error,response)=>{
    if(error){
        console.log('Unable to get location service')
    }else if(response.body.features.length===0){
        console.log('Cannot find this location')
    }else{
        console.log('the latitude is '+response.body.features[0].center[1]+' and the longitude is '+response.body.features[0].center[0])
    }
})