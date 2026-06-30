function verificarNota() {

    const nota = parseFloat(document.getElementById("nota").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(nota)) {
        resultado.innerHTML = "Digite uma nota válida.";
        resultado.style.color = "red";
        return;
    }

    if (nota < 0 || nota > 10) {
        resultado.innerHTML = "A nota deve estar entre 0 e 10.";
        resultado.style.color = "red";
        return;
    }

    if (nota >= 7) {
        resultado.innerHTML = "Aprovado!";
        resultado.style.color = "green";
    } else if (nota >= 5) {
        resultado.innerHTML = "Recuperação.";
        resultado.style.color = "orange";
    } else {
        resultado.innerHTML = "Reprovado.";
        resultado.style.color = "red";
    }

}