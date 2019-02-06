jQuery('id-form-laco-submit'); 

alert('Fortaleceste um laço'); 

function addOnInputEventOnInput() {

    // Submeter o formulário
    jQuery("#pesqGatinhos").on('input', function (event) {

        jQuery(".images-container").html(''); 
        jQuery(".images-container").append('<p><img class="imgDefault" src=default.gif></p>'); 
        clearTimeout(myTimeOut); 
        myTimeOut = setTimeout(function () {



            let pesquisar = jQuery("#pesqGatinhos").val(); 
            jQuery.ajax(
                "http://api.giphy.com/v1/gifs/search?q=+" + pesquisar + "+&limit=10&api_key=dc6zaTOxFJmzC").done(function (result) {
                console.log(result); 
                jQuery(".images-container").html(''); 
                result.data.forEach(element =>  {
                    const url2show = element.images.original.url; 
                    jQuery(".images-container").append('<p><img class="main img" src=' + url2show + '></p>'); 
                }); 

            }); 
        }, 3500); 

    }); 

}

const ID_INPUT_VALUE = '#id-form-laco-submit'; 

function getElementId(idElement) {
    return document.querySelector(idElement); 
}

function addEventListener2ButtonLaco() {
    let lstBotao = getElementId(ID_INPUT_VALUE); 
    lstBotao.addEventListener("click", addOnInputEventOnInput); 


}

function addEventOnSubmit2ButtonContinuar() {
    // Alterar o conteúdo em função do click
    jQuery('id-btn-to-esolha-2').on('submit', function (event) {
        event.preventDefault(); 
        alert('teste'); 

    }); 
}

addEventOnSubmit2ButtonContinuar(); 
//addEventListener2ButtonVoltar(); 

/*
jQuery(document).ready(function (event) {
    // Carregar o header e o footer
    loadJqInclude(); 
    loadHome(); 
});  */