
//=================================================================================================================================================================================FUNCION PARA RECOLECTAR DATOS INICIALES DEL USUARIO ============================================================================================================================================================================

function usuario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    // const carnet = document.getElementById("carnet").value;
    const carnet = document.querySelector('input[name="carnet"]:checked').value;
    const asignatura = document.getElementById("asignatura").value;

    sessionStorage.setItem('nombre', (nombre));
    sessionStorage.setItem('apellido', (apellido));
    sessionStorage.setItem('carnet', (carnet));
    sessionStorage.setItem('asignatura', (asignatura));

    //====================================================================================VERIFICAR QUE NO QUEDEN ESPACIOS PENDIENTES A COMPLETAR ==================================================================================
    let formulario = document.addForm;

    if (formulario.nombre.value == "" || formulario.apellido.value == "" || formulario.asignatura.value == "" || formulario.carnet.value == "") {
        document.getElementById("alerta").innerHTML = `<div class="alert alert-danger"><a href="" class="close" data-dismiss = alert></a>Favor completar los campos vacíos</div>`;z
        return false;
    } 

    window.location = 'Notas.html';
}


//=================================================================================================================================================================================FUNCION PARA REALIZAR LA OPERACIÓN DEL PROMEDIO FINAL ============================================================================================================================================================================

function calcularNota() {
    let taller1 = Number.parseFloat(document.getElementById("taller1").value);
    let taller2 = Number.parseFloat(document.getElementById("taller2").value);
    let parcial = Number.parseFloat(document.getElementById("parcial").value);

    //====================================================================================VERIFICAR QUE NO QUEDEN ESPACIOS PENDIENTES A COMPLETAR ==================================================================================

    let formulario = document.addForm;

    //VALIDACIÓN INDIVIDUAL DE LA VARIABLE TALLER 1
    if (formulario.taller1.value == "") {
        document.getElementById("alerta").innerHTML = `<div class="alert alert-danger"><a href="" class="close" data-dismiss = alert></a>Favor completar los campos vacíos</div>`;
        formulario.taller1.focus();
        return false;
    }

    //VALIDACIÓN INDIVIDUAL DE LA VARIABLE TALLER 2    
    if (formulario.taller2.value == "") {
        document.getElementById("alerta").innerHTML = `<div class="alert alert-danger"><a href="" class="close" data-dismiss = alert></a>Favor completar los campos vacíos</div>`;
        formulario.taller2.focus();
        return false;
    }

    //VALIDACIÓN INDIVIDUAL DE LA VARIABLE PARCIAL
    if (formulario.parcial.value == "") {
        document.getElementById("alerta").innerHTML = `<div class="alert alert-danger"><a href="" class="close" data-dismiss = alert></a>Favor completar los campos vacíos</div>`;
        formulario.parcial.focus();
        return false;
    }


    //====================================================================================VERIFICAR QUE LA CANTIDAD INGRESADA SEA NO SEA (< 1) y también (> 10) ==================================================================================

    //VERIFICACIÓN INDIVIDUAL DE LA VARIABLE TALLER 1
    if (taller1 < 1 || taller1 > 10) {
        alert("Favor ingrese una cantidad valida en la Nota del Taller 1");
        formulario.taller1.focus();
        return false;
    }

    //VERIFICACIÓN INDIVIDUAL DE LA VARIABLE TALLER 2
    if (taller2 < 1 || taller2 > 10) {
        alert("Favor ingrese una cantidad valida en la Nota del Taller 2");
        formulario.taller2.focus();
        return false;
    }


    //VERIFICACIÓN INDIVIDUAL DE LA VARIABLE PARCIAL
    if (parcial < 1 || parcial > 10) {
        alert("Favor ingrese una cantidad valida en la Nota del Parcial");
        formulario.parcial.focus();
        return false;
    }


    //====================================================================================DE NO HABER ERRORES A CORREGIR SE PROCEDE A REALIZAR EL CALCULO ==================================================================================
    else {
        let labotario,
            promedio1,
            promedio2,
            notafinal,
            porcentajetaller1,
            porcentajetaller2;

            

        // FORMULA PARA DETERMINAR LA NOTA DEL LABORATORIO
        labotario = ((taller1 + taller2) / 2);
        labotario = labotario.toFixed(2)

        // FORMULA PARA DETERMINAR EL PORCENTAJE DE LA NOTA FINAL(PORCENTAJE#1)
        promedio1 = (labotario * 0.4);


        // FORMULA PARA DETERMINAR EL PORCENTAJE DE LA NOTA FINAL(PORCENTAJE#2)
        promedio2 = (parcial * 0.6);
        console.log(promedio2);


        // FORMULA PARA DETERMINAR LOS PORCENTAJES CORRESPONDIENTES A TALLER #1 Y #2
        porcentajetaller1 = (taller1 / 2);
        porcentajetaller2 = (taller2 / 2);
        porcentajetaller1 = porcentajetaller1.toFixed(2)
        porcentajetaller2 = porcentajetaller2.toFixed(2)

        // FORMULA PARA DETERMINAR LA NOTA FINAL (SUMA DE AMBOS PORCENTAJES #1 Y #2)
        notafinal = ((promedio1) + (promedio2));
        notafinal = notafinal.toFixed(2)

        // RECOLECCIÓN DE DATOS A IMPRIMIR 
        sessionStorage.setItem('parcial', (parcial));
        sessionStorage.setItem('labotario', (labotario));
        sessionStorage.setItem('notafinal', (notafinal));
        sessionStorage.setItem('taller1', (taller1));
        sessionStorage.setItem('taller2', (taller2));
        sessionStorage.setItem('promedio1', (promedio1));
        sessionStorage.setItem('promedio2', (promedio2));
        sessionStorage.setItem('porcentajetaller1', (porcentajetaller1));
        sessionStorage.setItem('porcentajetaller2', (porcentajetaller2));

        // SERA ENVIADO A AL HTML DONDE APARECE EL ROBOT INSTITUCIONAL UFG
        window.location = 'francis.html';
    }
}

