// validador.js

/**
 * Valida se a senha e a confirmação são estritamente iguais.
 * @param {string} senha 
 * @param {string} confirmacao 
 * @returns {object} Resultado da validação
 */
function validarCadastro(senha, confirmacao) {
    // USO DE === (Estrito)
    // Se usássemos ==, algo bizarro como 0 == '0' poderia passar em sistemas mal feitos
    // ou coerções indesejadas de formulários frontend.
    if (senha === confirmacao) {
        return { sucesso: true, msg: "Senhas coincidem perfeitamente (Valor e Tipo)." };
    } else {
        return { sucesso: false, msg: "As senhas não conferem." };
    }
}

/**
 * Compara dois objetos verificando suas propriedades (Deep Equality simples)
 * Explicação: Objetos em JS são comparados por referência de memória.
 * Para comparar o conteúdo, precisamos converter para string ou comparar chave por chave.
 */
function compararObjetos(obj1, obj2) {
    // Método rápido para objetos simples: JSON.stringify
    // Transforma {a:1} na string '{"a":1}' e compara as strings.
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

module.exports = { validarCadastro, compararObjetos };