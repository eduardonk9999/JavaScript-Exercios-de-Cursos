const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;


const soma = idade + contribuicao;

if(soma >= 35) {
  if(soma >= 30){
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você não pode se aposentar!`);
  }
} else {
  console.log(`${nome}, você não pode se aposentar!`);
}

/*
// essas variáveis irão retornar true ou false
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}
*/