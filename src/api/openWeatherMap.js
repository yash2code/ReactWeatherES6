import axios from 'axios';

const weather_url = 'http://api.openweathermap.org/data/2.5/weather?appid=ef799686e2cecf10b971d51c4df3f268&units=metric';

export default {

	getTemp(location){
		var encodedLocation = encodeURIComponent(location);
		var requrl = `${weather_url}&q=${encodedLocation}`;

		return axios.get(requrl).then(function(res){

 if (res.data.cod === 200){
                return JSON.stringify(res.data.main.temp);//.data.main.temp;
            }
            throw res.data.cod;
        }, res => {
            throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
        });


	}
}