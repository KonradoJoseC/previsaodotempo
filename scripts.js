alert('Feito por Konrado José Caferro')

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados) {
    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.icone').src = 'https://openweathermap.org/img/wn/' + dados.weather
    [0].icon + '.png'
    document.querySelector('.umidade').innerHTML = 'Umidade' + dados.main.humidity + '%'
    console.log(dados)


    // innerHTML = trocar oque esta escrito no html
}

async function buscarCidade(cidade) {
    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q='
        + cidade +
        '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric&units=metric',
    ).then((resposta) => resposta.json())

    colocarNaTela(dados)

    // async = buscar no servidor
    // AWAIT = ESPERE
    // FETCH -> Ferramenta do JavaScript para acessar servidores
    // THEN -> ENTÃO
    // JSON -> JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JAVASCRIPT ENTENDE)
}



function cliqueiNoBotao() {
    let cidade = document.querySelector('.cidade-input').value
    buscarCidade(cidade)


    // document = apelido html
    // querySelector = buscar a classe no httml
}




/*
Clica no BOTÃO 
-> CHAMA A FUNÇÃO cliqueiNoBotao()
-> Vai no INPUT e pega o que está lá dentro
-> PASSAR a cidade para o servidor

Math.floor -> Ferramenta do JavaScript para Arredondar valores

*/