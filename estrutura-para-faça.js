
function acaoBotao(){      
    var nome, idade, limite, contador

    limite = prompt("Digite a quantidade de vezes que a idade será verificada: ")
    contador = 0
    while (contador < limite){
        nome = prompt("Digite seu nome: ")
        idade = prompt("Digite sua idade " + nome + " : ")
        if (idade >= 18)
            document.getElementById("paragrafo").innerText = nome + " Você é maior de idade! "
        else 
            document.getElementById("paragrafo").innerText = nome + " Você é menor de idade! "
        contador ++
    }
}