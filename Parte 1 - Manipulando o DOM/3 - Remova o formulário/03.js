//selecionando o botão
var botao = document.getElementsByClassName('vehicles-new__button-whatsapp btn button button--large button--section button--whatsapp')[0]

//removendo todos os atributos que ativam a função atual
function limparClasses(){
    botao.removeAttribute("data-product");
    botao.removeAttribute("data-channel");
    botao.removeAttribute("data-category");
    botao.removeAttribute("data-brand");
    botao.removeAttribute("data-link");
    botao.removeAttribute("data-units");
    botao.removeAttribute("data-show-cpf");
    botao.removeAttribute("data-show-units");
    botao.removeAttribute("data-versions");
    botao.removeAttribute("data-show-location-fields");
    botao.removeAttribute("data-should-show-data-permissions");
    botao.removeAttribute("data-data-permissions-custom-text");
    botao.removeAttribute("data-link-privacy-policy");
}

//invocando a função que limpa as classes
limparClasses()

//adicionando novo comportamento ao botão
botao.addEventListener('click', ()=>{
    window.location='https://api.whatsapp.com/send?phone=5511999999999';
})
