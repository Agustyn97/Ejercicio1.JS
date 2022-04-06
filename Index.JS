var ingredientes = ["Salsa", "Queso", "Harina", "Levadura", "Sal", "Aceite", "Aceitunas", "Morrones", "Jamon", "Salame"]

function Pizza(ingredientes) {

    var pares = []
    var impares = []

    for (let index = 0; index < ingredientes.length; index++) {

        if (ingredientes[index].length % 2 == 0) {
            pares.push(ingredientes[index])
        }
        else {
            impares.push(ingredientes[index])
        }
    }
    
    console.log("Los ingredientes pares son:"+ pares);
    console.log("Los ingredientes impares son:"+ impares);
}
Pizza(ingredientes)
