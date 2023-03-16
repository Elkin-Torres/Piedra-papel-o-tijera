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

let contadora = 0;
let contadora2 = 0;

/*
function empezar() {
  document.addEventListener("click", (e) => {
    if (e.target === juguemos || e.target === juguemosTexto) {
      //se esconde el texto "Juguemos"
      juguemos.classList.add("hidden");
      //se esconden las opciones sin las clases funcionales
      otrasOpciones.classList.add("hidden"),
        //se muestra el texto  "Reiniciar juego"
        reiniciar.classList.remove("hidden");
      //se muestra el marcador del juego
      marcador.classList.remove("hidden");
      //se muestran las opciones con las clases funcionales
      opciones.classList.remove("hidden");
    }

    //si escogen piedra
    if (e.target === piedra) {
      marcadorMsn.classList.remove("hidden");
      msn.textContent = "Has escogido piedra ¿confirmas tu elección?";
      piedra.setAttribute("disabled", " ");
      btnSi.disabled = false;
      btnNo.disabled = false;
      papel.classList.add("hidden");
      tijera.classList.add("hidden");
    }

    //si confirman escoger piedra
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

      //piedra vs piedra
      if (eleccion === aleatorio) {
        msn.textContent = `Tu contrincante y tú han escogido "${eleccion}": hay un ¡EMPATE! 😐`;
      } //piedra vs tijera
      else if (aleatorio === "tijera") {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡GANASTE! 😁`;
        contadora++;
        marcadorContador1.textContent = `${contadora}`;
      } //piedra vs papel
      else {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡PERDISTE! 😔`;
        contadora2++;
        marcadorContador2.textContent = `${contadora2}`;
      }
    }
     //si no confirman escoger piedra
     if (e.target === btnNo && piedra.hasAttribute("disabled")) {
      papel.classList.remove("hidden");
      tijera.classList.remove("hidden");
      piedra.removeAttribute("disabled");
      marcadorMsn.classList.add("hidden");
    }

    //si escogen papel
    if (e.target === papel) {
      marcadorMsn.classList.remove("hidden");
      msn.textContent = "Has escogido papel ¿confirmas tu elección?";
      papel.setAttribute("disabled", " ");
      btnSi.disabled = false;
      btnNo.disabled = false;
      piedra.classList.add("hidden");
      tijera.classList.add("hidden");
    }

    //si confirman escoger papel
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

      //papel vs papel
      if (eleccion === aleatorio) {
        msn.textContent = `Tu contrincante y tú han escogido "${eleccion}": hay un ¡EMPATE! 😐`;
      }//papel vs piedra 
      else if (aleatorio === "piedra") {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡GANASTE! 😁`;
        contadora++;
        marcadorContador1.textContent = `${contadora}`;
      }//papel vs tijera 
      else {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡PERDISTE! 😔`;
        contadora2++;
        marcadorContador2.textContent = `${contadora2}`;
      }
    }
     //si no confirman escoger papel
     if (e.target === btnNo && papel.hasAttribute("disabled")) {
      piedra.classList.remove("hidden");
      tijera.classList.remove("hidden");
      papel.removeAttribute("disabled");
      marcadorMsn.classList.add("hidden");
    }

    //si oprimen "reiniciar juego"
    if (e.target === reiniciar || e.target === reiniciarEnunciado) {
      //se muestra el texto "Juguemos"
      juguemos.classList.remove("hidden");
      //se muestran las opciones sin las clases funcionales
      otrasOpciones.classList.remove("hidden"),
        //se esconde el texto  "Reiniciar juego"
        reiniciar.classList.add("hidden");
      //se esconde el marcador del juego
      marcador.classList.add("hidden");
      //se ocultan las opciones con las clases funcionales
      opciones.classList.add("hidden");
      //Se ocultan posibles msns que queden al seleccionar una opción y reiniciar inmediatamente el juego
      marcadorMsn.classList.add("hidden");
      //reiniciar los marcadores de puntaje
      marcadorContador1.textContent = 0;
      marcadorContador2.textContent = 0;
    }
  });
}

empezar();
*/

function empezar(){

  document.addEventListener("click", (e)=>{

    if (e.target === juguemos || e.target === juguemosTexto) {
      //se esconde el texto "Juguemos"
      juguemos.classList.add("hidden");
      //se esconden las opciones sin las clases funcionales
      otrasOpciones.classList.add("hidden"),
        //se muestra el texto  "Reiniciar juego"
        reiniciar.classList.remove("hidden");
      //se muestra el marcador del juego
      marcador.classList.remove("hidden");
      //se muestran las opciones con las clases funcionales
      opciones.classList.remove("hidden");
    }

  })
}
 empezar();



