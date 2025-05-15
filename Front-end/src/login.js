const bt = document.getElementById("enterBT");
bt.addEventListener("click",()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch('https://localhost:8080/user/login',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include", // Precisa para aceitar cookies do backend
        body: JSON.stringify({password: password,email: email})
    })
    .then(response =>{
        if(response.ok){
            return response.json();
        }else{
            return response.text().then(text=>{
                alert("erro: "+text);
                console.log(text)
            })                                         
        }          
    }).then(data =>{
        if (data && data.name && data.id) {
            alert(data.name+" logado com sucesso"); 
            location.href = "index.html";
        } else {
            alert("Erro inesperado no login");
        }
    })
    .catch(error =>{
        alert(error);
        console.log(error);
    })
})
