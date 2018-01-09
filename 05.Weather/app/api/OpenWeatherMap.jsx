var axios = require('axios');

const WEATHER_MAP_URL  =
    'http://api.openweathermap.org/data/2.5/weather?appid=1d55319993e2676cae5afdf5410cdab8&units=Metric';

module.exports = {
    getTemp: function (loc) {
        var encodedLocation = encodeURIComponent(loc);
        var requestUrl = `${WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}
