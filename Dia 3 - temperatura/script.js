document.querySelector('.busca').addEventListener('submit', async (event) => {

    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        showLoading(`Carregando...`);
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=d06cdb298fafc83c520d5ab677fc477e&lang=pt_br&units=metric`;

    let results = await fetch(url);
    let json = await results.json();

    if(json.cod === 200){
        showInfo({
            name: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed
        })
    }else{
        showLoading(`Localização não encontrada`);
        return;
    }

    console.log(json);
});

function showLoading(msgLoading){
    document.querySelector('.aviso').textContent = msgLoading;
}

function showInfo(jsonParam){
    showLoading('');

    document.querySelector('.resultado').style.display = 'flex';
    document.querySelector('.titulo').textContent = `${jsonParam.name}/${jsonParam.country}`;
    document.querySelector('.tempInfo').innerHTML = `${jsonParam.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${jsonParam.windSpeed} <span>km/h</span>`;

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${jsonParam.tempIcon}@2x.png`);
}