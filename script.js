function verificarData() {
    const dataDigitada = document.getElementById("data-input").value;
    if (dataDigitada === "2008-10-01") {
      document.getElementById("tela-login").style.display = "none";
      document.getElementById("tela-parabens").style.display = "block";
    } else {
      document.getElementById("mensagem-erro").textContent = "Data incorreta! Tente novamente.";
    }
  }