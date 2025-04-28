const bt = document.getElementById("enterBT");
bt.addEventListener("click",()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("UserName").value;

    fetch('http://localhost:8080/user/register',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({password: password,email: email, name: name})
    })
    .then(response =>{
        if (response.ok) {
            return response.json();
        }else{
            return response.text().then(text =>{
                alert(text);
                throw new Error(text);
            })
        }
    })
    .then(data =>{
        const dat = JSON.parse(localStorage.getItem("ngdb")) || {};

        dat.userName = data.name;
        dat.userId = data.id; 

        localStorage.setItem("ngdb",JSON.stringify(dat));
        alert(data.name+" registrado com sucesso");

        location.href = "index.html"
    });
    
        
})