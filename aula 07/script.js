
function soma() {
    var campo1 = document.getElementById("campo1");
    var campo2 = document.getElementById("campo2");
    var resultado = document.getElementById("resultado");

    resultado.innerHTML = "resultado: " + (Number(campo1.value) + Number(campo2.value));
}

function addItem() {
    var campo tarefas = document.getElementById("campo_tarefas");
    var lista = document.getElementById("lista");
    if (campo_tarefas.value.trim() != "") {                                         
        var item = document.createElement("li");
        item.innerHTML = campo_tarefas.value;
        lista.appendChild(item);
    }
    campo_tarefas.value ="";
}

