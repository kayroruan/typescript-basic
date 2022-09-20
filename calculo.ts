interface passarInfo {
    nome: string,
    anoNascimento: number,
    profissao?: string
}

function calcularIdade({
    nome,
    anoNascimento,
    profissao
}: passarInfo): string {
    const idade: number = 2021 - anoNascimento

    if (profissao) {
        return `Seu nome é ${nome}, você tem ${idade} anos de idade, atua como ${profissao}`
    }

    return `Seu nome é ${nome}, você tem ${idade} anos de idade.`
}

const nome = 'Kayro'
const anoNascimento = 2001
const profissao = 'front-end developer'

console.log(calcularIdade({nome, anoNascimento}));
console.log(calcularIdade({nome, anoNascimento, profissao}));