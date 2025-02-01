let form = document.querySelector('form')
let name  = document.querySelector('input')

form.addEventListener('submit', function (e){
    e.preventDefault()
    if (name.value.trim().length===0){
        alert('please enter your name')
    }
    else {
        alert(`Goodmorning ${name.value.trim()}!`)
    }
})