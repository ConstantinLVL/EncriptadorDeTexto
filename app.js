document.addEventListener('DOMContentLoaded', function() {

    var textoSalidaFormat = document.getElementById("output-paragraph-format");
    var eraser = document.getElementsByClassName("eraser");
    var containerTexto = document.getElementById("container-text-output");
    var buttomCopy = document.getElementById("buttom-copy buttom");
    var texto = document.getElementById('textarea-input-js');  
    var textoButtomCopy = document.getElementById("buttom-text-copy");

    texto.addEventListener('keydown', function(event) {  
        var key = event.key;
        if (!((key >= 'a' && key <= 'z') || key === 'Backspace' || key >= 0 && key <= 9)) {
          event.preventDefault();
          /* alert("Solo letras minusculas sin acentos."); */
        }
      }); /* Que chat GPT lo explique, funcional OJOOOOOOOOOOOOOO*/ 
      
    function limpiarCampo(){
        texto.value = "";
    }

    function mostarElementosFormat(){
        containerTexto.style.justifyContent = " space-evenly";
        textoSalidaFormat.style.display = "block";
        buttomCopy.style.display = "flex";
    }

    function ocultarElementosSalida(){
        for(element of eraser){
            element.style.display = "none";
        }
    }

    function encriptarTexto(){

        var textoInput = texto.value;
        
        if(textoInput != ""){
            var textFormat = textoInput.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
            limpiarCampo();
            ocultarElementosSalida();
            mostarElementosFormat();
            textoSalidaFormat.innerText = textFormat;
        }
    }

    function desencriptarTexto(){

        var textoInput = texto.value;
        
        if(textoInput != ""){
            var textFormat = textoInput.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
            limpiarCampo();
            ocultarElementosSalida();
            mostarElementosFormat();
            textoSalidaFormat.innerText = textFormat;
        }
    }

    buttomCopy.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(textoSalidaFormat.value);
          buttomCopy.classList.add("active");
          setTimeout( function(){
            buttomCopy.classList.remove("active");
          }, 750)
          console.log('Texto copiado al portapapeles');
        } catch (err) {
          console.error('Error al copiar al portapapeles:', err);
        }
      });

    document.getElementById('buttom-encriptar-js').addEventListener('click', encriptarTexto); /* Evento click boton encriptar */
    document.getElementById('buttom-desencriptar-js').addEventListener('click', desencriptarTexto); /* Evento click boton desencriptar */
    
});