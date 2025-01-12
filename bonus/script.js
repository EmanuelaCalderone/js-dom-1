
//creo la variabile per la lampadina spenta
const lampadina_off = document.getElementById('lampadina_spenta');

//creo la variabile per la lampadina accesa
const lampadina_on = document.getElementById('lampadina_accesa');

//creo la variabile per il pulsante
const button = document.getElementById('button');

//inizializzo la lampadina a spenta
let isOn = false;

//aggiungo l'event listener al pulsante che esegue la funzione al click
button.addEventListener('click', function on_off() {
    
    //creo la condizione per ciò che deve succedere al click
    if (!isOn) {

        //imposto la classe della lampadina accesa su "mostra"
        lampadina_on.className = ('show');

        //imposto la classe della lampadina spenta su "nascondi"
        lampadina_off.className = ('hide');

        //scrivo nell'html "Spegni"
        button.innerHTML = ('Spegni');

        //aggiungo la classe che fa diventare rosso il pulsante
        button.classList.add('red');

        //rimuovo la classe che fa diventare verde il pulsante
        button.classList.remove('green');
    } else {
        lampadina_on.className = ('hide');
        lampadina_off.className = ('show');
        button.innerHTML = ('Accendi');
        button.classList.add('green');
        button.classList.remove('red');
    }
    
    //Inverto lo stato della lampadina (acceso/spento)
    isOn = !isOn;
}
   
);

