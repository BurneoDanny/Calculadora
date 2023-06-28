navBrand();

function funcionPredeterminada() {
    const formulario = document.getElementById('formulario');
    const valor = document.getElementById('valorTotal');
    formulario.addEventListener('submit', (evento) => {
        // evento.preventDefault();
        // const horas = document.getElementById('valorPorHora');
        // const interfaz = document.getElementById('interfazHoras');
        // const paginas = document.getElementById('paginas');
        // const multimedia = document.getElementById('multimedia');
        // const mantenimiento = document.getElementById('mantenimiento');
        // const resultado = horas + interfaz  + paginas  + multimedia  + mantenimiento;
        // valor.value = resultado;

    })
  }

function navBrand(){
    if (window.innerWidth < 470) {
        document.getElementsByClassName("navbar-brand").innerText = "Calculadora";    
    }
}