//=================================================================================================================================================================================FUNCION QUE CAMBIA LA IMAGEN DEPENDIENDO SI LA NOTA FINAL ES MENOR A 6 ============================================================================================================================================================================
function FrancisUFG() {
    let mensaje = Number.parseFloat(sessionStorage.getItem("notafinal"));
    let imagen = document.getElementById("foto");

    if (mensaje < 6) {
        imagen.src = "IMG/francis triste.png";
        document.getElementById("Frase").innerHTML = `LO LAMENTAMOS MUCHO <br> Necesitas prepararte más a la próxima has reprobado este período, tu nota final es ${mensaje}`;
    }

    else {
        imagen.src = "IMG/francis feliz.png";
        document.getElementById("Frase").innerHTML = `FELICITACIONES!!! <br> Has aprobado este período, tu nota final es ${mensaje}`;
    }
}


//=================================================================================================================================================================================FUNCION PARA IR A LA ULTIMA PAGINA HTML ============================================================================================================================================================================
function siguiente() {
    window.location = 'Recibo.html';
}


//=================================================================================================================================================================================FUNCION PARA IMPRIMIR LOS DATOS REQUERIDOS ============================================================================================================================================================================

function imprimir() {
    //Lectura de datos inicio
    const nombre = sessionStorage.getItem("nombre");
    const apellido = sessionStorage.getItem("apellido");
    const carnet = sessionStorage.getItem("carnet");
    const asignatura = sessionStorage.getItem("asignatura");
    
    document.getElementById("ImpNombre").innerHTML = `${nombre} ${apellido} <br>${carnet} <br>${asignatura}`;


    //Lectura de datos del calculo
    let labotario = Number.parseFloat(sessionStorage.getItem("labotario"));
    let parcial = Number.parseFloat(sessionStorage.getItem("parcial"));
    let notafinal = Number.parseFloat(sessionStorage.getItem("notafinal"));
    let taller1 = Number.parseFloat(sessionStorage.getItem("taller1"));
    let taller2 = Number.parseFloat(sessionStorage.getItem("taller2"));
    let promedio1 = Number.parseFloat(sessionStorage.getItem("promedio1"));
    let promedio2 = Number.parseFloat(sessionStorage.getItem("promedio2"));
    let porcentajetaller1 = Number.parseFloat(sessionStorage.getItem("porcentajetaller1"));
    let porcentajetaller2 = Number.parseFloat(sessionStorage.getItem("porcentajetaller2"));
    promedio2 = promedio2.toFixed(2);
    promedio1 = promedio1.toFixed(2);
    parcial = parcial.toFixed(2);
    notafinal = notafinal.toFixed(2);
    taller1 = taller1.toFixed(2);
    taller2 = taller2.toFixed(2);
    porcentajetaller1 = porcentajetaller1.toFixed(2);
    porcentajetaller2 = porcentajetaller2.toFixed(2);
    labotario = labotario.toFixed(2);

    document.getElementById("impLabotario1").innerHTML = `${labotario}`;
    document.getElementById("impLabotario2").innerHTML = `${labotario}`;
    document.getElementById("impParcial").innerHTML = `${parcial}`;
    document.getElementById("impNotafinal").innerHTML = `${notafinal}`;
    document.getElementById("impNotafinal1").innerHTML = `${notafinal}`;
    document.getElementById("impNotaTaller1").innerHTML = `${taller1}`;
    document.getElementById("impNotaTaller2").innerHTML = `${taller2}`;
    document.getElementById("impNotaPromedio1").innerHTML = `${promedio1}`;
    document.getElementById("impNotaPromedio2").innerHTML = `${promedio2}`;
    document.getElementById("impporcentajetaller1").innerHTML = `${porcentajetaller1}`;
    document.getElementById("impporcentajetaller2").innerHTML = `${porcentajetaller2}`;
}