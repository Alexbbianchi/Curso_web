function calcular() {
    var operacao = document.getElementById('operacao').value

    var num1 = document.getElementById('num1')

    var num2 = document.getElementById('num2')

    if (num1.value.length == 0) {
        alert('Favor digitar um número válido para operação (num1)')
    }

    if (num2.value.length == 0) {
        alert('Favor digitar um número válido para operação (num2)')
    } else {

        //forçando o tipo de variável
        num1 = Number(num1.value)
        num2 = Number(num2.value)
        var resultado = null

        switch (operacao) {

            case '1': //subtracao
                resultado = num1 - num2
                break

            case '2': //adição
                resultado = num1 + num2
                break

            case '3': //multiplicação
                resultado = num1 * num2
                break;

            case '4': //divisão
                if (num2 == 0) {
                    alert(`Não foi possivel realizar está divisão`)
                } else {
                    resultado = num1 / num2
                }
                break

            default:
                alert('A opção selecionada é inválida')
                break
        }
        document.getElementById('resultado').value = resultado
            //let res = document.getElementById('res')
            //res.innerHTML = resultado
    }

}