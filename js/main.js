//ARRAY Y OBJETO USUARIOS
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

let usuarios = [
    {userName: "Yair", email: "turcoyair@gmail.com", password: "yair", cardUser: "user", cardNumber: 1234123412341234, cardDate:"02/02", cardCode: 123, country: "Argentina", state: "Cordoba", plan: 2},
];



//FORMULARIO DE REGISTRO

let planMensual = 1000;
let planTrimestral = 833.33;
let planAnual = 666.66;

function nuevoUsuario() {
    let userName = prompt("Cual es tu nombre?");
    let email = prompt("ingrese su correo electronico.");
    let password = prompt("Ingrese la contraseña deseada.");
    let cardUser = prompt("Ingrese el nombre del titular de la tarjeta.");
    let cardNumber = parseInt(prompt("Ingrese los 16 digitos de su tarjeta."));
    let cardDate = parseInt(prompt("Fecha de vencimiento."));
    let cardCode = parseInt(prompt("Codigo de seguridad."));
    let country = prompt("Pais.");
    let state = prompt("Provincia.");

    alert("Seleccione el plan de su preferencia para abonar el servicio.");
    let plan = parseInt(prompt("1. Plan mensual: $1000 x mes. \n2. Plan trimestral: $2500 x trimestre. \n3. Plan anual: $8000 x año.\n" +
        "Ingrese el numero de plan que desea."));
    switch (plan) {
        case 1:
            alert(`Seleccionó el plan mensual. El monto final de su pago será de $${planMensual} por mes. Ingrese sus datos a continuación.`);
            break;
        case 2:
            alert(`Seleccionó el plan trimestral. El monto final de su pago será de $${planTrimestral} por mes. Ingrese sus datos a continuación.`);
            break;
        case 3:
            alert(`Seleccionó el plan anual. El monto final de su pago será de $${planAnual} por mes. Ingrese sus datos a continuación.`);
            break;
        default:
            alert("ingrese una opcion valida.");
            break;
    }

    let cargaUsuario = new Usuario(userName, email, password, cardUser, cardNumber, cardDate, cardCode, country, state, plan);
    usuarios.push(cargaUsuario);
    console.log(usuarios);

    return cargaUsuario;
}

// nuevoUsuario()

//FORMULARIO DE LOGIN

// alert(`Bienvenido a Sala 4!`);

function loginUsuario() {

    let loginUser = prompt("Nombre de usuario.");
    let loginPass = prompt("ingrese su contraseña.");

    if ((loginUser === Usuario.UserName) && (loginPass === Usuario.password)) {
        alert(`Bienvenido ${Usuario.UserName}.`);
    } else {
        alert("Datos invalidos. intente nuevamente.");
    }
}

// loginUsuario()

/*--------------------------------------------------------------------------*/

//BIBLIOTECA DE SERIES Y PELICULAS

class content {
    constructor (tipo, titulo, genero, estreno, puntuacion) {
        this.tipo = tipo;
        this.titulo = titulo;
        this.genero = genero;
        this.estreno = estreno;
        this.puntuacion = puntuacion;
    }
}

let library = [
    {tipo: "pelicula", titulo: "el padrino", genero: "drama", estreno: 1972, puntuacion: 87},
    {tipo: "pelicula", titulo: "parasitos", genero: "drama", estreno: 2019, puntuacion: 85},
    {tipo: "pelicula", titulo: "el caballero oscuro", genero: "accion", estreno: 2008, puntuacion: 85},
    {tipo: "pelicula", titulo: "top gun: maverick", genero: "acción", estreno: 2022, puntuacion: 84},
    {tipo: "serie", titulo: "arcane", genero: "animación", estreno: 2021, puntuacion: 91},
    {tipo: "serie", titulo: "breaking bad", genero: "drama", estreno: 2008, puntuacion: 88},
    {tipo: "serie", titulo: "the umbrella academy", genero: "aventura", estreno: 2019, puntuacion: 87},
    {tipo: "serie", titulo: "stranger things", genero: "aventura", estreno: 2016, puntuacion: 86},

]

//FILTROS
//por tipo
const pelicula = library.filter((el) => el.tipo.includes('pelicula'));
const serie = library.filter((el) => el.tipo.includes('serie'));

console.log(pelicula);

//por puntuación
const puntonueve = library.filter ((el) => (el.puntuacion <= 100) && (el.puntuacion >= 90))
const puntoocho = library.filter ((el) => (el.puntuacion <= 89) && (el.puntuacion >= 80));
const puntosiete = library.filter ((el) => (el.puntuacion <= 79) && (el.puntuacion >= 70));

console.log(puntonueve);

/*--------------------------------------------------------------------------*/

//FAVORITOS

let favorites = [

]

function addFavorites() {
    //Formula para agregar peliculas o series a favoritos.
}

