function init(){
    VerificaTema();
};

function VerificaTema() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // O sistema operacional está usando o tema escuro
        document.body.classList.add('tema-escuro');
    } else {
        // O sistema operacional está usando o tema claro
        document.body.classList.add('tema-claro');

        
        // Seleciona todos os elementos com a classe "link"
        var elementosComClasseLink = document.querySelectorAll('.link');

        // Itera sobre os elementos e altera a classe
        elementosComClasseLink.forEach(function(elemento) {
            // Remove a classe "link" do elemento
            elemento.classList.remove('link');
    
            // Adiciona a classe "link-escuro" ao elemento
            elemento.classList.add('link-escuro');
        });
    }
}

window.onload = init;