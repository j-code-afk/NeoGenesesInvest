const calc = (valorInvestido,valorAtual,taxa1,taxa2,valorExpectativa)=>{
    taxa1 = taxa1/100
    taxa2 = 1 - taxa2/100

    let prejuizo = valorInvestido*(valorAtual*(1+taxa1))
    let lucro = ((valorInvestido * valorExpectativa)*taxa2) - prejuizo;

    console.log("prejuizo "+prejuizo.toFixed(3));
    console.log("lucro: "+((valorInvestido * valorExpectativa)*taxa2));
    console.log("saldo: "+lucro.toFixed(3))

}
calc(211,5.6696,1.8855,1.762,5.90);//     568/5,68*1,019

let meuINv = 58.16 + 1169.69 +5.43-5.75+18.19;



console.log("meu investimento: "+(meuINv*1.018855).toFixed(3));

let tirar = 1174.28;
let por = 1219.28;

let diferença = por - tirar;
let imposto = diferença / por;
console.log("diferença: "+diferença+" imposto: "+(imposto*100).toFixed(3)+"%");
//]]ºªºª§§¬¢£³²¹¹²³