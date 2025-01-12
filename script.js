//creo la variabile per la lampadina spenta
const lampadina_off = document.getElementById('lampadina_spenta');

//creo la variabile per la lampadina accesa
const lampadina_on = document.getElementById('lampadina_accesa');

//creo la variabile per il pulsante
const button = document.getElementById('button');

//aggiungo l'event listener al pulsante che esegue la funzione al click
button.addEventListener('click', function on_off() {
    //con la funzione mostro la lampadina accesa e nascondo quella spenta
    lampadina_on.className = ('show');
    lampadina_off.className = ('hide');
});

