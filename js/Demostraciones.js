function Saludo(event) {
    if (event.key === "Enter") {
        // Obtén el valor del input
        var texto = document.getElementById("input").value;

        // Asigna el valor al elemento de destino
        document.getElementById("result").textContent = "Hola, " + texto;

        // Limpia el input
        document.getElementById("input").value = "";
    }
}

function Ciruclo(event) {
    if (event.key === "Enter") {
        // Obtén el valor del input
        const radioCont = document.getElementById("radio");
        const perimCont = document.getElementById("perimetro");
        const areaCont = document.getElementById("area");

        let radio = parseFloat(document.getElementById("input").value);
        let done = false;

        if(radio != undefined &&  !isNaN(radio)){
            done = true;
            radioCont.textContent = "Radio: " + radio;
        }
        else{
            radioCont.textContent = "Ingresa un numero";
        }

        let area = Math.PI * Math.pow(radio, 2);
        let perimetro = 2 * Math.PI * radio;
    
        if(done){
            perimCont.textContent = "Perimetro: " + perimetro;
            areaCont.textContent = "Area: " + area;
        }

        // Limpia el input
        document.getElementById("input").value = "";
    }
}
