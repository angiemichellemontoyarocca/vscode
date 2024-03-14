document.getElementById("calcular").addEventListener("click", function () {
    var n1 = parseInt(document.getElementById("txtn1").value);
    //numeros = new Array();
    var numeros = [];
    document.getElementById("resultado").value = "";
    for (i = 0; i < n1; i++) {
        numeros[i] = i;
        console.log(numeros[i]);
        document.getElementById("resultado").value += numeros[i] + "\n";
    }
},false);