function juego() {
  document.addEventListener("click", (e) => {
    //si escogen piedra
    if (e.target === piedra) {
      marcadorMsn.classList.remove("hidden");
      msn.textContent = "Has escogido piedra ¿confirmas tu elección?";
      piedra.setAttribute("disabled", " ");
      btnSi.disabled = false;
      btnNo.disabled = false;
      papel.classList.add("hidden");
      tijera.classList.add("hidden");
    }

    //si confirman escoger piedra
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

      //piedra vs piedra
      if (eleccion === aleatorio) {
        msn.textContent = `Tu contrincante y tú han escogido "${eleccion}": hay un ¡EMPATE! 😐`;
      } //piedra vs tijera
      else if (aleatorio === "tijera") {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡GANASTE! 😁`;
        contadora++;
        marcadorContador1.textContent = `${contadora}`;
      } //piedra vs papel
      else {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡PERDISTE! 😔`;
        contadora2++;
        marcadorContador2.textContent = `${contadora2}`;
      }
    }
    //si no confirman escoger piedra
    if (e.target === btnNo && piedra.hasAttribute("disabled")) {
      papel.classList.remove("hidden");
      tijera.classList.remove("hidden");
      piedra.removeAttribute("disabled");
      marcadorMsn.classList.add("hidden");
    }

    //si escogen papel
    if (e.target === papel) {
      marcadorMsn.classList.remove("hidden");
      msn.textContent = "Has escogido papel ¿confirmas tu elección?";
      papel.setAttribute("disabled", " ");
      btnSi.disabled = false;
      btnNo.disabled = false;
      piedra.classList.add("hidden");
      tijera.classList.add("hidden");
    }

    //si confirman escoger papel
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

      //papel vs papel
      if (eleccion === aleatorio) {
        msn.textContent = `Tu contrincante y tú han escogido "${eleccion}": hay un ¡EMPATE! 😐`;
      } //papel vs piedra
      else if (aleatorio === "piedra") {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡GANASTE! 😁`;
        contadora++;
        marcadorContador1.textContent = `${contadora}`;
      } //papel vs tijera
      else {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡PERDISTE! 😔`;
        contadora2++;
        marcadorContador2.textContent = `${contadora2}`;
      }
    }
    //si no confirman escoger papel
    if (e.target === btnNo && papel.hasAttribute("disabled")) {
      piedra.classList.remove("hidden");
      tijera.classList.remove("hidden");
      papel.removeAttribute("disabled");
      marcadorMsn.classList.add("hidden");
    }

    //si escogen tijera
    if (e.target === tijera) {
      marcadorMsn.classList.remove("hidden");
      msn.textContent = "Has escogido tijera ¿confirmas tu elección?";
      tijera.setAttribute("disabled", " ");
      btnSi.disabled = false;
      btnNo.disabled = false;
      piedra.classList.add("hidden");
      papel.classList.add("hidden");
    }

    //si confirman escoger tijera
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

      //tijera vs tijera
      if (eleccion === aleatorio) {
        msn.textContent = `Tu contrincante y tú han escogido "${eleccion}": hay un ¡EMPATE! 😐`;
      } //tijera vs papel
      else if (aleatorio === "papel") {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡GANASTE! 😁`;
        contadora++;
        marcadorContador1.textContent = `${contadora}`;
      } //tijera vs piedra
      else {
        msn.textContent = `Tu contrincante ha escogido "${aleatorio}" y tu has escogido "${eleccion}": ¡PERDISTE! 😔`;
        contadora2++;
        marcadorContador2.textContent = `${contadora2}`;
      }
    }
    //si no confirman escoger tijera
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
    //si oprimen "reiniciar juego"
    if (e.target === reiniciar || e.target === reiniciarEnunciado) {

      //se muestra el texto "Juguemos"
      juguemos.classList.remove("hidden");

      //se muestran las opciones sin las clases funcionales
      otrasOpciones.classList.remove("hidden");

      //Se quita la opción de ocultar a las opciones que no hayan sido escogidas
      piedra.classList.remove("hidden");
      papel.classList.remove("hidden");
      tijera.classList.remove("hidden");

      //Se quita el atributo disabled de las opciones, esto para que no vaya a quedar dicho atributo en caso de que no se haya cofirmado la selección y se haya reiniciado el juego
      piedra.removeAttribute("disabled");
      papel.removeAttribute("disabled");
      tijera.removeAttribute("disabled");

        //se esconde el texto  "Reiniciar juego"
        reiniciar.classList.add("hidden");
      //se esconde el marcador del juego
      marcador.classList.add("hidden");
      //se ocultan las opciones con las clases funcionales
      opciones.classList.add("hidden");
      //Se ocultan posibles msns que queden al seleccionar una opción y reiniciar inmediatamente el juego
      marcadorMsn.classList.add("hidden");
      //reiniciar los marcadores de puntaje
      contadora = 0;
      contadora2 = 0;
      marcadorContador1.textContent = 0;
      marcadorContador2.textContent = 0;
    }
    
  })
  
}

reiniciarJuego();