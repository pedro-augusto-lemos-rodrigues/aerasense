function CadastrarForms(e){
    e.preventDefault();
    console.log("Entrou na função de validação")
    var nome = input_name.value
    var sobrenome = input_sobrenome.value
    var empresa = input_empresa.value
    var cnpj = input_CNPJ.value
    var email = input_email.value
    var celular = input_email.value
    var senha = input_senha.value
    var confirmasenha = input_confirmsenha.value
    var checkbox = input_termo.checked
    
    // Limpa o campo
    ID_Erros.innerHTML = ''

    if(nome == '' || sobrenome == '' || empresa == '' || cnpj == '' || email == '' || celular == '' || senha == '' || confirmasenha == ''){
        ID_Erros.innerHTML = 'Algum campo não está devidamente preenchido!'
        return
    }
    if( /[0-9]/.test(nome)|| sobrenome == "" || /[0-9]/.test(sobrenome)){
        ID_Erros.innerHTML = 'Campo nome ou sobrenome invalido!'
        return
    }
    if(cnpj.length < 14){
        ID_Erros.innerHTML = 'Campo CNPJ invalido ou incompleto!'
        return
    }
    if(senha != confirmasenha){
        ID_Erros.innerHTML = 'Senhas digitadas diferentes. Revise sua senha!'
        return
    }
    if(checkbox == false){
        ID_Erros.innerHTML = 'Concorde com os termos de uso e lincença para prosseguir!'
        return
    }

    
    
    // Validação da senha
    
    MinCatere = false
    CaracMax = false
    CaracMin = false
    CaracNumero = false
    CaracSimb = false


    // Validar 8 caracteres
    if(senha.length >= 8){
        MinCatere = true
        
    }
    
    // Deve ter mínimo 2 letras maiúsculas: ABCDEFG.
    var i = 0
    var count = 0
    while(i<senha.length){
          if(isNaN(senha[i])){
            continue
        }else{
            if( senha[i] == senha[i].toUpperCase()){
                count++
            }
        }
        if(count == 2){
            break
        }
        i++
    }
    if(count >= 2){
        CaracMax = true
    }
    
    
    // Deve ter mínimo 1 letra minúscula: abcdefgh.
    i = 0
    count = 0
    while(i<senha.length){
        if(isNaN(senha[i])){
            continue
        }else{
            if( senha[i] == senha[i].toLowerCase()){
                count++
                break
            }
        }
        i++
    }
    if(count >= 1){
         CaracMin = true
    }
    
    // Tem no mínimo 1 número: 123456.
    while(i<senha.length){
        if(isNaN(senha[i]) ){
            count++
            break
        }
        i++
    }
    if(count >= 1){
        CaracNumero = true
    }

    // Tem no mínimo 1 símbolos: !@#$%^&* 
    listaSimbolosString = '!@#$%^&*'
    var i = 0
    var b = 0
    var count = false
                           
    while(i<senha.length){ 
        while(b<listaSimbolosString.length){
            if(senha[i] == listaSimbolosString[b]){
                count = true
                break
            }
            b++
        }
        i++
    }
    if(count){
         CaracSimb = true
        
    }
    
//     MinCatere = false
//     CaracMax = false
//     CaracMin = false
//     CaracNumero = false
//     CaracSimb = false
    if(!MinCatere){
        ID_Erros.innerHTML += `Sua senha deve ter no minino 8 caracteres!<br>`
    }
    if(!CaracMax){
        ID_Erros.innerHTML += `Sua senha deve ter mínimo 2 letras maiúsculas: ABCDEFG.<br>`
    }
    if(!CaracMin){
        ID_Erros.innerHTML += `Sua senha deve ter mínimo 1 letra minúscula: abcdefgh.<br>`
    }
    if(!CaracNumero){
        ID_Erros.innerHTML += `Sua senha deve ter no mínimo 1 número: 123456.<br>`
    }
    if(!CaracSimb){
        ID_Erros.innerHTML += `Sua senha deve ter no mínimo 1 símbolos: !@#$%^&*<br>`
    }
}
function mascaracelular(){
        let input = event.target;
        let valor = input.value;

        // Remove caracteres não numéricos
        // g → significa “global”, ou seja, ele vai procurar em toda a string, não só na primeira ocorrência.
        // \D → qualquer caractere que não seja um dígito (ou seja, tudo que não é 0–9).

        valor = valor.replace(/\D/g, '');
        valor = valor.substring(0,11)
        // Aplica a máscara (XX) XXXXX-XXXX
        if (valor.length > 2) {
            valor = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
        }
        if (valor.length > 10) {
            valor = `${valor.substring(0, 10)}-${valor.substring(10)}`;
        }
        // Adiciona o espaço após o DDD caso não tenha
        if (valor.length > 3 && valor[3] != ' ') {
            valor = `${valor.substring(0, 3)}${valor.substring(3)}`;
        }

        input.value = valor;

}
function mascaracpnj(){
    valor = input_CNPJ.value.replace(/\D/g, '');
    valor = valor.substring(0,15)
   
    
    
  // Aplica a máscara passo a passo
  valor = valor.replace(/^(\d{2})(\d)/, '$1.$2');
  valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  valor = valor.replace(/\.(\d{3})(\d)/, '.$1/$2');
  valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
    input_CNPJ.value = valor
}