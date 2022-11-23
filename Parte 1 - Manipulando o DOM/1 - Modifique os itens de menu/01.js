//guardando a lista em uma variavel
var lista = document.getElementsByClassName('nav nav--accordion-mobile')[0]

//guardando os itens da lista para inserir no dropdown
var item01 = document.getElementsByClassName('nav-item nav-simple__item ')[1]
var item02 = document.getElementsByClassName('nav-item nav-simple__item ')[2]

//setando id na lista
lista.setAttribute("id", "id_lista");

//função pra criar um item dropdown
function criaDropdown() {
    //cria dropdown
    var novoDrop = document.createElement("li");
    novoDrop.style = "--animation-index: 1"
    novoDrop.setAttribute("class", "nav-item nav-simple__item")
    novoDrop.setAttribute("aria-expanded", "false")
    novoDrop.setAttribute("id", "id_drop")

    //ancora do dropdown
    var dropA = document.createElement("a");
    dropA.setAttribute("href", "/autoforce-ford#")
    dropA.setAttribute("class", "nav-link nav-simple__link")
    dropA.setAttribute("data-toggle", "dropdown")
    dropA.innerHTML = "Veículos"
    novoDrop.appendChild(dropA);

    //icone de setinha
    var aI = document.createElement("i");
    aI.setAttribute("class", "icon icon-dropdown icon-arrow-d")
    dropA.appendChild(aI);

    //inserindo div no dropdown
    var dropDiv = document.createElement("div");
    dropDiv.setAttribute("id", "id_div");
    dropDiv.setAttribute("class", "nav-simple-sub card-collapse-deep dropdown-menu")
    novoDrop.appendChild(dropDiv);

    //inserindo lista no div
    var divUl = document.createElement("ul");
    divUl.setAttribute("class", "list list--border-bottom")
    divUl.setAttribute("id", "id_ul")
    dropDiv.appendChild(divUl);

    //inserindo itens na lista
    var ulLi01 = document.createElement("li");
    divUl.appendChild(ulLi01);
    ulLi01.appendChild(item01)
    item01.setAttribute("class", "card-collapse-deep__title")
    item01.removeAttribute("style")
    item01.setAttribute("href", "https://testes.autoforce.com.br/autoforce-ford/novos")
    item01.style.listStyle = "none";

    var ulLi02 = document.createElement("li");
    divUl.appendChild(ulLi02);
    ulLi02.appendChild(item02)
    item02.setAttribute("class", "card-collapse-deep__title")
    item02.removeAttribute("style")
    item02.setAttribute("href", "https://testes.autoforce.com.br/autoforce-ford/seminovos")
    item02.style.listStyle = "none";

    //inserindo dropdown na lista
    lista.appendChild(novoDrop)
}

criaDropdown()

var botaoDrop = document.getElementById('id_drop')
var ul = document.getElementById('id_ul')
var div = document.getElementById('id_div')

//Abrir e fechar do drop
botaoDrop.addEventListener('click', ()=>{
    if (botaoDrop.ariaExpanded == "true") {
        ul.style.display = "none";
        botaoDrop.setAttribute("aria-expanded", "false")
        botaoDrop.setAttribute("class", "nav-item nav-simple__item")
        div.setAttribute("class", "nav-simple-sub card-collapse-deep dropdown-menu")
    } else {
        ul.style.display = "block";
        botaoDrop.setAttribute("aria-expanded", "true")
        botaoDrop.setAttribute("class", "nav-item nav-simple__item show")
        div.setAttribute("class", "nav-simple-sub card-collapse-deep dropdown-menu show")
    }
})
