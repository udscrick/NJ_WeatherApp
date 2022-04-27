const request = require('postman-request')

const geocode = (location,callbackfn) =>{
    const forwardgeocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(location)+'.json?access_token=pk.eyJ1IjoidWRzY3JpY2siLCJhIjoiY2s1bDVoZXJkMDk3NDNlbnp4aXVmMmg0eSJ9.SyUUZ5QP3kA82cByy1YhJQ&limit=1'
  request({
    url:forwardgeocodeurl,
    json:true
  },
  (err,response)=>{ 
    //For any given request, we will only have an error or a response, both will never exist at the same time
    if(err){
      callbackfn("Check Connection",undefined)
    }
    else{
      if(response.body.error){
        callbackfn("Check Request Params",undefined)
        
      }
      else if(!response.body.features||response.body.features.length==0){
        callbackfn("Enter a valid location",undefined)
      }
      else{
        // console.log("Latitude is: ",response.body.features[0].center[0])
        // console.log("Longiitude is: ",response.body.features[0].center[1])
        let lat = response.body.features[0].center[0]
        let long = response.body.features[0].center[1]
        // getWeather(lat,long)
        callbackfn(undefined,{
          lat:response.body.features[0].center[1],
          long: response.body.features[0].center[0],
          location: response.body.features[0].place_name
        })//In case of a successful request, the error argument will be undefined
        
      }
    }
    
  })
  }

  module.exports = geocode