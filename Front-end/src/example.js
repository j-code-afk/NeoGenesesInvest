const param1 = "usd";
const param2 = "brl";

fetch(`http://localhost:8080/coin/bitcoin?moeda=${param1}&valor=${param2}`)
    .then(response => response.text())
    .then(data => {
        console.log("Resposta do backend:", data);  // "Parâmetro 1: Hello, Parâmetro 2: World"
    })
    .catch(error => console.error("Erro na requisição:", error));