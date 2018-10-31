//Declaración de variables
var nombreUsuario = "Santiago Olivieri";
var saldoCuenta = 3800;
var limiteExtraccion = 3000;
var codigoSeguridad =  9876;

//Servicios a pagar
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//Cuentas amigas para transferir dinero
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones propias
function sumarDinero(){
    return(saldoCuenta += cantidadDinero);
}

function restarDinero(){
    return(saldoCuenta -= cantidadDinero);
}

function pagarAgua(){
    var saldoAnterior = saldoCuenta;

    if(saldoCuenta < agua){
        alert("No hay suficiente saldo para pagar este servicio.");
    } else{
        saldoCuenta -= agua;
        alert("Has pagado el Agua.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + agua + "\nSaldo actual: $" + saldoCuenta);
        actualizarSaldoEnPantalla();
    }
}

function pagarTelefono(){
    var saldoAnterior = saldoCuenta;
    
    if(saldoCuenta < telefono){
        alert("No hay suficiente saldo para pagar este servicio.");
    } else{
        saldoCuenta -= telefono;
        alert("Has pagado el Teléfono.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + telefono + "\nSaldo actual: $" + saldoCuenta);
        actualizarSaldoEnPantalla();
    }
}

function pagarLuz(){
    var saldoAnterior = saldoCuenta;
    if(saldoCuenta < luz){
        alert("No hay suficiente saldo para pagar este servicio.");
    } else{
        saldoCuenta -= luz;
        alert("Has pagado la Luz.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + luz + "\nSaldo actual: $" + saldoCuenta);
        actualizarSaldoEnPantalla();
    }
}

function pagarInternet(){
    var saldoAnterior = saldoCuenta;
    if(saldoCuenta < internet){
        alert("No hay suficiente saldo para pagar este servicio.");
    } else{
        saldoCuenta -= internet;
        alert("Has pagado el servicio de Internet.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + internet + "\nSaldo actual: $" + saldoCuenta);
        actualizarSaldoEnPantalla();
    }
}

function verificacionCuentasAmigas(){
    if(cuentaAmiga != cuentaAmiga1 && cuentaAmiga != cuentaAmiga2){
        alert("Solo puede transferirse dinero a una cuenta amiga.");
    } else{
        saldoCuenta -= montoATransferir;
        actualizarSaldoEnPantalla();
        alert("Se han transferido $" + montoATransferir + "\nCuenta destino: " + cuentaAmiga);
    }
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Ingrese su nuevo límite de extracción."));
    if (isNaN(nuevoLimite)){
        alert("No ha ingresado un número. Intentelo nuevamente.");
    } else{
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert("Su nuevo límite de extracción es de $" + nuevoLimite + ".");
    }
}

function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    cantidadDinero = parseInt(prompt("Ingrese la cantidad de dinero que desea extraer."));
    if (isNaN(cantidadDinero)){
        alert("No ha ingresado un número. Intentelo nuevamente.");
    } else if(cantidadDinero > saldoCuenta){
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
    } else if(cantidadDinero > limiteExtraccion){
        alert("La cantidad de dinero que desea extraer es mayor a su límite de extracción.");
    } else if(cantidadDinero % 100 !== 0){
        alert("Solo puedes extraer billetes de 100.");
    } else{
        restarDinero();
        actualizarSaldoEnPantalla();
        alert("Has extraído: $" + cantidadDinero + ".\nSaldo anterior: $" + saldoAnterior + ".\nSaldo Actual: $" + saldoCuenta + ".");
    }

}

function depositarDinero(){
    var saldoAnterior = saldoCuenta;
    cantidadDinero = parseInt(prompt("Ingrese la cantidad de dinero que desea depositar."));
    if (isNaN(cantidadDinero)){
        alert("No ha ingresado un número. Intentelo nuevamente.");
    } else{
        sumarDinero();
        actualizarSaldoEnPantalla();
        alert("Has depositado: $" + cantidadDinero + ".\nSaldo anterior: $" + saldoAnterior + ".\nSaldo Actual: $" + saldoCuenta + ".");
    }
}

function pagarServicio() {
    var servicioAPagar = prompt("Ingrese el número que corresponda con el servicio que quiera pagar.\n1 - Agua\n2 - Teléfono\n3 - Luz\n4 - Internet");

    switch(servicioAPagar){
        case "1":
            pagarAgua()
            break;
        case "2":
            pagarTelefono();
            break;
        case "3":
            pagarLuz();
            break;
        case "4":
            pagarInternet();
            break;
        default:
            alert("No existe el servicio seleccionado.");
    }
}

function transferirDinero() {
    montoATransferir = parseInt(prompt("Ingrese el monto que desea transferir."));
    
    if (isNaN(montoATransferir)){
        alert("No ha ingresado un número. Intentelo nuevamente.");
    } else if(saldoCuenta < montoATransferir){
        alert("No puede transferir esa cantidad de dinero.");
    } else{
        cuentaAmiga = parseInt(prompt("Ingrese el número de cuenta al que desea transferir el dinero."));
        verificacionCuentasAmigas();
    }
}

function iniciarSesion() {
    var codigoIngresado = prompt("Ingrese el código de seguridad de su cuenta.");
    parseInt(codigoIngresado);
    if(codigoIngresado == codigoSeguridad){
        alert("Bienvenido/a " + nombreUsuario + ". Ya puedes comenzar a realizar operaciones.");
    } else{
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
        alert("Código de seguridad incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.")
    }

}


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

