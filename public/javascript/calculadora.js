

var funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        valorPorHora = parseInt(document.getElementById("valorPorHora").value);
        interfaz = parseInt(document.getElementById("interfazHoras").value);
        paginas = parseInt(document.getElementById("paginas").value);
        hasJava = parseInt(document.getElementById("hasJavascript").value);
        mantenimiento = parseInt(document.getElementById("mantenimiento").value);
        result = (valorPorHora)*(interfaz+paginas+hasJava+mantenimiento);
        document.getElementById("valorTotal").value = result;
    })

}

funcionPredeterminada()






