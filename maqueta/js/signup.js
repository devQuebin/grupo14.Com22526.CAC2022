const form=document.getElementById("form-signup");
const inputs=document.querySelectorAll("#form-signup input");


const exReg = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{4,12}$/ // 4 a 12 digitos.
}


const campos={
    username: false,
    first_name: false,
    last_name: false,
    email: false,
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


const validarPassword2=()=>{
    const inputPass1=document.getElementById('password');
    const inputPass2=document.getElementById('password2');

    if (inputPass1.value!==inputPass2.value){
        document.getElementById(`section__password2`).classList.add('form__section-incorrect');
        document.getElementById(`section__password2`).classList.remove('form__section-correct');
        document.querySelector(`#section__password2 i`).classList.add('fa-circle-xmark');
        document.querySelector(`#section__password2 i`).classList.remove('fa-circle-check');
        document.querySelector(`#section__password2 .form__section-error`).classList.add('form__section-error-activo');
        campos['password']=false;
    } else {
        document.getElementById(`section__password2`).classList.remove('form__section-incorrect');
        document.getElementById(`section__password2`).classList.add('form__section-correct');
        document.querySelector(`#section__password2 i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#section__password2 i`).classList.add('fa-circle-check');
        document.querySelector(`#section__password2 .form__section-error`).classList.remove('form__section-error-activo');
        campos['password']=true;
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
        case "username":
            validarCampo(exReg.username, e.target, 'username')
        break;
        case "password":
            validarCampo(exReg.password, e.target, 'password')
            validarPassword2()
        break;
        case "password2":
            validarPassword2();
        break;
    }
}


inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


form.addEventListener('submit', (e)=>{
    console.log('boton send');
    e.preventDefault();

    const terms= document.getElementById('terms');
    if (campos.username && campos.first_name && campos.last_name && campos.email && campos.password && terms.checked){
        form.reset();
        console.log("func");

        document.getElementById('txt-exito').classList.add('txt-exito-activo');
        setTimeout(()=>{document.getElementById('txt-exito').classList.remove('txt-exito-activo')} , 5000);

        document.querySelectorAll('.form__section-correct').forEach((icono)=>{
            icono.classList.remove('from__section-correct');
        })
    } else {
        console.log('mal')
        document.getElementById('form-warning').classList.add('form__section-warning-activo');
    }


    
});


