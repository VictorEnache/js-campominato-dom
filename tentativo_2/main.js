const grid_container_1 = document.createElement('div')
grid_container_1.classList.add('grid_container_1')

const grid_container_2 = document.createElement('div')
grid_container_2.classList.add('grid_container_2')

const grid_container_3 = document.createElement('div')
grid_container_3.classList.add('grid_container_3')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let valore_booleano = false;

const bottone = document.getElementById('bottone')

bottone.addEventListener('click', function () {

    const numeri_bomba = []



    const livello = document.getElementById('livello')



    if (livello.value === 'livello_1') {

        while (numeri_bomba.length < 16) {
            const bomba = getRndInteger(1, 100)
            if (!numeri_bomba.includes(bomba)) {
                numeri_bomba.push(bomba)
            }
        }

        grid_container_1.innerHTML = ''
        grid_container_2.innerHTML = ''
        grid_container_3.innerHTML = ''

        for (i = 1; i <= 100; i++) {

            const grid_cell = document.createElement('div')
            grid_cell.classList.add('grid_cell')

            const main_tag = document.getElementById('site_main')
            main_tag.append(grid_container_1)

            grid_container_1.append(grid_cell)

            grid_cell.innerHTML = i

            if (numeri_bomba.includes(i)) {
                grid_cell.classList.add('bomba')
            }

            if (!numeri_bomba.includes(i)) {

                grid_cell.classList.add('fiore')
            }
            else {
                grid_cell.classList.add('bomba')

            }

        }

        let contatore = 0;
        const elenco_class_bomba = document.querySelectorAll('.bomba')
        const elenco_class_fiore = document.querySelectorAll('.fiore')
        for (let i = 0; i < elenco_class_bomba.length; i++) {
            elenco_class_bomba[i].addEventListener('click', sconfitta)
        }

        for (let i = 0; i < elenco_class_fiore.length; i++) {
            elenco_class_fiore[i].addEventListener('click', casella_giusta)
        }

        function sconfitta() {
            for (let i = 0; i < elenco_class_bomba.length; i++) {
                elenco_class_bomba[i].classList.add('red')
            }
            alert(`Sconfitta!! \n Punteggio:${contatore}`)
            for (let i = 0; i < elenco_class_bomba.length; i++) {
                elenco_class_bomba[i].removeEventListener('click', sconfitta)
            }
            for (let i = 0; i < elenco_class_fiore.length; i++) {
                elenco_class_fiore[i].removeEventListener('click', casella_giusta)
            }
        }

        function casella_giusta() {
          
            this.classList.add('blue')
            ++contatore
            if (contatore === 100 - 16) {
                alert(`Vittoria!! \n Punteggio:${contatore}`)
                for (let i = 0; i < elenco_class_bomba.length; i++) {
                    elenco_class_bomba[i].removeEventListener('click', sconfitta)
                }
                for (let i = 0; i < elenco_class_fiore.length; i++) {
                    elenco_class_fiore[i].removeEventListener('click', casella_giusta)
                }
            }

        }
    }
    else if (livello.value === 'livello_2') {

        while (numeri_bomba.length < 16) {
            const bomba = getRndInteger(1, 81)
            if (!numeri_bomba.includes(bomba)) {
                numeri_bomba.push(bomba)
            }
        }

        grid_container_1.innerHTML = ''
        grid_container_2.innerHTML = ''
        grid_container_3.innerHTML = ''


        for (i = 1; i <= 81; i++) {

            const grid_cell = document.createElement('div')
            grid_cell.classList.add('grid_cell')

            const main_tag = document.getElementById('site_main')
            main_tag.append(grid_container_2)

            grid_container_2.append(grid_cell)

            grid_cell.innerHTML = i

            if (numeri_bomba.includes(i)) {
                grid_cell.classList.add('bomba')
            }

            if (!numeri_bomba.includes(i)) {

                grid_cell.classList.add('fiore')
            }
            else {
                grid_cell.classList.add('bomba')

            }

        }

        let contatore = 0;
        const elenco_class_bomba = document.querySelectorAll('.bomba')
        const elenco_class_fiore = document.querySelectorAll('.fiore')
        for (let i = 0; i < elenco_class_bomba.length; i++) {
            elenco_class_bomba[i].addEventListener('click', sconfitta)
        }

        for (let i = 0; i < elenco_class_fiore.length; i++) {
            elenco_class_fiore[i].addEventListener('click', casella_giusta)
        }

        function sconfitta() {
            for (let i = 0; i < elenco_class_bomba.length; i++) {
                elenco_class_bomba[i].classList.add('red')
            }
            alert(`Sconfitta!! \n Punteggio:${contatore}`)
            for (let i = 0; i < elenco_class_bomba.length; i++) {
                elenco_class_bomba[i].removeEventListener('click', sconfitta)
            }
            for (let i = 0; i < elenco_class_fiore.length; i++) {
                elenco_class_fiore[i].removeEventListener('click', casella_giusta)
            }
        }

        function casella_giusta() {
            
            this.classList.add('blue')
            ++contatore
            if (contatore === 81 - 16) {
                alert(`Vittoria!! \n Punteggio:${contatore}`)
                for (let i = 0; i < elenco_class_bomba.length; i++) {
                    elenco_class_bomba[i].removeEventListener('click', sconfitta)
                }
                for (let i = 0; i < elenco_class_fiore.length; i++) {
                    elenco_class_fiore[i].removeEventListener('click', casella_giusta)
                }
            }

        }
    }
    else if (livello.value === 'livello_3') {

        while (numeri_bomba.length < 16) {
            const bomba = getRndInteger(1, 49)
            if (!numeri_bomba.includes(bomba)) {
                numeri_bomba.push(bomba)
            }
        }

        grid_container_1.innerHTML = ''
        grid_container_2.innerHTML = ''
        grid_container_3.innerHTML = ''


        for (i = 1; i <= 49; i++) {

            const grid_cell = document.createElement('div')
            grid_cell.classList.add('grid_cell')

            const main_tag = document.getElementById('site_main')
            main_tag.append(grid_container_3)

            grid_container_3.append(grid_cell)

            grid_cell.innerHTML = i

            if (numeri_bomba.includes(i)) {
                grid_cell.classList.add('bomba')
            }

            if (!numeri_bomba.includes(i)) {

                grid_cell.classList.add('fiore')
            }
            else {
                grid_cell.classList.add('bomba')

            }

        }

        let contatore = 0;
        const elenco_class_bomba = document.querySelectorAll('.bomba')
        const elenco_class_fiore = document.querySelectorAll('.fiore')
        for (let i = 0; i < elenco_class_bomba.length; i++) {
            elenco_class_bomba[i].addEventListener('click', sconfitta)
        }

        for (let i = 0; i < elenco_class_fiore.length; i++) {
            elenco_class_fiore[i].addEventListener('click', casella_giusta)
        }

        function sconfitta() {
            for (let i = 0; i < elenco_class_bomba.length; i++) {
                elenco_class_bomba[i].classList.add('red')
            }
            alert(`Sconfitta!! \n Punteggio:${contatore}`)
            for (let i = 0; i < elenco_class_bomba.length; i++) {
                elenco_class_bomba[i].removeEventListener('click', sconfitta)
            }
            for (let i = 0; i < elenco_class_fiore.length; i++) {
                elenco_class_fiore[i].removeEventListener('click', casella_giusta)
            }
        }

        function casella_giusta() {
            
            this.classList.add('blue')
            ++contatore
            if (contatore === 49 - 16) {
                alert(`Vittoria!! \n Punteggio:${contatore}`)
                for (let i = 0; i < elenco_class_bomba.length; i++) {
                    elenco_class_bomba[i].removeEventListener('click', sconfitta)
                }
                for (let i = 0; i < elenco_class_fiore.length; i++) {
                    elenco_class_fiore[i].removeEventListener('click', casella_giusta)
                }
            }

        }
    }

})










