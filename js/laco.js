// Instanciar a variável local para armazenamento
const localStorageValue = localStorage.getItem('myListStoraged');
const valueParsed = JSON.parse(localStorageValue);

// Limpar a cache
//localStorage.removeItem('myListStoraged');
//localStorage.clear();


// Caso a variável "valueParsed" seja null então inicializar
const myList = valueParsed || [];
//saveListInLocalStorage();

let validaInputForm = true;

let LACO = {
    escolha1a: "",
    escolha1b: "",
    escolha2a: "",
    escolha2b: "",
    nomeForm1: "",
    emailForm1: "",
    nomeForm2: "",
    emailForm2: ""
}

/*let escolha1 = {
    escolha: ""
};*/
/*let escolha2 = "";
let nomeForm1 = "";
let emailForm1 = "";
let nomeForm2 = "";
let emailForm2 = "";
*/
const ID_MAIN_ESCOLHA1 = 'id-main-escolha-1';
const QS_ID_MAIN_ESCOLHA1 = '#' + ID_MAIN_ESCOLHA1;

const ID_MAIN_ESCOLHA2 = 'id-main-escolha-2';
const QS_ID_MAIN_ESCOLHA2 = '#' + ID_MAIN_ESCOLHA2;


const ID_BTN_ESCOLHA1_A = 'id-btn-escolha1-a';
const QS_ID_BTN_ESCOLHA1_A = '#' + ID_BTN_ESCOLHA1_A;

const ID_BTN_ESCOLHA1_B = 'id-btn-escolha1-b';
const QS_ID_BTN_ESCOLHA1_B = '#' + ID_BTN_ESCOLHA1_B;

const ID_BTN_ESCOLHA2_A = 'id-btn-escolha2-a';
const QS_ID_BTN_ESCOLHA2_A = '#' + ID_BTN_ESCOLHA2_A;

const ID_BTN_ESCOLHA2_B = 'id-btn-escolha2-b';
const QS_ID_BTN_ESCOLHA2_B = '#' + ID_BTN_ESCOLHA2_B;




function clearListInLocalStorage(){
    localStorage.clear();
    let lst = [];
    localStorage.setItem('myListStoraged', JSON.stringify(lst));
}
function saveListInLocalStorage() {
    //alert('gravar');
    localStorage.setItem('myListStoraged', JSON.stringify(myList));
}

function addEventOnSubmitForm1(idForm) {
    // Alterar o conteúdo em função do click
    validaInputForm = true;

    jQuery(idForm).on('submit', function (event) {
        // alert("addEventOnSubmitForm1");
        //event.preventDefault();
        // Obter os elementos input do tipo text
        formForm1 = jQuery('#' + event.target.id + " :input[type='text']");

        formForm1.each((index, elemForm) => {
            //btnElement.addEventListener("click", processButtonOperation);
            if (elemForm.id === 'nomeOrigem') {
                //alert("elemForm.value: " + elemForm.value);

                if (elemForm.value === "" && validaInputForm) {
                    //alert("falta preencher dados");
                    event.preventDefault();
                    jQuery('#' + elemForm.id).toggleClass('input__error');

                } else {
                    nomeForm1 = elemForm.value;
                    jQuery('#' + elemForm.id).removeClass('input__error');
                }
            }


            if (elemForm.id === 'emailOrigem') {

                if (elemForm.value === "" && validaInputForm) {
                    //alert("falta preencher dados");
                    event.preventDefault();
                    jQuery('#' + elemForm.id).toggleClass('input__error');
                } else {
                    emailForm1 = elemForm.value;
                    jQuery('#' + elemForm.id).removeClass('input__error');
                }
            }

        });
    });
}

