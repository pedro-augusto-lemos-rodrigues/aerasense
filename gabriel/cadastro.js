function CadastrarForms(e){
    e.preventDefault();
    var nome = input_name
    var sobrenome = input_sobrenome
    var cnpj = input_CNPJ
    var email = input_email
    var celular = input_email
    var senha = input_senha
    var confirma = input_confimsenha
    var checkbox = input_termo

    if(nome == "" || /[0-9]/.test(nome)){
        alert("Tem numero")
    }

}