

function FnContinuarCadastro(){
      input_name.style.borderBlockColor = 'gray'
      input_sobrenome.style.borderBlockColor = 'gray'
      input_empresa.style.borderBlockColor ='gray';
      input_CNPJ.style.borderBlockColor ='gray';
      input_celular.style.borderBlockColor ='gray';
    var nome = input_name.value
    var sobrenome = input_sobrenome.value
    var empresa = input_empresa.value
    var cnpj = input_CNPJ.value
    var celular = input_celular.value

    // Limpa o campo
    ID_Erros.innerHTML = ''

    if(nome == '' || sobrenome == '' || empresa == '' || cnpj == '' || celular == '' ){
        ID_Erros.innerHTML = 'Algum campo não está devidamente preenchido!'
        return
    }

    // Valida se contem numero nos campos: Nome e sobrenome
    var listaNumeroString = '1234567890'
    var i = 0
    var b = 0
    var CaracNomeSobre = false
    // Para cada letra, ele entra no segundo while
    while(i<nome.length){ 
        // Já no segundo while, ele ve se a letra é um dos numeros da variavel(string) listaNumeroString
        while(b<listaNumeroString.length){
            if(nome[i] == listaNumeroString[b]){
                CaracNomeSobre = true
            }
            b++
        }
        b = 0
        i++
    }
    i = 0
    b = 0
    // Repete o processo com o sobrenome
     while(i<sobrenome.length){ 
        while(b<listaNumeroString.length){
            if(sobrenome[i] == listaNumeroString[b]){
                CaracNomeSobre = true
            }
            b++
        }
        b = 0
        i++
    }
    if(CaracNomeSobre){
        ID_Erros.innerHTML = 'Campo nome ou sobrenome invalido! Contem numero'
        input_name.style.borderBlockColor = 'red'
        input_sobrenome.style.borderBlockColor = 'red'
         return
    }


     // Valida a quantidade de numeros no CNPJ obs: com os pontos e traços inclusos
    if(cnpj.length < 14){
        ID_Erros.innerHTML = 'Campo CNPJ invalido ou incompleto!'
         input_CNPJ.style.borderBlockColor ='red';
        return
    }
    if(nome.length < 3 && sobrenome.length < 3){
        ID_Erros.innerHTML = 'Nome ou sobrenome invalido! Pequeno demais'
         input_name.style.borderBlockColor = 'red'
        input_sobrenome.style.borderBlockColor = 'red'
        return
    }
    if(celular.length < 14){
         ID_Erros.innerHTML = 'Numero de celular invalido!'
         input_celular.style.borderBlockColor ='red';
         return
    }
 window.location.href = './finacadastro.html';

}







function CadastrarForms(e){
    e.preventDefault();
    console.log("Entrou na função de validação")
    var email = input_email.value
    var senha = input_senha.value
    var confirmasenha = input_confirmsenha.value
    var checkbox = input_termo.checked
    
    // Limpa o campo
    ID_Erros.innerHTML = ''

    if( email == '' || senha == '' || confirmasenha == ''){
        ID_Erros.innerHTML = 'Algum campo não está devidamente preenchido!'
        return
    }


    // Valida se a senha é diferente da confirmarsenha
    if(senha != confirmasenha){
        ID_Erros.innerHTML = 'Senhas digitadas diferentes. Revise sua senha!'
        return
    }
     // Valida o checkbox
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
    
    // Contem letra minúscula: abcdefgh.
    if(senha.toLowerCase() != senha){
        CaracMax = true
    }
    // Contem letra maiúsculas: ABCDEFG.
    if(senha.toUpperCase() != senha){
        CaracMin = true
    }
    
   

    i = 0
    // Tem no mínimo 1 número: 123456.
    // Para cada letra, ele faz um if para ver se ela é um numero
    while(i<senha.length){
       if(!isNaN(senha[i])){
            CaracNumero = true
            break
        }
        i++
    }
    

    // Tem no mínimo 1 símbolos: !@#$%^&* 
    listaSimbolosString = '!@#$%^&*'
    i = 0
    var b = 0
    var count = false
    // Para cada letra, ele entra no segundo while
    while(i<senha.length){ 
        // Já no segundo while, ele ve se a letra é um dos simbolos da variavel(string) listaSimbolosString
        while(b<listaSimbolosString.length){
            if(senha[i] == listaSimbolosString[b]){
                CaracSimb = true
                break
            }
            b++
        }
        b = 0
        i++
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

    if(MinCatere&&CaracMax&&CaracMin&&CaracNumero&&CaracSimb){
        alert("Cadastro realizado com sucesso!")
        window.location.href = './../../marley/aerasense/login.html';
        
    }
    
}
function mascaracelular(){
        
        var valor = input_celular.value;
        var i = 0
        
        
        while(i<valor.length){
                if(isNaN(valor[i]) || valor[i] == ' '){
                    valor = valor.replace(valor[i], '') 
                    input_celular.value = valor
                }
                i++;
        }

        if(valor.length > 2){
            valor = valor.replaceAll(' ', '')
              valor = `(${valor.substring(0, 2)}) ${valor.substring(2, valor.length)}`
             input_celular.value = valor
          }
    
        // Limita a variavel valor para somente 11 caracteres
        input_celular.value = valor.substring(0,14)


}
function mascaracpnj(){
    valorcnpj = input_CNPJ.value.substring(0,15)
    
        var i =0 
        while(i<valorcnpj.length){
                if(isNaN(valorcnpj[i]) || valorcnpj[i] == ' '){
                    valorcnpj = valorcnpj.replace(valorcnpj[i], '') 
                    input_CNPJ.value = valorcnpj

                }
                i++;
        }

  //  "00.000.000/0001-XX"
/* 
if(valorcnpj.length > 2){
    valorcnpj = `${valorcnpj.substring(0, 2)}.${valorcnpj.substring(3, valorcnpj.length)}`
}
else if(valorcnpj.length > 6){
    valorcnpj += `${valorcnpj.substring(0, 6)}.${valorcnpj.substring(7, valorcnpj.length)}`
}

*/

    input_CNPJ.value = valorcnpj
}

function FnOcultarSenha(senha){
    // 1 - Input Senha
    // 2 - Input confirmar senha
    var Input = senha
    if(Input == 1){
        if(input_senha.type == 'password'){
            input_senha.type = 'text'
            BtnOcultarSenha.style.opacity = '60%'
        }else{
            input_senha.type = 'password'
            BtnOcultarSenha.style.opacity = '100%'
        }
    }else{
        if(input_confirmsenha.type == 'password'){
            input_confirmsenha.type = 'text'
            BtnOcultarConfSenha.style.opacity = '60%'
        }else{
            input_confirmsenha.type = 'password'
            BtnOcultarConfSenha.style.opacity = '100%'
        }
    }
}

function FnVoltarPaghome(){
    window.location.href = './../../marley/aerasense/index.html';
}