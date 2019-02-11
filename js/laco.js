// Instanciar a variável local para armazenamento
const localStorageValue = localStorage.getItem('myListStoraged');
const valueParsed = JSON.parse(localStorageValue);

// Caso a variável "valueParsed" seja null então inicializar
const myList = valueParsed || [];

let LACO = {
    escolha1: "",
    escolha2: "",
    nomeForm1: "",
    emailForm1: "",
    nomeForm2: "",
    emailForm2: ""
}

/*let escolha1 = {
    escolha: ""
};*/
let escolha2 = "";
let nomeForm1 = "";
let emailForm1 = "";
let nomeForm2 = "";
let emailForm2 = "";

/*
function addOnInputEventOnInput() {

    
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
                result.data.forEach(element => {
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

function addAction2Form(idForm, theAction) {

    //alert(idForm);
    //alert(theAction);
    jQuery(idForm).attr("action", theAction);

}*/

function saveListInLocalStorage() {
    //alert('gravar');
    localStorage.setItem('myListStoraged', JSON.stringify(myList));
}

function addEventOnSubmitForm1(idForm) {
    // Alterar o conteúdo em função do click
    jQuery(idForm).on('submit', function (event) {
        //event.preventDefault();
        // Obter os elementos input do tipo text
        formForm1 = jQuery('#' + event.target.id + " :input[type='text']");

        formForm1.each((index, elemForm) => {
            //btnElement.addEventListener("click", processButtonOperation);
            if (elemForm.id === 'nomeOrigem')
                nomeForm1 = elemForm.value;

            if (elemForm.id === 'emailOrigem')
                emailForm1 = elemForm.value;
        });
    });
}

function addEventOnSubmitForm2(idForm) {
    // Alterar o conteúdo em função do click
    jQuery(idForm).on('submit', function (event) {
        event.preventDefault();
        // Obter os elementos input do tipo text
        formForm1 = jQuery('#' + event.target.id + " :input[type='text']");

        formForm1.each((index, elemForm) => {
            //btnElement.addEventListener("click", processButtonOperation);
            if (elemForm.id === 'nomeDestino')
                nomeForm2 = elemForm.value;

            if (elemForm.id === 'emailDestino')
                emailForm2 = elemForm.value;

            //alert('nomeForm2: ' + nomeForm2);
            //alert('emailForm2: ' + emailForm2);
        });
    });
}

function addEventOnSubmit(idButton, idForm, theAction) {

    // Alterar o conteúdo em função do click
    jQuery(idButton).on('click', function (event) {
        event.preventDefault();
        saveListInLocalStorage();
        jQuery(idForm).attr("action", theAction);
        jQuery(idForm).submit();
    });
}



function addEventOnClickEscolha1(idButton) {
    jQuery(idButton).on("click", function (event) {
        event.preventDefault();
        let btnTarget = event.target;
        LACO.escolha1 = btnTarget.value;
        //alert("LACO.escolha1: " + LACO.escolha1);
        myList.push(LACO);
    });
}

function addEventOnClickEscolha2(idButton) {
    jQuery(idButton).on("click", function (event) {
        event.preventDefault();
        let btnTarget = event.target;
        escolha2 = btnTarget.value;
        //alert("escolha2: " + escolha2);
    });
}

addEventOnClickEscolha1('#id-btn-escolhaa-a');
addEventOnClickEscolha1('#id-btn-escolhaa-b');
addEventOnClickEscolha2('#id-btn-escolha-h');
addEventOnClickEscolha2('#id-btn-escolha-m');


addEventOnSubmitForm1('#id-form-1-laco');
addEventOnSubmitForm2('#id-form-2-laco');

// Página de entrada
//addAction2Form('#form-fortaleca', '/projecto.360.io/escolha-1.html');
addEventOnSubmit('#id-btn-go-fortaleca', '#id-form-fortaleca', '/projecto.360.io/pages/escolha-1.html');

// Página escolha-1
//addAction2Form('#form-escolha-1', '/projecto.360.io/escolha-2.html');
addEventOnSubmit('#id-btn-go-escolha-1', '#id-form-escolha-1', '/projecto.360.io/pages/escolha-2.html');
addEventOnSubmit('#id-btn-back-escolha-1', '#id-form-escolha-1', '/projecto.360.io/index.html');


// Página escolha-2
//addAction2Form('#form-escolha-2', '/projecto.360.io/form-1.html');
addEventOnSubmit('#id-btn-go-escolha-2', '#id-form-escolha-2', '/projecto.360.io/pages/form-1.html');
addEventOnSubmit('#id-btn-back-escolha-2', '#id-form-escolha-2', '/projecto.360.io/pages/escolha-1.html');


// Página form-1
//addAction2Form('#form-1-laco', '/projecto.360.io/form-2.html');
addEventOnSubmit('#id-btn-go-form-1', '#id-form-1', '/projecto.360.io/pages/form-2.html');
addEventOnSubmit('#id-btn-back-form-1', '#id-form-1', '/projecto.360.io/pages/escolha-2.html');

// Página form-2
//addAction2Form('#form-2-laco', '/projecto.360.io/parabens.html');
addEventOnSubmit('#id-btn-go-form-2', '#id-form-2', '/projecto.360.io/pages/parabens.html');
addEventOnSubmit('#id-btn-back-form-2', '#id-form-2', '/projecto.360.io/pages/form-1.html');

// Página parabens
//addAction2Form('#form-parabens', '/projecto.360.io/lacoFortalecido.html');
addEventOnSubmit('#id-btn-go-parabens', '#id-form-parabens', '/projecto.360.io/pages/lacoFortalecido.html');

// Página laco
// Para já manter na mesma página
//addAction2Form('#form-laco', '/projecto.360.io/lacoFortalecido.html');
addEventOnSubmit('#id-btn-go-laco', '#id-form-laco', '/projecto.360.io/pages/lacoFortalecido.html');

//addEventListener2ButtonVoltar(); 

/*
jQuery(document).ready(function (event) {
    // Carregar o header e o footer
    loadJqInclude(); 
    loadHome(); 
});  */