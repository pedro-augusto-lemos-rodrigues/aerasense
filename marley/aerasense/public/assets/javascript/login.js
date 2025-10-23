// Função refatorada para redirecionar para a dashboard
function redirecionar() {
  window.location.href = "../../aurora/dashboard_geral/dashboard_geral.html";
}

// Declara as inputs como variáveis
var emailInput = input_email;
var senhaInput = input_senha;

// Função refatorada para validar os campos da página de login
function validarCampos() {
  // Pega os valores das inputs e-mail e senha
  var email = emailInput.value;
  var senha = senhaInput.value;

  // Valida o login, caso seja válido, chama a função de redirecionar
  if (email == "f.brandao@empresa.com" && senha == "Sptech#2025") {
    mensagem.innerHTML = `
        <div>
          <img src="marley/aerasense/public/assets/icons/system-regular-18-autorenew-hover-autorenew.gif" alt="" />
          <span>E-meial ou senha incorretos</span>
        </div>
      `;

    // Define um delay de 2,1 segundos para chamar a função redirecionar
    setTimeout(redirecionar, 2100);
  } else {
    // Aplica estilos nas bordas das inputs para mostrar que há erro.
    emailInput.style.borderColor = "var(--color-danger)";
    passwordInput.style.borderColor = "var(--color-danger)";
    mensagem.innerHTML = `
      <div>
        <img src="marley/aerasense/public/assets/icons/error.svg" alt="" />
        <span>E-meial ou senha incorretos</span>
      </div>
      `;
  }
}
