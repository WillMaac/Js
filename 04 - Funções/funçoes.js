

function icrementarJuros(valor, porcentualJuros) {
    const valorDeAcrecimo=(porcentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(icrementarJuros(100, 15));

icrementarJuros();