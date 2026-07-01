function calcular() {

    let nome = document.getElementById("nome").value;
    let mat = Number(document.getElementById("mat").value);
    let port = Number(document.getElementById("port").value);
    let cien = Number(document.getElementById("cien").value);
    let hist = Number(document.getElementById("hist").value);

    let media = (mat + port + cien + hist) / 4;

    let situacao = "";

    if (media >= 7) {
        situacao = " Aprovado";
    } else if (media >= 5) {
        situacao = " Recuperação";
    } else {
        situacao = " Reprovado";
    }

    document.getElementById("resultado").innerHTML = `
        <h2>${nome}</h2>
        <p>Média: <strong>${media.toFixed(1)}</strong></p>
        <p>${situacao}</p>
    `;
}