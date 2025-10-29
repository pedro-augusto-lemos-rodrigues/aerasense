

function conta(){
    var email = ipt_email.value

    var senha = ipt_senha.value

    var emailSalvo = "f.brandao@empresa.com"
    var senhaSalva = "Sptech#2025"

    var mensagem = ""
    
    
    if(email == emailSalvo && senha == senhaSalva){
        
        mensagem = "Seja bem-vindo"
        
        ipt_email.style.backgroundColor = ""
    
    } else {
        
        mensagem = "Email ou senha incorretos"
        
        ipt_email.style.border = "2px solid red"

        
 
 
 
 
 
            }




            div_mensagem.innerHTML = mensagem
        }
       