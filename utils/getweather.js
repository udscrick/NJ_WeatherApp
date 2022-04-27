const request = require('postman-request')

const getweather = ({latitude,longiitude},callback) => {
  //Without destructuring
    // const url = 'http://api.weatherstack.com/current?access_key=5a290fce92f5f834d943025418f6252f&query='+data.latitude+','+data.longiitude+'&units=f'

    //With destructuring
    const url = 'http://api.weatherstack.com/current?access_key=5a290fce92f5f834d943025418f6252f&query='+latitude+','+longiitude+'&units=f'
    // console.log("Url is: ",url)
    request({
      url: url,
      json: true
  },(error,{body})=>{
    if(error){
        callback("Connection Refused to WeatherStack",undefined)
    //   console.log("Check connection")
    }
    else{
      if(body.error){
        callback("Check the parameters passed to weatherapi",undefined)
        // console.log("Check the request params")
      }
      else{
        const data = body
        callback(undefined,"It is currently "+body.current.temperature+" degree farenheit.There is a "+body.current.precip+" chance of rain")
    // console.log("It is currently "+response.body.current.temperature+" degree farenheit.There is a "+response.body.current.precip+" chance of rain")
      }
    }
      
  })
  }

  module.exports = getweather;