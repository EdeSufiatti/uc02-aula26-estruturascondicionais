// if / else if
// se / senão se


const numeroMes = Number(prompt("Informe o Numero do Mês"))

let nomeMes
if (numeroMes === 1) {
    nomeMes = "Janeiro"
} else if (numeroMes === 2) {
    nomeMes = "Fevereiro"
} else if (numeroMes === 3) {
    nomeMes = "Março"
} else if (numeroMes === 4) {
    nomeMes = "Abril"
} else if (numeroMes === 5) {
    nomeMes = "Maio"
} else if (numeroMes === 6) {
    nomeMes = "Junho"
} else if (numeroMes === 7) {
    nomeMes = "Julho"
} else if (numeroMes === 8) {
    nomeMes = "Agosto"
} else if (numeroMes === 9) {
    nomeMes = "Setembro"
} else if (numeroMes === 10) {
    nomeMes = "Outubro"
} else if (numeroMes === 11) {
    nomeMes = "Novembro"
} else if (numeroMes === 12) {
    nomeMes = "Dezembro"
} else {
    nomeMes = "Mês inválido"
}


document.body.appendChild(document.createTextNode(nomeMes))
