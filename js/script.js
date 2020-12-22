// Dichiarazione variabili
var burgerName =  document.getElementById('burger-name');
var btnCalculate = document.getElementById('btnCalculate');
var listaIngradienti = document.getElementsByClassName('checkboxes-container')[0].getElementsByTagName('input');  //Prende anche gli input annidati in altri tag (es. div)
var finalPrice = document.getElementById('finalPrice');
var discountCode = document.getElementById('discount-code');

// Inizializza variabili
var sconto = 0;
var nCheck = 0;
var prezzo = 0;
var coupons = ['stringa1','stringa2','stringa3','stringa4','stringa5'];


// Bottone calcola
btnCalculate.addEventListener('click', function() {
  // Inizializza variabili
  error  = false;
  prezzo = 0;
  nCheck = 0;
  sconto = 0;

  // Controlla dati immessi
  // Campo nome burger non vuoto
  if (burgerName.value === ''){
    error = true;
    alert('Compila il campo burger name');
  }

  // Calcola prezzo
  if (!error){
    for (var i=0;i<listaIngradienti.length;i++){
      if (listaIngradienti[i].checked){
        prezzo += parseInt(listaIngradienti[i].value);
        nCheck++;
      }
    }

    // Almeno due checkbox spuntate
    if (nCheck < 2){
      error = true;
      alert('Inserisci almeno due ingredienti');
    }

    // Applica sconto
    if (!error){
      console.log(discountCode.value);
      if (discountCode.value !== ''){
        // if (discountCode.value === 'sconto20'){
        //   sconto = 20;
        //   alert('Codice valido: applico sconto');
        // }

        // controlla listaCoupons
        for (var x = 0; x< coupons.length; x++){
          if (discountCode.value === coupons[x]){
            sconto = 20;
            alert('Codice valido: applico sconto');
            }
        }

        // Codice sconto non valido
        if (sconto === 0){
          alert('codice sconto non valido.');
        }

      }

      // Calcola prezzo finale
      prezzo = prezzo - (prezzo / 100 * sconto);

      // Scrivi valore su pagina html
      finalPrice.innerText = '$ ' + prezzo;
    }
  }

});
