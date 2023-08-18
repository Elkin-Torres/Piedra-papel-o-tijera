let msn = document.getElementById("mensaje"),
  marcadorMsn = document.querySelector(".marcador__msn-contenedor"),
  juguemos = document.querySelector(".inicio-juego"),
  juguemosTexto = document.querySelector(".inicio-juego__texto"),
  marcador = document.querySelector(".marcador-contenedor"),
  marcadorContador1 = document.querySelector(".marcador__contador"),
  marcadorContador2 = document.querySelector(".marcador__contador2"),
  btnSi = document.querySelector(".btn-si"),
  btnNo = document.querySelector(".btn-no"),
  opciones = document.querySelector(".opciones"),
  otrasOpciones = document.querySelector(".otras-opciones"),
  piedra = document.querySelector(".piedra"),
  papel = document.querySelector(".papel"),
  tijera = document.querySelector(".tijera"),
  reiniciarEnunciado = document.querySelector(".reiniciar__enunciado"),
  reiniciar = document.querySelector(".reiniciar ");

//score control
let contadora = 0;
let contadora2 = 0;

function empezar(){

  document.addEventListener("click", (e)=>{

    if (e.target === juguemos || e.target === juguemosTexto) {
      //the text "Let's play" is hidden
      juguemos.classList.add("hidden");
     // hide the options without the functional classes
      otrasOpciones.classList.add("hidden"),
     //display the text "Restart game"
       reiniciar.classList.remove("hidden");
      //display game score
      marcador.classList.remove("hidden");
      //the options are shown with the functional classes
      opciones.classList.remove("hidden");
    }

  })
}
 empezar();

