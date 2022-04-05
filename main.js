
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function griglia(selettore, tag_cella, classe_cella, numero_celle) {
    const griglia = document.querySelector(selettore);


    const elenco_numeri = [];

    for (let i = 1; i <= numero_celle; i++) {
        const numero = i;
        if (!elenco_numeri.includes(numero)) {
            elenco_numeri.push(numero)
        }
    }
    console.log(elenco_numeri)


    const elenco_bombe = [];

    while (elenco_bombe.length < 16) {
        const bomba = getRndInteger(1, numero_celle)

        if (!elenco_bombe.includes(bomba)) {
            elenco_bombe.push(bomba)
        }
    }

    console.log(elenco_bombe)



    for (i = 0; i < numero_celle; i++) {
        const cell = document.createElement(tag_cella);
        cell.append(elenco_numeri[i])
        if (elenco_bombe.includes(elenco_numeri[i])) {
            cell.classList.add(classe_cella, 'bomba')
        }
        else {
            cell.classList.add(classe_cella)
        }
        griglia.append(cell)
    }


}

const button_1 = document.querySelector('.livello')

const grid_1 = document.querySelector('.grid_1');
const grid_2 = document.querySelector('.grid_2');
const grid_3 = document.querySelector('.grid_3');

let contatore;

button_1.addEventListener('click', function () {

    

    const select_level = document.querySelector('#difficolta')


    if (select_level.value === 'livello_1') {
        grid_1.innerHTML = ''

        contatore = 0;

        griglia('.container .grid_1', 'div', 'c_100', 100)

        grid_2.innerHTML = ''

        grid_3.innerHTML = ''

        const lista_celle = document.querySelectorAll('.c_100');
        const elenco_bombe = document.querySelectorAll('.bomba')


        for (i = 0; i < 100; i++) {
            const cella = lista_celle[i]
            let lista_classi = cella.classList;
            if (lista_classi.contains('bomba')) {
                cella.addEventListener('click', function () {
                    for (let i = 0; i < 16; i++) {
                        elenco_bombe[i].classList.add('red')
                    }
                    alert(`Hai perso. \nIl tuo punteggio è: ${contatore}`)

                })


            }
            else {
                cella.addEventListener('click', function () {
                    cella.classList.add('blue')
                    contatore++
                    console.log(contatore)
                    if (contatore === 100 - 16) {
                        alert(`Hai vinto!!! \nIl tuo punteggio è: ${contatore}`)
                    }
                })

            }

        }


    }

    else if (select_level.value === 'livello_2') {
        grid_2.innerHTML = ''

        contatore = 0;

        griglia('.container .grid_2', 'div', 'c_81', 81)

        grid_1.innerHTML = ''

        grid_3.innerHTML = ''

        const lista_celle = document.querySelectorAll('.c_81');
        const elenco_bombe = document.querySelectorAll('.bomba')


        for (i = 0; i < 81; i++) {
            const cella = lista_celle[i]
            let lista_classi = cella.classList;
            if (lista_classi.contains('bomba')) {
                cella.addEventListener('click', function () {
                    for (let i = 0; i < 16; i++) {
                        elenco_bombe[i].classList.add('red')
                    }
                    alert(`Hai perso. \nIl tuo punteggio è: ${contatore}`)

                })


            }
            else {
                cella.addEventListener('click', function () {
                    cella.classList.add('blue')
                    contatore++
                    console.log(contatore)
                    if (contatore === 81 - 16) {
                        alert(`Hai vinto!!! \nIl tuo punteggio è: ${contatore}`)
                    }
                })

            }

        }
    }

    else if (select_level.value === 'livello_3') {

        grid_3.innerHTML = ''

        contatore = 0;

        griglia('.container .grid_3', 'div', 'c_49', 49)

        grid_1.innerHTML = ''

        grid_2.innerHTML = ''

        const lista_celle = document.querySelectorAll('.c_49');
        const elenco_bombe = document.querySelectorAll('.bomba')


        for (i = 0; i < 49; i++) {
            const cella = lista_celle[i]
            let lista_classi = cella.classList;
            if (lista_classi.contains('bomba')) {
                cella.addEventListener('click', function () {
                    for (let i = 0; i < 16; i++) {
                        elenco_bombe[i].classList.add('red')
                    }
                    alert(`Hai perso. \nIl tuo punteggio è: ${contatore}`)

                })


            }
            else {
                cella.addEventListener('click', function () {
                    cella.classList.add('blue')
                    contatore++
                    console.log(contatore)
                    if (contatore === 49 - 16) {
                        alert(`Hai vinto!!! \nIl tuo punteggio è: ${contatore}`)
                    }
                })

            }

        }
    }


})





