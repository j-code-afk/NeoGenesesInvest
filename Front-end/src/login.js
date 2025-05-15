const bt = document.getElementById("enterBT");
bt.addEventListener("click",()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Por favor, preench todos os campos.");
        return;
    }

    fetch('https://localhost:8080/user/login',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include", // Precisa para aceitar cookies do backend
        body: JSON.stringify({password: password,email: email})
    })
    .then(response =>{
        if(response.ok){
            return response.text().then(text=>{
                throw new Error("Erro: "+text);
            });
        }
        return response.json();
    })                                                   
    .then(data =>{
        if (data && data.name && data.id) {
            alert(`${data.name} logado com sucesso`); 
            location.href = "index.html";
        } else {
            console.error("Unexpected response structure:", data);
            alert("Erro inesperado no login");
        }
    })
    .catch(error => {
    alert("Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.");
    console.error("Login error:", error);
    });
})
