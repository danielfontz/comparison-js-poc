// index.js
const readline = require('readline');
const { validarCadastro, compararObjetos } = require('./validador');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== SISTEMA DE CADASTRO SEGURO ===");
console.log("Demonstração de Operadores de Comparação\n");

rl.question('Crie sua senha: ', (senha) => {
    rl.question('Confirme sua senha: ', (confirmacao) => {
        
        // Passo 1: Validação usando ===
        const resultadoSenha = validarCadastro(senha, confirmacao);
        
        if (resultadoSenha.sucesso) {
            console.log("\n[SUCESSO] " + resultadoSenha.msg);
            
            // Passo 2: Demonstração de Comparação de Objetos (Simulando Banco de Dados)
            console.log("\n--- Verificando integridade dos dados do usuário ---");
            
            const novoUsuario = { user: 'aluno', role: 'admin' };
            const usuarioBanco = { user: 'aluno', role: 'admin' };
            
            // Tentativa errada (comparação direta)
            console.log(`Comparação Direta (obj === obj): ${novoUsuario === usuarioBanco}`); 
            
            // Tentativa correta (comparação profunda implementada no validador)
            const saoIguais = compararObjetos(novoUsuario, usuarioBanco);
            console.log(`Comparação Profunda (conteúdo): ${saoIguais}`);
            
        } else {
            console.log("\n[ERRO] " + resultadoSenha.msg);
            console.log(`Dica: Verifique se não há espaços extras ou tipos diferentes.`);
        }
        
        rl.close();
    });
});