function addEventOnSubmitForm2(idForm) {
    validaInputForm = true;
    // Alterar o conteúdo em função do click
    jQuery(idForm).on('submit', function (event) {
        //event.preventDefault();
        // Obter os elementos input do tipo text
        formForm1 = jQuery('#' + event.target.id + " :input[type='text']");

        formForm1.each((index, elemForm) => {
            //btnElement.addEventListener("click", processButtonOperation);
            if (elemForm.id === 'nomeDestino') {

                if (elemForm.value === "" && validaInputForm) {
                    //alert("falta preencher dados");
                    event.preventDefault();
                    jQuery('#' + elemForm.id).toggleClass('input__error');
                } else {
                    nomeForm2 = elemForm.value;
                    jQuery('#' + elemForm.id).removeClass('input__error');
                }
            }


            if (elemForm.id === 'emailDestino') {

                if (elemForm.value === "" && validaInputForm) {
                    //alert("falta preencher dados");
                    event.preventDefault();
                    jQuery('#' + elemForm.id).toggleClass('input__error');
                } else {
                    emailForm2 = elemForm.value;
                    jQuery('#' + elemForm.id).removeClass('input__error');
                }
            }


            //alert('nomeForm2: ' + nomeForm2);
            //alert('emailForm2: ' + emailForm2);
        });
    });
}

function isButtonActive(idButton) {
    //alert("idButton: " + idButton);
    if (idButton === '#id-btn-go-escolha-1') {
        //lert("hasclass: " + jQuery(idButton).hasClass("btn-continuar__active"));
        return jQuery(idButton).hasClass("btn-continuar__active");
    }
    if (idButton === '#id-btn-go-escolha-2') {
        //alert("hasclass: " + jQuery(idButton).hasClass("btn-continuar__active"));
        return jQuery(idButton).hasClass("btn-continuar__active")
    }
    if (idButton === '#id-btn-go-form-1') {
        //return jQuery(idButton).hasClass("btn-continuar__active")
        return true;
    }
    if (idButton === '#id-btn-go-form-2') {
        //return jQuery(idButton).hasClass("btn-continuar__active")
        return true;
    }
    if (idButton === '#id-btn-go-fortaleca') {
        //return jQuery(idButton).hasClass("btn-continuar__active")
        return true;
    }

    if (idButton === '#id-btn-back-escolha-1') {
        //return jQuery(idButton).hasClass("btn-continuar__active")
        validaInputForm = false;
        return true;
    }
    if (idButton === '#id-btn-back-escolha-2') {
        //return jQuery(idButton).hasClass("btn-continuar__active")
        validaInputForm = false;
        return true;
    }
    if (idButton === '#id-btn-back-form-1') {
        //return jQuery(idButton).hasClass("btn-continuar__active")
        validaInputForm = false;
        return true;
    }
    if (idButton === '#id-btn-back-form-2') {
        validaInputForm = false;
        //return jQuery(idButton).hasClass("btn-continuar__active")
        return true;
    }






    return false;

}

/*
function validarForm(idForm) {
    return true;
}*/

function addEventOnSubmit(idButton, idForm, theAction) {

    // Alterar o conteúdo em função do click
    jQuery(idButton).on('click', function (event) {
        event.preventDefault();
        if (isButtonActive(idButton)) {
            // Se o botão estiver ativo, verificar se é 
            // uma das páginas do formulário.
            // Se sim, validar se os campos estão preenchidos
            // Se existir pelo menos um campo não preenchido
            // então não deixar avançar e destacar o campo
            // que deve ser preenchido
            /*if (idForm === '#id-form-1' || idForm === '#id-form-2') {
                // Validar form
                validarForm(idForm);
            }*/
            saveListInLocalStorage();
            jQuery(idForm).attr("action", theAction);
            jQuery(idForm).submit();
        }

    });
}

function activateDesactivateEscolha1(idButton) {
    //alert(idButton);

    if (idButton === 'id-btn-escolha1-a') {
        jQuery('#'+idButton).toggleClass('btn-escolha1-a__active');
        jQuery("#id-btn-escolha1-b").removeClass('btn-escolha1-b__active');
    }

    if (idButton === 'id-btn-escolha1-b') {
        jQuery('#'+idButton).toggleClass('btn-escolha1-b__active');
        jQuery("#id-btn-escolha1-a").removeClass('btn-escolha1-a__active');
    }
    jQuery("#id-btn-go-escolha-1").attr('class', 'btn-continuar__active');
    
}

function atualizaEscolha1(escolha1, idButton){

    if(myList.length == 0)
        myList.push(LACO);
    
    LACO = myList[0];
    if(idButton === 'id-btn-escolha1-a'){
        LACO.escolha1a = escolha1;
        LACO.escolha1b = "";
    }
        

    if(idButton === 'id-btn-escolha1-b'){
        LACO.escolha1b = escolha1;
        LACO.escolha1a = "";
    }
        

}


