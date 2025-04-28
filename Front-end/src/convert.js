const atualValue = document.querySelectorAll(".atualValue")//para mostrar valor atual
const maxValues = document.querySelectorAll('.maxValue');
const minValues = document.querySelectorAll('.minValue');
const conversores = document.querySelectorAll('.convert');
const porcentagem = document.querySelectorAll('.percentage');
const input1 = document.querySelectorAll('.valor1');
const input2 = document.querySelectorAll('.valor2');

const comparador = document.getElementById("comparator");
let valorDeComparacao = comparador.value;

const simb = ['BRL',"EUR","USD","BTC"]

let btcValues = [];
let usdValues = [];
let eurValues = [];

let MaxBtc = [];
let MaxUsd = [];
let MaxEur = [];

let MinBtc = [];
let MinUsd = [];
let MinEur = [];

const updateValues = ()=>{
  atualValue.forEach((item,index)=>{
    switch(index){
      case 0:
        item.innerHTML = usdValues[parseInt(comparador.value)]+" "+simb[parseInt(comparador.value)];
        input2[index].placeholder = usdValues[parseInt(comparador.value)];

        const minimo = MinUsd[parseInt(valorDeComparacao)];
        const maximo = MaxUsd[parseInt(valorDeComparacao)];

        porcentagem[index].innerHTML = (100 * (1 - (minimo / maximo))).toFixed(2)+"%";

        maxValues[index].innerHTML = maximo;
        minValues[index].innerHTML = minimo;
        break;
      case 1:
        item.innerHTML = eurValues[parseInt(comparador.value)]+" "+simb[parseInt(comparador.value)];
        input2[index].placeholder = eurValues[parseInt(comparador.value)];

        let minimoE =  MinEur[parseInt(valorDeComparacao)];
        let maximoE =  MaxEur[parseInt(valorDeComparacao)];

        porcentagem[index].innerHTML = (100 * (1 - (minimoE / maximoE))).toFixed(2)+"%";

        maxValues[index].innerHTML = maximoE;
        minValues[index].innerHTML = minimoE;
        break;
    }
  })
}

comparador.addEventListener("change",()=>{
  document.querySelectorAll(".coinName").forEach((item)=>{
    item.innerHTML = simb[parseInt(comparador.value)];
  })

  valorDeComparacao = comparador.value;
  updateValues();
})
const getValue = async (coin)=>{
    try{
      const response = await fetch("http://localhost:8080/coin?base="+coin);
      if (!response.ok) {
        throw new Error("erro na requisição");
      }
      const data = await response.json();
      return data;
    }catch(error){
      console.error(error);
    };
      
}

const getMinValue = async (coin)=>{
  try{
    const response = await fetch("http://localhost:8080/coin/min?base="+coin);
    if (!response.ok) {
      throw new Error("erro na requisição");
    }
    const data = await response.json();
    return data;
  }catch(error){
    console.error(error);
  };
}
const getMaxValue = async (coin)=>{
  try{
    const response = await fetch("http://localhost:8080/coin/max?base="+coin.toUpperCase());
    if (!response.ok) {
      throw new Error("erro na requisição");
    }
    const data = await response.json();
    return data;
  }catch(error){
    console.error(error);
  };
}
const carregarValores = async () => {
  let btc = await getValue("btc");
  let usd = await getValue("usd");
  let eur = await getValue("eur");

  let btcMin = await getMinValue("btc");
  let usdMin = await getMinValue("usd");
  let eurMin = await getMinValue("eur");

  let btcMax = await getMaxValue("btc");
  let usdMax = await getMaxValue("usd");
  let eurMax = await getMaxValue("eur");

  usdValues = [usd.BRLtoUSD,
    usd.EURtoUSD,1,
    (1/btc.usdtoBTC),];

  eurValues = [
    eur.BRLtoEUR,1,
    eur.USDtoEUR,
    (1/btc.eurtoBTC)
  ];

  MaxUsd = [usdMax.BRLtoUSD,
    usdMax.EURtoUSD,1,
    (1/btcMax.usdtoBTC),];

  MaxEur = [
    eurMax.BRLtoEUR,1,
    eurMax.USDtoEUR,
    (1/btcMax.eurtoBTC)
  ];

  MinUsd = [usdMin.BRLtoUSD,
    usdMin.EURtoUSD,1,
    (1/btcMin.usdtoBTC),];

  MinEur = [
    eurMin.BRLtoEUR,1,
    eurMin.USDtoEUR,
    (1/btcMin.eurtoBTC)
  ]

  console.log("BTC: ", btcMax);
  console.log("USD: ", usdMax);
  console.log("EUR: ", eurMax);

  console.log(MaxUsd[0]);

 updateValues();
};

window.onload = carregarValores;


function contarCasasDecimais(numero) {
    const texto = numero.toString();
    if (texto.includes('e-')) {
      const [_, expoente] = texto.split('e-');
      return parseInt(expoente, 10);
    } else if (texto.includes('.')) {
      return texto.split('.')[1].length;
    }
    return 0;
  }

const data = JSON.parse(localStorage.getItem("ngdb"));
if (data.userName) {
    document.getElementById('loginBt').innerHTML = data.UserName;
    console.log(data.userName);
}

document.getElementById('logo').addEventListener('click',()=>{
  window.location.href = "index.html";
})

const fiatPage = document.getElementById('fiatPage');
const criptoPage = document.getElementById('criptosPage');
const bar = document.querySelector('.bar');
const toggleType = (t)=>{
    switch(t){
      case "f":
        bar.style.marginLeft = "0";
        fiatPage.style.display = "flex";
        criptoPage.style.display = "none";
        break;
      case "c":
        bar.style.marginLeft = "50vw";
        fiatPage.style.display = "none";
        criptoPage.style.display = "flex";
        break;
    }
}

input1.forEach((item,index)=>{
  switch(index){
    case 0:
      item.addEventListener('input',()=>{
        let inputvalue = parseFloat(item.value);
        input2[index].value = inputvalue * usdValues[parseInt(comparador.value)];
      })
      break;
    case 1:
      item.addEventListener('input',()=>{
        let inputvalue = parseFloat(item.value);
        input2[index].value = inputvalue * eurValues[parseInt(comparador.value)];
      })
      break;
  }
})
input2.forEach((item,index)=>{
  switch(index){
    case 0:
      item.addEventListener('input',()=>{
        let inputvalue = parseFloat(item.value);
        input1[index].value = inputvalue * (1/ usdValues[parseInt(comparador.value)]);
      })
      break;
    case 1:
      item.addEventListener('input',()=>{
        let inputvalue = parseFloat(item.value);
        input1[index].value = inputvalue * (1/ eurValues[parseInt(comparador.value)]);     //abacate 
      })
      break;
  }
})