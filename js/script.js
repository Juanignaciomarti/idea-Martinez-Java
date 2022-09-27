alert("Fede siempre resaltò por ser el mas curioso, el mas aventurero y el mas osado , si se quiere, del grupo")
alert("No era extraño, que desapareciera por dias...debe estar en alguna de sus tantas aventuras, deciamos")
alert("Por eso, cuando viajo a Japòn no le dimos demasiada importancia...")
alert("'-Quiero conocer distintos lugares, Fukushima y Aokigahara.'")
alert("'-Estas seguro Fede? ese lugar debe seguir con niveles de radiaciòn altos..' dije. No le di mucha importancia a Aokigahara, estaba seguro que habia escuchado algo, pero en ese momento no lo recordaba.")
alert("Grave Error, ahora estamos frente al bosque de Ahokigahara junto con un guia que no inspira demasiada confianza. Fede desaparecio exactamente hace 10 dias...y debemos encontrarlo")
alert("El guìa nos comenta que tenemos 2 opciones, seguir por el camino preestablecido o saltar la vaya perimetral. Conociendo a Fede, sabiamos que se habia adentrado en el bosque.")


function saltar() {
    let saltar = false

    while (!saltar) {
        let moverse = prompt("Presiona un numero para elegir una opcion \n1- para saltar la valla")
        if (moverse == 1) {
            saltar = true
        } else {
            alert("No creo que esa sea la forma correcta")
        }

    };
    alert("Finalmente logramos saltar la vallla");
    alert("-Ahora siganme, no se separen de mi...")
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

saltar()

alert("Pasamos el primer esocollo, sin saber que nos depara el bosque.la luz era decididamente escasa, y el comportamiento del guia parecia cada vez mas erratico")
alert("15 minutos despues, el guia se frena abruptamente, gira en nuestra direccion y dice 'no podemos seguir, tenemos que irnos'")
alert("'-imposible, no nos vamos a ir sin nuestro amigo.' dije. '- yo no voy a continuar, pero les voy dar un atajo...creo que se donde puede estar su amigo' ")
alert("caminen 10 pasos de donde estamos, veran que se abren 2 caminos doblen a la derecha. De ahi, creo que pueden guiarse solos...")

for(let i = 10; i>0; i--){
    alert('dimos '+i+ ' pasos')
}

doblarDerecha()