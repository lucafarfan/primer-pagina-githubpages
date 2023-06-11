//definir el valor del servicio
const servicios = 30000;

//definir descuentos 
let descuentoArtistico, descuentoSocial, descuentoNovias, descuentoQuince;

descuentoArtistico = 0.85;
descuentoSocial = 0.75;
descuentoNovias = 0.9;
descuentoQuince = 0.8;

//variables
let formulario, nombre, apellido, correo, tipoServicio, totalP, btnBorrar, btnResumen;

//elementos

formulario = document.querySelector('#formulario');
tipoServicio = document.querySelector('#tiposervicio');
totalP = document.querySelector('#totalAPagar');
btnBorrar = document.querySelector('#borrar');
btnResumen = document.querySelector('#resumen');

function calcPayment() {
   
    switch(tipoServicio.value) {
        
            case "Artistico":
                totalP.innerHTML = `Total a Pagar: $ ${servicios * descuentoArtistico}`;
                break;
            case "Social":
                totalP.innerHTML = `Total a Pagar: $ ${servicios * descuentoSocial}`;
                break;
            case "Novias":
                totalP.innerHTML = `Total a Pagar: $ ${servicios * descuentoNovias}`;
                break;
            case "Quinceañeras":
                totalP.innerHTML = `Total a Pagar: $ ${servicios * descuentoQuince}`;
                break;


    }
   
}

//botones

btnResumen.addEventListener('click', (event)=> {
    event.preventDefault();
    comprobarI();
    calcPayment();
})


btnBorrar.addEventListener('click', () => formulario.reset());

//comprobar

function comprobarI() {
    
    nombre = document.querySelector('input[placeholder="Nombre"]').value;
    apellido = document.querySelector('input[placeholder="Apellido"]').value;
    correo = document.querySelector('input[placeholder="Correo"]').value;
  
    if (nombre == '' && apellido == '' && correo == '') {
        alert('Por favor COMPLETA LOS CAMPOS');
        return
    }
    else if ( nombre == ''){
        alert('Por favor ingresa tu nombre')
        return
    }
    else if(apellido == ''){
        alert('Por favor ingresa tu apellido')
        return
    }
    else if(correo == ''){
        alert('Por favor ingresa tu correo')
        return
    }
    else if(tipoServicio.value == ''){
        alert('Por favor elige el servicio que deseas')
        return
    }
   

}