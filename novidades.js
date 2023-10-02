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
    }
}

window.onload = init;