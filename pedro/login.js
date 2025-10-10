var tentativas = 3

function conta(){
    var email = ipt_email.value

    var senha = ipt_senha.value

    var emailSalvo = "clienteAerasense"
    var senhaSalva = "12345678"

    var mensagem = ""


        while(tentativas){
            if(email == emailSalvo && senha == senhaSalva){
                mensagem = `Seja bem vindo`
            } else {
                mensagem = `Falha na autenticação`
            }
            
            if (tentativas == 0) {
                ipt_email.style.display = "none"
                ipt_senha.style.display = "none"
            }

            tentativas --

        }

    div_mensagem.innerHTML = mensagem


}
