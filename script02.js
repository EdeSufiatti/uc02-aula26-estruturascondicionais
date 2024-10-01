
const comando = prompt("Informe o comando para a lâmpada (ligar / desligar)")


const elementoImagem = document.createElement("img")


switch (comando.toLowerCase()) {
    case "ligar":
        elementoImagem.src = "./assets/on.png"
        break;
    case "desligar":
        elementoImagem.src = "./assets/off.png"
        break;
    default:
        alert("Comando inválido. Use 'ligar' ou 'desligar'.")
        break;
}


if (elementoImagem.src) {
   
    let lampContainer = document.getElementById("lampContainer")
    if (!lampContainer) {
        lampContainer = document.createElement("div")
        lampContainer.id = "lampContainer"
        document.body.appendChild(lampContainer)
    }

      
    lampContainer.appendChild(elementoImagem)
}
