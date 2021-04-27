const btnInit = document.querySelector('[data-iniciar]');
const btnPause = document.querySelector('[data-pause]');
const btnReset = document.querySelector('[data-reset]');
let segundos = document.querySelector('[data-tempo="segundos"]');
let minutos = document.querySelector('[data-tempo="minutos"]');
let horas = document.querySelector('[data-tempo="horas"]');
let cronometro;

btnInit.addEventListener('click', () => {
  cronometro = setInterval(callback, 1000);
  btnInit.setAttribute('disabled', '');
});

btnPause.addEventListener('click', () => {
  clearInterval(cronometro);
  btnInit.removeAttribute('disabled');
});

btnReset.addEventListener('click', () => {
  clearInterval(cronometro);
  horas.innerText = '00'
  minutos.innerText = '00'
  segundos.innerText = '00';
  btnInit.removeAttribute('disabled');
});

function callback() {
  let segundosNumero = parseInt(segundos.innerText);
  let minutosNumero = parseInt(minutos.innerText);  
  let horasNumero = parseInt(horas.innerText);

  // HORAS
  if(minutosNumero == 60) {
    console.log(horasNumero);
    horas.innerText = horasNumero +  1;
  }

  if (horasNumero > 0 && horasNumero < 9) {
      if(horas.innerText.length == 1) {
        horas.innerText = '0' + horas.innerText;
      }   
  }

  // MINUTOS
  if(segundosNumero == 59) {
    minutos.innerText = minutosNumero + 1;
  }

  if (minutosNumero > 0 && minutosNumero < 9) {
      if(minutos.innerText.length == 1) {
        minutos.innerText = 0 + minutos.innerText;
      }   
  }

  if (minutosNumero == 60) {
    minutos.innerText = '00';
  }

  // SEGUNDOS
  segundos.innerText = segundosNumero + 1;
  if (segundosNumero == 59) {
    segundos.innerText = '00';
  }

  if (segundosNumero > -1 && segundosNumero < 9) {
    segundos.innerText = 0 + segundos.innerText;
  }
}