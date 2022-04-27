const request = require('postman-request')
const geocode = require('./utils/geocode')
const getweather = require('./utils/getweather')

//api url: http://api.weatherstack.com/current?access_key=5a290fce92f5f834d943025418f6252f&query=19.075983,72.877655








// const forwardgeocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(location)+'.json?access_token=pk.eyJ1IjoidWRzY3JpY2siLCJhIjoiY2s1bDVoZXJkMDk3NDNlbnp4aXVmMmg0eSJ9.SyUUZ5QP3kA82cByy1YhJQ&limit=1'
// request({
//   url:forwardgeocodeurl,
//   json:true
// },
// (err,response)=>{ 
//   if(err){
//     console.log("Check connections")
//   }
//   else{
//     if(response.body.error){
//       console.log("Check request params")
//     }
//     else if(!response.body.features){
//       console.log("Enter a valid location")
//     }
//     else{
//       console.log("Latitude is: ",response.body.features[0].center[0])
//       console.log("Longiitude is: ",response.body.features[0].center[1])
//       let lat = response.body.features[0].center[0]
//       let long = response.body.features[0].center[1]
//       // getWeather(lat,long)
//       getWeather(lat,long)
//     }
//   }
  
// })






if(process.argv[2]){
  let location = process.argv[2].toLowerCase()
  geocode(location,(error,{lat:latitude,long:longitude,location}={} )=>{//Using object destructuring to get lat and long properties from 'data' and renaming them,
    //SO, for data.lat we have latitude = data.lat
    if(error){
      return  console.log("Error: ",error)
    }
   
    // console.log("Data: ",data)
    let passdata = {
      latitude, //Using properties shorthand. Same as latitude = latitude
      longitude
    }
    getweather(passdata,(error,forecastdata)=>{
      if(error){
        return  console.log("Weather error is: ",error)
      }
      
      console.log("Location: ",location)
      console.log("Weather data is: ",forecastdata)
    })
  })
}

else {

  console.log("Please provide a valid location")
}



// let data = {
//   latitude: 73.01,
//   longitude : 19.03
// }

