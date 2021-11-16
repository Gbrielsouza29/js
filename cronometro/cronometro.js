"use strict"
// variaveis 
var hh = 0; // hora;
var mm = 0; // minuto;
var ss = 0; // segundo;
var ml = 0; // milessimos
var tempo = 1000; // mil  milessimons de segundo;
var cron;
// funções

function start() {
    cron = setInterval(() => { timer(); }, tempo);//setInterval(() => {teste();}
}

function pause() {
    clearInterval(cron);
}

function stop() {
    clearInterval(cron);
    hh = 0; 
    mm = 0; 
    ss = 0;
    document.getElementById('contador').innerText ='00:00:00';
}

function timer() {

     ss++;
    if(ss == 60){
        ss = 0;
        mm++;
        if (mm == 60){
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm: mm) + ':' + (ss < 10 ? '0' + ss: ss);
    document.getElementById('contador').innerText = format;
}


