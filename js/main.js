//SELECCION PLAN

let planMensual = 1000;
let planTrimestral = 833.33;
let planAnual = 666.66;

SeleccionPlan()

function SeleccionPlan (){
    alert("Seleccione el plan de su preferencia para abonar el servicio.");
    let seleccionPlan = parseInt(prompt("1. Plan mensual: $1000 x mes. \n2. Plan trimestral: $2500 x trimestre. \n3. Plan anual: $8000 x año.\n"+
    "Ingrese el numero de plan que desea."))
        switch (seleccionPlan) {
            case 1:
                alert (`Seleccionó el plan mensual. El monto final de su pago será de $${planMensual} por mes. Ingrese sus datos a continuación. `)
                break;
            case 2:
                alert (`Seleccionó el plan trimestral. El monto final de su pago será de $${planTrimestral} por mes. Ingrese sus datos a continuación.`)
                break;
            case 3:
                alert(`Seleccionó el plan anual. El monto final de su pago será de $${planAnual} por mes. Ingrese sus datos a continuación.`)
                break;
            default:
                alert("ingrese una opcion valida.")
                break;
        }

    return seleccionPlan;
}

//FORMULARIO DE REGISTRO - CON PROCESO DE PAGO

class Usuario {
    constructor(userName, email, password, cardUser, cardNumber, cardDate, cardCode, country, state) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.cardUser = cardUser;
        this.cardNumber = cardNumber;
        this.cardDate = cardDate;
        this.cardCode = cardCode;
        this.country = country;
        this.state = state;
    }
}



//FORMULARIO DE INGRESO
