//preciso crar uma variavel para poder manipular mais facilmente esse item
var popup = document.getElementById("popup-whats");

//removendo o onclick do botão para deixar de acionar a função já existente
popup.removeAttribute("onclick")

//essa função cria a lista que deve aparecer quando o botão for clicado
function criarPopup() {
    var lista = document.createElement("UL");
    lista.setAttribute("id", "id_lista");
    lista.setAttribute("hidden", "hidden")
    popup.appendChild(lista);
  
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    
    document.getElementById("id_lista").appendChild(li1);
    document.getElementById("id_lista").appendChild(li2);
    document.getElementById("id_lista").appendChild(li3);

    var a1 = document.createElement("a");
    var text1 = document.createTextNode("Seminovos");
    a1.appendChild(text1);
    var a2 = document.createElement("a");
    var text2 = document.createTextNode("Serviços");
    a2.appendChild(text2);
    var a3 = document.createElement("a");
    var text3 = document.createTextNode("Central de Vendas");
    a3.appendChild(text3);
    
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);

    a1.href = "https://api.whatsapp.com/send?phone=5511999999999"
    a2.href = "https://api.whatsapp.com/send?phone=5511111111111"
    a3.href = "https://api.whatsapp.com/send?phone=5511888888888"
}

//invocando essa função
criarPopup()

//aqui tem um escutador de evento para abrir a lista de links
popup.addEventListener('click', ()=>{
    var listaPopup = document.getElementById("id_lista");
    listaPopup.removeAttribute("hidden")
    //um pouco de css pra ficar mais legivel
    listaPopup.style.backgroundColor = "#00a86b";
    listaPopup.style.borderRadius = "5%";
    listaPopup.style.listStyle = "none";
    listaPopup.style.width = "250px";
    listaPopup.style.height = "80px";
    listaPopup.style.textDecoration = "none";
})
