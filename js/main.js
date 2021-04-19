// Declarando variáveis
var btnContact = document.getElementById("jl-btn-contact");

//Page preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.jl-preloader');
    pagePreloder.classList.add('jl-fade-out');
 
    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Abrindo e fechando informações de Contato
btnContact.addEventListener("click",function(){ 
    var boxContact = document.getElementById("jl-btn-contact-info");
    
    boxContact.classList.toggle("jl-is-open");

    this.classList.toggle("jl-change-icon");
});
