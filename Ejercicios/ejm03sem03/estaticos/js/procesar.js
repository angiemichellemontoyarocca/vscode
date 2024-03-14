var n1 = document.getElementById("txtn1");
document.getElementById("ValidarFormulario").addEventListener("submit", function (evt) {
    evt.preventDefault();//no se enviara el formulario
  //  let n1 = parseInt(document.getElementById("txtn1").value);
    //numeros = new Array();
    let numeros = [];
    document.getElementById("resultado").value = "";
    let pares = 0;
    for (i = 1; i <= n1.value; i++) {
        numeros[i] = i;
        console.log(numeros[i]);
        if(numeros[i]%2 == 0)
        {
           pares++;     
        }
        document.getElementById("resultado").value += numeros[i] + "\n";
    }
    document.getElementById("resultado").value += "La cantidad de pares es:" + pares + "\n";

},false);