import vetements from "./vetements";

const selectDress = (data) => {
    const v = vetements
    const t = data.daily.temperature_2m_max;
    const n = data.daily.weathercode;
    const j = data.daily.time.length;
    let filtrage = []
    for (let i=0; i<j; i++) {
        

        filtrage = v.filter(ve => ve.id_weather_code.includes(n[i]) && t[i].toFixed(0) <= ve.temperatureMax && t[i].toFixed(0) >= ve.temperatureMin)
        
    };
const cloth = filtrage.map((item) => {
    return ({quantity : (data.daily.time.length*item.ratio ? Math.ceil(data.daily.time.length*item.ratio) : 1),
    clothing :item})
    

    });
   
    return cloth
}

export default selectDress 