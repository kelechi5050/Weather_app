const request = require('request')

const forecast = (latitude, longitude, callback) => {
const url = 'https://api.darksky.net/forecast/a35399a96f9b2611f0aa1ce94edfba26/' + latitude + ',' + longitude

request({ url, json: true }, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
 
    } else if (body.error) {
        callback('Unable to find location', undefined )

    } else {
        callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currentlyprecipProbability + '% chance of rain.')
    }
})

}

module.exports = forecast