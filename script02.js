// Solicitando o comando ao usuário
const comando = prompt("Informe o comando para a lâmpada (ligar / desligar)")

// Criando o elemento de imagem
const elementoImagem = document.createElement("img")

// Lógica para definir o caminho da imagem com base no comando
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

// Verificando se a imagem foi configurada corretamente
if (elementoImagem.src) {
    // Verificando se já existe a div para a lâmpada, se não, cria uma
    let lampContainer = document.getElementById("lampContainer")
    if (!lampContainer) {
        lampContainer = document.createElement("div")
        lampContainer.id = "lampContainer"
        document.body.appendChild(lampContainer)
    }

    // Limpando o conteúdo da div antes de adicionar a nova imagem
    lampContainer.innerHTML = ''
    
    // Adicionando a imagem dentro da div
    lampContainer.appendChild(elementoImagem)
}
