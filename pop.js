let pais = 'BRASIL'
let valor = 250
let per_mes = 2

if(per_mes == 0){
    console.log('DIGITE QUANTIDADE DE MESES')
    
}else{
    rend = (valor * 0.2625) / 100 * per_mes
    total = rend + valor
    console.log('No país '+pais+' o rendimento do valor R$'+valor+', no período de '+per_mes+' meses, é de R$'+rend+', no total de R$ '+total+'')
}

console.log(valor)