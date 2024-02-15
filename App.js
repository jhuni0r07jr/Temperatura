const Chave = "88232085d4c67833a94d389179d4a7f8";

function MostrandoNaTela(Dados){
    document.getElementById("Temp_Cidade").innerHTML = "Tempo em: " + Dados.name;
    document.getElementById("Temperatura").innerHTML = "Temperatura: " + Math.floor(Dados.main.temp) + " °C";
    document.getElementById("Clima").innerHTML = Dados.weather[0].description;
    document.getElementById("Umidade").innerHTML = "Umidade: " + Dados.main.humidity + "%";
    document.getElementById("Img-temperatura").src = `https://openweathermap.org/img/wn/${Dados.weather[0].icon}.png`;
}

async function BuscandoCidade(Cidade){

    const Dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Cidade}&appid=${Chave}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    MostrandoNaTela(Dados);
}

function Enviar(){

    const Cidade = document.getElementById("Cidade").value;
    BuscandoCidade(Cidade);
}