function addEventOnClickEscolha1(idButton) {
    //alert('add evento: ' + idButton);
    jQuery(idButton).on("click", function (event) {
        event.preventDefault();
        let btnTarget = event.target;
        atualizaEscolha1(btnTarget.value, btnTarget.id);
        activateDesactivateEscolha1(btnTarget.id);
    });
}


function activateDesactivateEscolha2(idButton) {
    //alert(idButton);

    if (idButton === 'id-btn-escolha2-a') {
        jQuery('#'+idButton).toggleClass('btn-escolha2-a__active');
        jQuery("#id-btn-escolha2-b").removeClass('btn-escolha2-b__active');
    }

    if (idButton === 'id-btn-escolha2-b') {
        jQuery('#'+idButton).toggleClass('btn-escolha2-b__active');
        jQuery("#id-btn-escolha2-a").removeClass('btn-escolha2-a__active');
    }

    jQuery("#id-btn-go-escolha-2").attr('class', 'btn-continuar__active');
}

function atualizaEscolha2(escolha2, idButton){

    if(myList.length == 0)
        myList.push(LACO);
    
    LACO = myList[0];
    if(idButton === 'id-btn-escolha2-a'){
        LACO.escolha2a = escolha2;
        LACO.escolha2b = "";
    }
        

    if(idButton === 'id-btn-escolha2-b'){
        LACO.escolha2b = escolha2;
        LACO.escolha2a = "";
    }

}

function addEventOnClickEscolha2(idButton) {
    jQuery(idButton).on("click", function (event) {
        event.preventDefault();
        let btnTarget = event.target;
        atualizaEscolha2( btnTarget.value,  btnTarget.id);
        activateDesactivateEscolha2(btnTarget.id);
        //escolha2 = btnTarget.value;
        

    });
}



addEventOnClickEscolha1(QS_ID_BTN_ESCOLHA1_A);
addEventOnClickEscolha1(QS_ID_BTN_ESCOLHA1_B);
addEventOnClickEscolha2(QS_ID_BTN_ESCOLHA2_A);
addEventOnClickEscolha2(QS_ID_BTN_ESCOLHA2_B);


addEventOnSubmitForm1('#id-form-1');
addEventOnSubmitForm2('#id-form-2');

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


function activateOptions(idMain) {
    
    // Se a lista não tiver elementos, nada a fazer
    if(myList.length == 0)
        return;
    
    LACO = myList[0];

    if(idMain === ID_MAIN_ESCOLHA1){
        if( LACO.escolha1b != "" && LACO.escolha1a === ""){
            activateDesactivateEscolha1(ID_BTN_ESCOLHA1_B);
            return;    
        }
        if( LACO.escolha1b === "" && LACO.escolha1a != ""){
            activateDesactivateEscolha1(ID_BTN_ESCOLHA1_A);
            return;    
        }     
    }

    if(idMain === ID_MAIN_ESCOLHA2){
        if( LACO.escolha2b != "" && LACO.escolha2a === ""){
            activateDesactivateEscolha2(ID_BTN_ESCOLHA2_B);
            return;    
        }
        if( LACO.escolha2b === "" && LACO.escolha2a != ""){
            activateDesactivateEscolha2(ID_BTN_ESCOLHA2_A);
            return;    
        }     
    }
}


//clearListInLocalStorage();
//alert("LACO.escolha1: " + myList[0].escolha1);

/*

function addEventOnClickSelectButton(idButton) {

    // Alterar o conteúdo em função do click
    jQuery(idButton).on('click', function (event) {
        event.preventDefault();
        //saveListInLocalStorage();
        //jQuery(idForm).attr("action", theAction);
        //jQuery(idForm).submit();
    });
}*/


jQuery(document).ready(function (event) {
    
     if(jQuery(QS_ID_MAIN_ESCOLHA1).length){
        //alert('existe');
        activateOptions(ID_MAIN_ESCOLHA1);
        return;
     }

     if(jQuery(QS_ID_MAIN_ESCOLHA2).length){
        //alert('existe');
        activateOptions(ID_MAIN_ESCOLHA2);
        return;
     }

    //activateOptions('id-main-escolha-1');
    //activateOptions('id-main-escolha-2');

});
