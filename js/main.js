let form = document.querySelector('.form')
let mensagemErro = document.querySelectorAll('.disappear')
let inputs = document.querySelectorAll('.input-form');

console.log(inputs[0].id);

form.addEventListener('submit', (e) => {
    e.preventDefault()
    inputs.forEach((e) => {
        verificaCampo(e)
    })
})

function verificaCampo(campo) {
    if(campo.value == '') {
        exibeMensagemErro(campo.id)
    } else {
        retiraMensagemErro(campo.id)
    }
}

function exibeMensagemErro(id) {
    mensagemErro[id].classList.remove('disappear')
    mensagemErro[id].classList.add('error')
}

function retiraMensagemErro(id) {
    mensagemErro[id].classList.remove('error')
    mensagemErro[id].classList.add('disappear')
}

console.log(mensagemErro);

