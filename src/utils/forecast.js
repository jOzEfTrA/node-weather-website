const request = require('request')

const forecast = (latitude, longitude,location, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=11d92ef2d0f9a569415f0c4fc2f750c4&units=metric`
    

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                windSpeed : body.wind.speed,
                temp:  body.main.temp ,
                description: body.weather[0].description,
                url,
                location,
            } )

        }
    })
}

module.exports = forecast