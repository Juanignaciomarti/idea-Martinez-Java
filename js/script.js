/*alert("Fede siempre resaltò por ser el mas curioso, el mas aventurero y el mas osado , si se quiere, del grupo")
alert("No era extraño, que desapareciera por dias...debe estar en alguna de sus tantas aventuras, deciamos")
alert("Por eso, cuando viajo a Japòn no le dimos demasiada importancia...")
alert("'-Quiero conocer distintos lugares, Fukushima y Aokigahara.'")
alert("'-Estas seguro Fede? ese lugar debe seguir con niveles de radiaciòn altos..' dije. No le di mucha importancia a Aokigahara, estaba seguro que habia escuchado algo, pero en ese momento no lo recordaba.")
alert("Grave error, ahora estamos frente al bosque de Ahokigahara junto con un guia que no inspira demasiada confianza. Fede desaparecio exactamente hace 10 dias...y debemos encontrarlo")
*/

/* PRE ENTREGA Nº3*/
const DB = [{
    mail: "laulopresti2012@shemail.com",
    password: "nano2015",
    
}, {
    user: "Ñatuchidemattei@shemail.com",
    password: "parucho",
},
{
    user: "maritaV@shemail.com",
    password: "jiji",
},
{
    user: "Vapo@shemail.com",
    password: "dalebo", 

}
   
]

const log_user = document.querySelector("#user"),
    log_pass = document.querySelector("#pass"),
    log_btn = document.querySelector("#btn_log"),
    log_out_btn = document.querySelector("#btn_log_out"),
    toggles = document.querySelectorAll(".toggle"),
    book = document.querySelector("#book")

    function validation(mail, password) {
        let match = DB.find(DB => DB.mail == mail)
    
        if (typeof match == "undefined") {
            return false;
        } else if (match.password != password) {
            return false;
        } else {
            return match;
        }
    };

// esta guarda el usuario que se esta usando de la false base de datos en el local storage considerandolo como usuario activo
function usuario_guardado(db_user) {
    const user = {
        mail: db_user.mail,
        password: db_user.password,
    };

    localStorage.setItem("user", JSON.stringify(user))
}

function clear_storage() {
    localStorage.clear();
    sessionStorage.clear();
}

// cambia los display: none; del html para mostrar la barra superior con el boton de log out
function change_display() {
    toggles.forEach(tag => {
        tag.classList.toggle("d-none")
    })
}

// esta funcion permite recuperar el user del local storage donde fue guardado
function loot_user() {
    let looted_user = JSON.parse(localStorage.getItem("user"));
    return looted_user;
}

// esta funcion se aplica al cargarse la pagina para saltear el logueo de nuevo
function usuario_logueado(user) {
    if (user) {
        change_display()
    }
}

window.onload = () => {
    usuario_logueado(loot_user());
}

log_btn.onclick = () => {
    // e.preventDefault();

    if (!log_user.value || !log_pass.value) {
        Swal.fire({
            text:"Falta usuario y/o contraseña correctos",
            icon: "error"   
        });
    } else {
        let data = validation(log_user.value, log_pass.value)
        if (!data) {
            Swal.fire({
                text:"Error usuario y/o contraseña correctos",
                icon:"error"
            });
        } else {
            usuario_guardado(data);
            change_display();
            Swal.fire({
                title: "Log In Exitoso",
                icon: "success"
            });
        }
    }
}

log_out_btn.onclick = () => {
    change_display();
    clear_storage();
}



/*class Tarjeta {
    constructor(imagen, texto ,opcion1, opcion2) {
        this.imagen = imagen
        this.texto = texto
        this.opcion1 = opcion1
        this.opcion2 = opcion2
    }
}


/*const tarjeta = [{
    texto: "Fede siempre resaltò por ser el mas curioso, el mas aventurero y el mas osado , si se quiere, del grupo",
    img: "./img/1.webp"
}
]
*/



book.innerHTML = `<img src="./img/Tarjeta1.jpg"  alt="/img/Tarjeta1">
<p>A Fede siempre resaltò por ser el mas curioso, el mas aventurero y el mas osado , si se quiere, del grupo</p>
<p>No era extraño, que desapareciera por dias...debe estar en alguna de sus tantas aventuras, deciamos</p>

<p>Por eso, cuando viajo a Japòn no le dimos demasiada importancia...</p>
<p>"'-Quiero conocer distintos lugares, Fukushima y Aokigahara.'</p>
<p>'-Estas seguro Fede? ese lugar debe seguir con niveles de radiaciòn altos..' dije. No le di mucha importancia a Aokigahara, estaba seguro que habia escuchado algo, pero en ese momento no lo recordaba.</p>
<p>Grave error, ahora estamos frente al bosque de Ahokigahara junto con un guia que no inspira demasiada confianza. Fede desaparecio exactamente hace 10 dias...y debemos encontrarlo"</p>
<button type="button" class="btn btn-outline-light m-3">continuar</button>`;



/*FIN PRE ENTREGA Nº3* ----------------------------------------------------*/