function juego() {
  document.addEventListener("click", (e) => {
    //if they choose stone
    if (e.target === piedra) {
      marcadorMsn.classList.remove("hidden");
      msn.textContent = "Has escogido piedra ¿confirmas tu elección?";
      piedra.setAttribute("disabled", " ");
      btnSi.disabled = false;
      btnNo.disabled = false;
      papel.classList.add("hidden");
      tijera.classList.add("hidden");
    }

    //if they confirm to choose stone
    if (e.target === btnSi && piedra.hasAttribute("disabled")) {
      const eleccion = "piedra",
        eleccionAleatoria = ["piedra", "papel", "tijera"],
        aleatorio =
          eleccionAleatoria[
            Math.floor(Math.random() * eleccionAleatoria.length)
          ];
      btnSi.disabled = true;
      btnNo.disabled = true;
      papel.classList.remove("hidden");
      tijera.classList.remove("hidden");
      piedra.removeAttribute("disabled");

      //stone vs stone
      if (eleccion === aleatorio) {
        msn.textContent = `Tu contrincante y tú han escogido "${eleccion}": hay un ¡EMPATE! 😐`;
      } //      rock vs scissors
      else if (aleatorio === "tijera") {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡GANASTE! 😁`;
        contadora++;
        marcadorContador1.textContent = `${contadora}`;
      } //stone vs paper
      else {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡PERDISTE! 😔`;
        contadora2++;
        marcadorContador2.textContent = `${contadora2}`;
      }
    }
    //if they do not confirm choose stone
    if (e.target === btnNo && piedra.hasAttribute("disabled")) {
      papel.classList.remove("hidden");
      tijera.classList.remove("hidden");
      piedra.removeAttribute("disabled");
      marcadorMsn.classList.add("hidden");
    }

    //if they choose paper
    if (e.target === papel) {
      marcadorMsn.classList.remove("hidden");
      msn.textContent = "Has escogido papel ¿confirmas tu elección?";
      papel.setAttribute("disabled", " ");
      btnSi.disabled = false;
      btnNo.disabled = false;
      piedra.classList.add("hidden");
      tijera.classList.add("hidden");
    }

    //if they confirm choose paper
    if (e.target === btnSi && papel.hasAttribute("disabled")) {
      const eleccion = "papel",
        eleccionAleatoria = ["piedra", "papel", "tijera"],
        aleatorio =
          eleccionAleatoria[
            Math.floor(Math.random() * eleccionAleatoria.length)
          ];
      btnSi.disabled = true;
      btnNo.disabled = true;
      piedra.classList.remove("hidden");
      tijera.classList.remove("hidden");
      papel.removeAttribute("disabled");

      //paper vs. paper
      if (eleccion === aleatorio) {
        msn.textContent = `Tu contrincante y tú han escogido "${eleccion}": hay un ¡EMPATE! 😐`;
      } //paper vs stone
      else if (aleatorio === "piedra") {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡GANASTE! 😁`;
        contadora++;
        marcadorContador1.textContent = `${contadora}`;
      } //paper vs scissors
      else {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡PERDISTE! 😔`;
        contadora2++;
        marcadorContador2.textContent = `${contadora2}`;
      }
    }
    //if they do not confirm choose paper
    if (e.target === btnNo && papel.hasAttribute("disabled")) {
      piedra.classList.remove("hidden");
      tijera.classList.remove("hidden");
      papel.removeAttribute("disabled");
      marcadorMsn.classList.add("hidden");
    }

    //if they choose scissors
    if (e.target === tijera) {
      marcadorMsn.classList.remove("hidden");
      msn.textContent = "Has escogido tijera ¿confirmas tu elección?";
      tijera.setAttribute("disabled", " ");
      btnSi.disabled = false;
      btnNo.disabled = false;
      piedra.classList.add("hidden");
      papel.classList.add("hidden");
    }

    //if they confirm choose scissors
    if (e.target === btnSi && tijera.hasAttribute("disabled")) {
      const eleccion = "tijera",
        eleccionAleatoria = ["piedra", "papel", "tijera"],
        aleatorio =
          eleccionAleatoria[
            Math.floor(Math.random() * eleccionAleatoria.length)
          ];
      btnSi.disabled = true;
      btnNo.disabled = true;
      piedra.classList.remove("hidden");
      papel.classList.remove("hidden");
      tijera.removeAttribute("disabled");

      //scissor vs scissor
      if (eleccion === aleatorio) {
        msn.textContent = `Tu contrincante y tú han escogido "${eleccion}": hay un ¡EMPATE! 😐`;
      } //scissors vs paper
      else if (aleatorio === "papel") {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡GANASTE! 😁`;
        contadora++;
        marcadorContador1.textContent = `${contadora}`;
      } //scissors vs stone
      else {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡PERDISTE! 😔`;
        contadora2++;
        marcadorContador2.textContent = `${contadora2}`;
      }
    }
    //if they do not confirm choose scissors
    if (e.target === btnNo && tijera.hasAttribute("disabled")) {
      piedra.classList.remove("hidden");
      papel.classList.remove("hidden");
      tijera.removeAttribute("disabled");
      marcadorMsn.classList.add("hidden");
    }
  });
}

juego();

function reiniciarJuego(){
  document.addEventListener("click",(e)=>{
    //if you press "restart game"
    if (e.target === reiniciar || e.target === reiniciarEnunciado) {

      //the text "Let's play" is displayed
      juguemos.classList.remove("hidden");

      //the options are shown without the functional classes
      otrasOpciones.classList.remove("hidden");

      //The option to hide is removed from the options that have not been chosen
      piedra.classList.remove("hidden");
      papel.classList.remove("hidden");
      tijera.classList.remove("hidden");

      //The disabled attribute is removed from the options, this so that said attribute will not remain in case the selection has not been confirmed and the game has been restarted
      piedra.removeAttribute("disabled");
      papel.removeAttribute("disabled");
      tijera.removeAttribute("disabled");

        //the text "Restart game" is hidden
        reiniciar.classList.add("hidden");
      //the game marker is hidden
      marcador.classList.add("hidden");
      //options are hidden with functional classes
      opciones.classList.add("hidden");
      //Possible remaining msns are hidden when selecting an option and immediately restarting the game
      marcadorMsn.classList.add("hidden");
      //reset score markers
      contadora = 0;
      contadora2 = 0;
      marcadorContador1.textContent = 0;
      marcadorContador2.textContent = 0;
    }    
  })  
}

reiniciarJuego();