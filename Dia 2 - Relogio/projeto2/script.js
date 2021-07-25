const digitalElement = document.querySelector('.digital');

const seconds = document.querySelector('.p_s');
const minutes = document.querySelector('.p_m');
const hour = document.querySelector('.p_h');

function updateClock(){
    const newDate = new Date(); //pegando a data,hora,minutos etc atuais
    const newSeconds = newDate.getSeconds();
    const newMinutes = newDate.getMinutes();
    const newHour = newDate.getHours();

    digitalElement.innerHTML = `${addZero(newHour)}:${addZero(newMinutes)}:${addZero(newSeconds)}`; // atribuindo ao html essas informações


    //relogio analogico 

    let sDegrees = ((360 / 60) * newSeconds) - 90;
    let mDegrees = ((360 / 60) * newMinutes) - 90;
    let hDegrees = ((360 / 12) * newHour) - 90;
    seconds.style.transform = `rotate(${sDegrees}deg)`;
    minutes.style.transform = `rotate(${mDegrees}deg)`;
    hour.style.transform = `rotate(${hDegrees}deg)`;
}

function addZero(time){
    return time < 10 ? `0${time}` : time; //ternario para adicionar o zero
}

setInterval(updateClock, 1000);
updateClock();