class Tarjeta {
    constructor(texto, opcion1, opcion2) {
            // completar
    }
}
/*class personaje{
    constructor(nombre, edad, sexo, altura, peso){
        this.nombre = nombre.toUpperCase();
        this.edad= parseInt(edad)
        this.sexo = sexo;
        this.altura = parseFloat(altura);
        this.peso = parseInt(peso)
 
    }
        doblarIzquierda(){
            this.doblarIzquierda = false
            while (!this.doblarIzquierda){
            let moverse = prompt("presiona un numero para elegir la opcion \n3 Para girar a la izquierda")
            if(moverse== 3){
            this.doblarIzquierda = true
            alert(" doblamos a la izquierda, la oscuridad se hacia cada vez mas espesa, casi corporea... ")

        } else{
            alert("esa no es la izquierda...")
        }
    }
    
        }
    
}

class tarjeta {
    constructor(texto, boton1, boton2, continuar){
        this.texto = texto
        this.boton1 = boton1
        this.boton2 = boton2
        this.continuar = continuar 
    }
    

}

const tarjeta1 = new tarjeta ()


/*alert("Bueno, antes de comenzar, voy a necesitar tus datos")*/

/*let nombrePersonaje = prompt ("Como es tu nombre?");
let edadPersonaje = prompt("Cual es tu edad?");
let sexoPersonaje = prompt("Sexo? puedo verlo, pero en estos dias, uno nunca sabe...")
let alturaPersonaje = prompt("Altura?")
let pesoPersonaje= prompt("Peso?")

const personaje1 = new personaje (nombrePersonaje,edadPersonaje,sexoPersonaje,alturaPersonaje,pesoPersonaje);
console.log(personaje1);

/*alert("Asi que " + nombrePersonaje + " Mucho gusto.");

alert("Antes de seguir, que llevas en la mochila?")*/
/*objetos para inventario*/

/*
class objeto{
    constructor (nombre,cantidad){
        this.nombre = nombre.toUpperCase();
        this.cantidad= parseInt(cantidad);

    }
    
    darHora(){
        alert(( new Date() ))

    }

}


let nombreObjeto = prompt("Solo llevaba el celular, de todas formas le respondi")
let cantidadObjeto = prompt("Cuantos tienes?, pregunto el guia.")

const celular1 = new objeto(nombreObjeto, cantidadObjeto);
console.log(celular1);


alert("El guìa nos comenta que tenemos 2 opciones, seguir por el camino preestablecido o saltar la valla perimetral. Conociendo a Fede, sabiamos que se habia adentrado en el bosque.")

/*Funciones 1er pre-entrega*/

/*function saltar() {
    let saltar = false

    while (!saltar) {
        let moverse = prompt("Presiona un numero para elegir una opcion \n1- para saltar la valla")
        if (moverse == 1) {
            saltar = true
        } else {
            alert("No creo que esa sea la forma correcta "+ nombrePersonaje)
        }

    };
    alert("Finalmente logramos saltar la vallla");
    alert("-Ahora sigueme, no te separes de mi...")
};

function doblarDerecha(){
    doblarDerecha = false
    while (!doblarDerecha){
        let moverse = prompt("presiona un numero para elegir la opcion \n2- Para girar a la derecha")
        if(moverse== 2){
            doblarDerecha = true

        } else{
            alert("esa no es la derecha...")
        }
    }
    alert(" doblamos a la derecha, y comenzamos a caminar por el sinuoso sendero")


}

/*fin funciones primera entrega*/

/*saltar()

/*alert("Pasamos el primer esocollo, sin saber que nos depara el bosque. La luz era decididamente escasa, y el comportamiento del guia parecia cada vez mas erratico")
alert("15 minutos despues, el guia se frena abruptamente, gira en nuestra direccion y dice 'no podemos seguir, tenemos que irnos'")
alert("'-imposible, no nos vamos a ir sin nuestro amigo.' dije. '- yo no voy a continuar, pero les voy dar un atajo...creo que se donde puede estar su amigo' ")
alert("caminen 10 pasos de donde estamos, veran que se abren 2 caminos doblen a la derecha. Yo los seguire de atras para asegurarme de que todo vaya bien")
*/
/*for(let i = 10; i>0; i--){
    alert('dimos '+i+ ' pasos')
}

doblarDerecha()

/*alert("a medida que avanzavamos el bosque se hacia cada vez mas oscuro y silencioso. Me preocupaba perder la nocion del tiempo...")
alert("Te noto tenso "+ nombrePersonaje + " pero puedo entenderte, la oscuridad, el silencio...este lugar es una tumba...")
alert("mire mi celular para comprobar la hora y marcaba lo siguiente... ")*/
/*celular1.darHora();

/*alert("Algo andaba mal, estaba seguro que habia configurado mi telefono correctamente. La hora no podia ser esa, ni el sitio geografico")
alert("Deberiamos doblar a la izquierda, y seguir ese camino...")*/

/*personaje1.doblarIzquierda();

/*alert("Seguimos caminando, siguiendo un sendero precariamente trazado y que desaparecia levemente con cada paso que dabamos.")
alert("De repende, a un lado del camino, vi lo que parecia una mochila. Me acerque a inspeccionarla")*/

/*const mochila1 = ["êncendedor","cuchillo","ramas","cuaderno"];

/*alert("contenia un encendedor, un cuchillo, varias ramas y un cuaderno");
alert("decidi tomar todos los elementos y guardarlos en mi mochila, que estaba vacia");*/



const mochila =[celular1];
console.log(mochila)
const mochilaUnificada = mochila1.concat(mochila);
console.log(mochilaUnificada);

