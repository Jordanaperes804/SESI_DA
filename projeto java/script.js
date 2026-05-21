function multiplicacao() {
  var nome = document.getElementById("nome").value;
  var flor = document.getElementById("flor").value;
  var mesa = document.getElementById("mesa").value;
  var resultado = document.getElementById("resultado");

  let total_mesa = Number(mesa) * 95.23;
  // resultado.innerHTML = "resultado:" + ()
  let total_flor = Number(flor) * 19.75;
  let total = total_mesa + total_mesa;

  resultado.innerHTML = "O valor é: R$ " + total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

}


