const form=document.getElementById("form-login");
const inputs=document.querySelectorAll("#form-login input");


const exReg = {
    username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{4,12}$/ // 4 a 12 digitos.
}

const campos={
    username: false,
    password: false
}

const validarCampo=(expresion, input, campo)=> {
    if (expresion.test(input.value)) {
        document.getElementById(`section__${campo}`).classList.remove('form__section-incorrect');
        document.getElementById(`section__${campo}`).classList.add('form__section-correct');
        document.querySelector(`#section__${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#section__${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#section__${campo} .form__section-error`).classList.remove('form__section-error-activo');
        campos[campo]=true;
    } else {
        document.getElementById(`section__${campo}`).classList.add('form__section-incorrect');
        document.getElementById(`section__${campo}`).classList.remove('form__section-correct');
        document.querySelector(`#section__${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#section__${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#section__${campo} .form__section-error`).classList.add('form__section-error-activo');
        campos[campo]=false;
    }
}


const validarFormulario = (e)=> {
    switch (e.target.name) {
        case "username":
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



function eventoSubmit(e){
    e.preventDefault();

    if (campos.username && campos.password){
        form.reset();
        Object.entries(campos).forEach(([key, val]) => {
            campos[key] = false;
        });
        document.getElementById('form__section-warning').classList.remove('form__section-warning-activo');
        document.getElementById('txt-exito').classList.add('txt-exito-activo');
        setTimeout(()=>{document.getElementById('txt-exito').classList.remove('txt-exito-activo')} , 5000);
        setTimeout( function() { window.location.href = "index.html"; }, 3000 );

        document.querySelectorAll('.form__section-correct').forEach((icono)=>{
            icono.classList.remove('from__section-correct');  //no funciona
            console.log("sacando iconos tilde")
        });
    } else {
        document.getElementById('form__section-warning').classList.add('form__section-warning-activo');
    }  
};

form.addEventListener('submit',eventoSubmit);