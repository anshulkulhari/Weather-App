const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]
//console.log(location)
if(location===undefined)return console.log('No location entered.Please enter location')
geocode(location, (error, data) => {
    if(error) {
        return console.log(error)
    }
    forecast(data.latitude,data.longitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
    
})

