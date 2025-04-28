const data = JSON.parse(localStorage.getItem("ngdb"));
if (data.userName) {
    document.getElementById('loginBT').innerHTML = data.userName;
    console.log(data.userName);
}else{
    console.log("nenhum usuario logado");
}

function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    const profilePanel = document.getElementById('profilePanel');

    settingsPanel.classList.toggle('open');
    profilePanel.classList.remove('open');
}

function toggleProfile() {
    const profilePanel = document.getElementById('profilePanel');
    const settingsPanel = document.getElementById('settingsPanel');

    profilePanel.classList.toggle('open');
    settingsPanel.classList.remove('open');
}

const toggleTools = ()=>{
    const toolsPanel = document.querySelector(".tools");

    if (toolsPanel.style.display != "none") {
        toolsPanel.style.display = "none";
    }else{
        toolsPanel.style.display = "flex";
    }
}

const checkboxDarkmode = document.getElementById("toggleCheckbox-darkmode");


//vê se o darkmode está ativado no LocalStorage
if (localStorage.getItem("darkmode") === "enabled") {
    document.body.classList.add("darkmode");
    checkboxDarkmode.checked = true;
}

//Evento para alternar e salvar preferência
checkboxDarkmode.addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.add("darkmode");
        localStorage.setItem("darkmode", "enabled");
    } else {
        document.body.classList.remove("darkmode");
        localStorage.setItem("darkmode", "disabled");
    }
});

const toolItens = document.querySelectorAll(".tool-item");
toolItens.forEach((item,index)=>{
    let nextPage;
    switch(index){
        case 0:
            nextPage = "RDcalc.html";
            break;
        case 1:
            nextPage = "convert.html";
            break;
        default:
            break;
            
    }
    item.addEventListener('click',()=>{
        window.location.href = nextPage;
        console.log(index);
    });
})


const closeSection = ()=>{
    delete data.username;
    localStorage.setItem("ngdb",JSON.stringify(data));

    location.reload();
}