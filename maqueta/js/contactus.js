const form=document.getElementById("form-contact");
const inputs=document.querySelectorAll("#form-contact input");
const textarea=document.querySelector("#form-contact textarea");


const exReg = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    textArea: /^[\s\S]{1,600}$/
}



const validarCampo=(expresion, input, campo)=> {
    if (expresion.test(input.value)) {
        document.getElementById(`section__${campo}`).classList.remove('form__section-incorrect');
        document.getElementById(`section__${campo}`).classList.add('form__section-correct');
        document.querySelector(`#section__${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#section__${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#section__${campo} .form__section-error`).classList.remove('form__section-error-activo');
    } else {
        document.getElementById(`section__${campo}`).classList.add('form__section-incorrect');
        document.getElementById(`section__${campo}`).classList.remove('form__section-correct');
        document.querySelector(`#section__${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#section__${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#section__${campo} .form__section-error`).classList.add('form__section-error-activo');
    }
}



const validarFormulario = (e)=> {
    switch (e.target.name) {
        case "first_name":
            validarCampo(exReg.name, e.target, 'first-name');
        break;
        case "last_name":
            validarCampo(exReg.name, e.target, 'last-name');
        break;
        case "email":
            validarCampo(exReg.email, e.target, 'email');
        break;
        case "message":
            validarCampo(exReg.textArea, e.target, 'message');
        break;
    }
}


inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

textarea.addEventListener('keyup', validarFormulario);
textarea.addEventListener('blur', validarFormulario);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
})


