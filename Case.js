function acaoBotao(){
    var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite o primeiro Valor:")
    operacao = prompt("Digite a operação:")
    valor02 = prompt("Digite o segundo Valor:")
    switch (operacao) {
        case "+":
            resultado = parseInt(valor01) + parseInt(valor02)
            break;
        case "-":
            resultado = parseInt(valor01) - parseInt(valor02)
            break;
        case "*":
            resultado = parseInt(valor01) * parseInt(valor02)
            break;    
        case "/":
            resultado = parseInt(valor01) / parseInt(valor02)
            break;
    }
    document.getElementById("paragrafo").innerText = resultado
}