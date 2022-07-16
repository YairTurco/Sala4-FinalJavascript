//ARRAY USUARIOS

let Usuarios = [];

class Usuario {
    constructor(userName, email, password, cardUser, cardNumber, cardDate, cardCode, country, state, plan) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.cardUser = cardUser;
        this.cardNumber = cardNumber;
        this.cardDate = cardDate;
        this.cardCode = cardCode;
        this.country = country;
        this.state = state;
        this.plan = plan;
    }
}


//SELECCION PLAN

let planMensual = 1000;
let planTrimestral = 833.33;
let planAnual = 666.66;

function SeleccionPlan (){
    alert("Seleccione el plan de su preferencia para abonar el servicio.");
    let plan = parseInt(prompt("1. Plan mensual: $1000 x mes. \n2. Plan trimestral: $2500 x trimestre. \n3. Plan anual: $8000 x año.\n"+
    "Ingrese el numero de plan que desea."));
        switch (plan) {
            case 1:
                alert (`Seleccionó el plan mensual. El monto final de su pago será de $${planMensual} por mes. Ingrese sus datos a continuación.`);
                break;
            case 2:
                alert (`Seleccionó el plan trimestral. El monto final de su pago será de $${planTrimestral} por mes. Ingrese sus datos a continuación.`);
                break;
            case 3:
                alert(`Seleccionó el plan anual. El monto final de su pago será de $${planAnual} por mes. Ingrese sus datos a continuación.`);
                break;
            default:
                alert("ingrese una opcion valida.");
                break;
        }

    let cargaUsuario = new Usuario(plan);
    Usuarios.push(cargaUsuario);
    console.log(Usuarios);
    return cargaUsuario;
}

SeleccionPlan()

//FORMULARIO DE REGISTRO

const nuevoUsuario = () => {
    let userName = prompt("Cual es tu nombre?");
    let email = prompt("ingrese su correo electronico.");
    let password = prompt("Ingrese la contraseña deseada.");
    let cardUser = prompt("Ingrese el nombre del titular de la tarjeta.");
    let cardNumber = parseInt(prompt("Ingrese los 16 digitos de su tarjeta."));
    let cardDate = parseInt(prompt("Fecha de vencimiento."));
    let cardCode = parseInt(prompt("Codigo de seguridad."));
    let country = prompt("Pais.");
    let state = prompt("Provincia.");

    let cargaUsuario = new Usuario(userName, email, password, cardUser, cardNumber, cardDate, cardCode, country, state);
    Usuarios.push(cargaUsuario);
    console.log(Usuarios);

    return cargaUsuario;
}

nuevoUsuario()

//FORMULARIO DE LOGIN

alert(`Bienvenido a Sala 4!`);

const loginUsuario = () => {

    let loginUser = prompt("Nombre de usuario.");
    let loginPass = prompt("ingrese su contraseña.");

    if ((loginUser === Usuario.UserName) && (loginPass === Usuario.password)) {
        alert(`Bienvenido ${Usuario.UserName}.`);
    } else {
        alert("Datos invalidos. intente nuevamente.");
    }
}

loginUsuario()

//BIBLIOTECA

