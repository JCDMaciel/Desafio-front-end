//identificando o item da lista que será usado como base para posicionamnto
const lista = document.getElementsByClassName('form-group')[7]

//criando um fieldset novo para contemplar os novos campos
var novoFieldset = document.createElement("FIELDSET");
lista.appendChild(novoFieldset);

//criando a função que cria o novo campo de texto
function criarTextArea() {
    var novoText = document.createElement("INPUT");
    novoText.setAttribute("type", "text");
    novoText.placeholder = "Mensagem"
    lista.appendChild(novoText);

    novoFieldset.appendChild(novoText);

    //inserindo a mesma classe dos outros campos do texto
    novoText.classList.add("form-control");
    //inserindo um pouco de margin pra não ficar grudado
    novoText.style.marginTop = "10px";
    novoText.style.marginBottom = "10px";
}

//invocando essa função
criarTextArea()

//criando função que cria o combobox
function criarSelect() {
    var select = document.createElement("SELECT");
    select.setAttribute("id", "id_select");
    lista.appendChild(select);
    //inserindo a mesma classe dos outros campos do texto pra ficar no mesmo estilo
    select.classList.add("form-control");
  
    var option1 = document.createElement("option");
    option1.setAttribute("value", "SUV");
    var text1 = document.createTextNode("SUV");
    option1.appendChild(text1);
    
    var option2 = document.createElement("option");
    option2.setAttribute("value", "Senda");
    var text2 = document.createTextNode("Senda");
    option2.appendChild(text2);
    
    var option3 = document.createElement("option");
    option3.setAttribute("value", "Hatch");
    var text3 = document.createTextNode("Hatch");
    option3.appendChild(text3);
    
    var option4 = document.createElement("option");
    option4.setAttribute("value", "Pickup");
    var text4 = document.createTextNode("Pickup");
    option4.appendChild(text4);
    
    document.getElementById("id_select").appendChild(option1);
    document.getElementById("id_select").appendChild(option2);
    document.getElementById("id_select").appendChild(option3);
    document.getElementById("id_select").appendChild(option4);

    novoFieldset.appendChild(select);
}

//invocando essa função
criarSelect()
