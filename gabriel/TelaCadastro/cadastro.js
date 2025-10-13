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
    // Valida se contem numero nos campos: Nome e sobrenome
    if( /[0-9]/.test(nome)|| /[0-9]/.test(sobrenome)){
        ID_Erros.innerHTML = 'Campo nome ou sobrenome invalido!'
        return
    }
     // Valida a quantidade de numeros no CNPJ obs: com os pontos e traços inclusos
    if(cnpj.length < 14){
        ID_Erros.innerHTML = 'Campo CNPJ invalido ou incompleto!'
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
    
    // Deve ter mínimo 2 letras maiúsculas: ABCDEFG.
    var i = 0
    var count = 0
    // Para cada letra, ele faz um if para ver se ela é maiuscula
    while(i<senha.length){
       if(!isNaN(senha[i])){
            i++
            continue
        }else{
            if( senha[i] == senha[i].toUpperCase()){
                count++
            }
        }
        if(count == 2){
            CaracMax = true
            break
        }
        i++
    }
    
    
    // Deve ter mínimo 1 letra minúscula: abcdefgh.
    i = 0
    count = 0
    // Para cada letra, ele faz um if para ver se ela é minuscula 
    while(i<senha.length){
        if(!isNaN(senha[i])){
              i++
            continue
        }else{
            if( senha[i] == senha[i].toLowerCase()){
                count++
                CaracMin = true
                break
            }
        }
        i++
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
        window.location.href = './../../marley/aerasense/index.html';
    }
    
}
function mascaracelular(){
        let input = event.target;
        let valor = input.value;

        // Remove caracteres não numéricos
        // g → significa “global”, ou seja, ele vai procurar em toda a string, não só na primeira ocorrência.
        // \D → qualquer caractere que não seja um dígito (ou seja, tudo que não é 0–9).

        // Dá um replace nos carateres que são LETRAS(De 'A' a 'Z', tanto minusculo quanto maiuculo)
        valor = valor.replace(/\D/g, '');
        // Limita a variavel valor para somente 11 caracteres
        valor = valor.substring(0,11)

        // Aplica a máscara (XX) XXXXX-XXXX

        //Quando a varivel passa de 3 caracteres(cotando com o zero)
        if (valor.length > 2) {
                // Aplica aos 2 primeiros caractestes o: '()' Ex: (11) XXX
            valor = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
        }

        if (valor.length > 10) {
            // Aplica apos os 10 primeiros caractestes um: '-' Ex: (11) XXXX-XXX
            valor = `${valor.substring(0, 10)}-${valor.substring(10)}`;
        }
        

        input.value = valor;

}
function mascaracpnj(){
    valor = input_CNPJ.value.replace(/\D/g, '');
    valor = valor.substring(0,15)
   
    
  // Regex complexo, vamos lá
  // Todo Regex começa e termina assim:  /  /  
  // ^(\d{2})  pega os DOIS({2}) primeiros(^) numeros(\d) dá variavel valor
  // (\d) pega todos os NUMEROS


  // replace(ValorX, ValorY) muda o valorX pelo valorY
  // replace(/^(\d{2})(\d)/, '$1.$2')
  // ' /^(\d{2}) (\d)/ ' tem dois valores ai: 

  // 1: " /^(\d{2}) "  
  // E  
  // 2: " (\d)/ "

  //  '$1.$2'   $1 é o primeiro valor(/^(\d{2})) e o $2 é o segundo((\d)/)
  // Agora é adicionar um ponto no meio desses valores '$1 . $2' 

  // Essa logica se aplica para todos os regex seguintes

  // mascara do CNPJ
  // 
  valor = valor.replace(/^(\d{2})(\d)/, '$1.$2');
  valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  valor = valor.replace(/\.(\d{3})(\d)/, '.$1/$2');
  valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
    input_CNPJ.value = valor
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