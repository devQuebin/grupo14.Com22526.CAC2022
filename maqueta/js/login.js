const form=document.getElementById("form-login");
const inputs=document.querySelectorAll("#form-login input");


const exReg = {
    username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{4,12}$/ // 4 a 12 digitos.
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
        case "username":
            console.log("funciona")
            validarCampo(exReg.username, e.target, 'username')
        break;
        case "password":
            validarCampo(exReg.password, e.target, 'password')
        break;
    }
}


inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})


form.addEventListener('submit', (e)=>{
    e.preventDefault();
})