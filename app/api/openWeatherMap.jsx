var axios = require ('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=baa5dbe2054e68f2d322c684fde14f30&units=imperial';


// API KEI
// baa5dbe2054e68f2d322c684fde14f30

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function(res) {
            debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res){
            debugger;
            console.log(res.data);
            debugger;
            console.log(res.data.message);
            debugger;
            throw new Error('Invalid City');
        });
    }
}