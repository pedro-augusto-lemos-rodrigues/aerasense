var tentativas = 3

function conta(){
    var email = ipt_email.value

    var senha = ipt_senha.value

    var emailSalvo = "clienteAerasense"
    var senhaSalva = "12345678"

    var mensagem = ""


        while(tentativas > 0){
            
            if(email == emailSalvo && senha == senhaSalva){

            mensagem = "Seja bem-vindo"
            tentativas = 0
        
        } else {
            
            tentativas--                    
            
            if (tentativas > 0) {
                mensagem = `E-mail ou senha incorretos!<br>Restam ${tentativas} tentativa(s)`;
            
            } else {
                mensagem = "Número máximo de tentativas atingido. Login bloqueado! Peça auxílio a um responsável";
                
                ipt_email.style.display = "none";
                ipt_senha.style.display = "none";
 
 
 
 
 
            }
            break 
            // usada para interromper imediatamente um loop
            // sai imediatamente do loop
            // É útil para parar o loop antes da condição final do loop ou evitar rodar código indesejado.
        }
        div_mensagem.innerHTML = mensagem
    }


}
