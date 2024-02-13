
let saldoVitorias = calculoCombates(50, 25)

function calculoCombates(vitorias, derrotas){
    return vitorias - derrotas
}

function rankDoHeroi(){
    if(saldoVitorias <= 10){
        return "Ferro"
    }else if(saldoVitorias >= 11 && saldoVitorias <=20){
        return "Bronze"
    }else if(saldoVitorias >= 21 && saldoVitorias <=50){
        return "Prata"
    }else if(saldoVitorias >= 51 && saldoVitorias <=80){
        return "Ouro"
    }else if(saldoVitorias >= 81 && saldoVitorias <=90){
        return "Diamante"
    }else if(saldoVitorias >= 91 && saldoVitorias <=100){
        return "Lendário"
    }else {
        return "imortal"
    }    
}

let nivel = rankDoHeroi()

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)