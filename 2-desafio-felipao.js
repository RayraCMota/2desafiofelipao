let username = getfirstname ("Paula Barone Onofre"); 
let vitorias = 145; derrotas = 47


console.log("Calculadora de Partidas Rankeadas");

console.log ("Ola, " + username);

function getfirstname(name){
	let firstname=name.split(" ")[0]
    return firstname
    }
    
let calculo = diminuicao(145,47)

function diminuicao(num1, num2){
    let subtracao = num1 - num2
    return subtracao
}
    
console.log("Bem vindo ao segundo desafio do Felipão");
console.log("Sua pontuação é, ", calculo);



if (calculo >0 && calculo <=10) {
        console.log ("O Heroi tem de saldo **", calculo, "** esta no nivel Ferro!")
    } else if (calculo >=20){
        console.log ("O Heroi tem de saldo **", calculo, "** esta no nivel Bronze!")
    } else if (calculo >=50){
        console.log ("O Heroi tem de saldo **", calculo, "** esta no nivel Prata!")
    } else if (calculo >=80){
        console.log ("O Heroi tem de saldo **", calculo, "** esta no nivel Ouro!")
    } else if (calculo >=90){
        console.log ("O Heroi tem de saldo **", calculo, "** esta no nivel Diamante!")
    } else if (calculo >=100){
        console.log ("O Heroi tem de saldo **", calculo, "** esta no nivel Lendario!")
    } else if (calculo >101){
        console.log ("O Heroi tem de saldo **", calculo, "** esta no nivel Imortal!")
    } 


