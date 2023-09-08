var valor = 0;

function adiciona() {
    valor++;
    atualizaValor();
}

function subtrai() {
    if (valor > 0) {
        valor--;
    }
    atualizaValor();
}

function atualizaValor() {
    document.querySelector('p').innerHTML = valor;
}
