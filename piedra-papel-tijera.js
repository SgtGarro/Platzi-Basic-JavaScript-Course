function resultado(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        console.log("EMPATE");
    }
    else {
        if ((userChoice === "Piedra" && cpuChoice === "Tijera") || (userChoice === "Tijera" && cpuChoice === "Papel") || (userChoice === "Papel" && cpuChoice === "Piedra")) {
            console.log("El usuario gana");
        }
        else {
            console.log("La maquina gana");
        }
    }
}


resultado("Piedra", "Tijera"); //El usuario gana
