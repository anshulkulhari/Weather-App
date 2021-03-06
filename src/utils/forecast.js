const request = require('request')

const forecast = (latitude, longitude, callback) => {
   // const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=f'
   const url = 'http://api.weatherstack.com/current?access_key=2e1f82819a963adadd4315fbc2c0cead&query='+ latitude + ',' + longitude 
    request({url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
        }
    })
}

module.exports = forecast