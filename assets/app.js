const body = document.querySelector('body')
const fond = document.querySelector('#fond')
const carroussel =document.querySelector('#arriereplan')
const player= document.querySelector('#bird')
const root = document.documentElement


// -----------------------------------------------------------------------------------
// -----------MES FONCTIONS ---------------------------------------------------------
//----------------------------------------------------------------------------------


// me génère des tailles aléatoires
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// me génère des couleurs aléatoire
function colorRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// marche pas 
function mouving() {
    let mouv = document.querySelectorAll('.mouv')
    let top = mouv[0].offsetLeft;
    let left = mouv[0].offsetTop
    return {
        top,
        left

    }
}




// fonction qui créer les pieges
function newpiege(taille, taille2) {

    let color = colorRandom(100, 999)



    let piegehaut = document.createElement('div')
    piegehaut.classList.add('mouv')
    fond.appendChild(piegehaut)


    piegehaut.style.width = '100px'
    piegehaut.style.height = taille + 'px'
    piegehaut.style.backgroundColor = '#' + color
    piegehaut.style.position = 'absolute'
    piegehaut.style.top = 0





    let piegebas = document.createElement('div')
    piegebas.classList.add('mouv')
    fond.appendChild(piegebas)


    piegebas.style.width = '100px'
    piegebas.style.height = taille2 + 'px'
    piegebas.style.backgroundColor = '#' + color
    piegebas.style.position = 'absolute'
    piegebas.style.bottom = 0
}








// Quand on appui sur z ça lance la fonction go partie qui elle lance le jeu
window.addEventListener("keydown", function (event) {

    if (event.key == "z") {
        console.log('ça part');
        gopartie()
        carroussel.classList.add('animcar')
        
    }

})



// la fonction gopartie lance la partie
function gopartie() {



    // A chaque clic de la touche espace ma valeur prend +17px donc le bird saute de 17px
    window.addEventListener("keydown", function (event) {

        if (event.key == " ") {

            valeur = 17
           
            
            player.classList.remove('rm')
            player.classList.add('rp')
        }

    })

    // A chaque relachement de la touche espace ma valeur perds -7px donc le bird chut de 7px
    window.addEventListener("keyup", function (event) {

        if (event.key == " ") {

            valeur = -7
            player.classList.add('rm')
            player.classList.remove('rp')
        }

    })

    // ------------------------------------------------------
    /*PARTIE BIRD */
    // ------------------------------------------------------

    // x = position de départ du bird
    let x = 350
    // valeur = représente la chute du bird est donc la position x 
    let valeur = -7
    // la position de mon piege
    let positionpiege = 0


    // toutes les 0.020s je fait ce qui y'a dedans 
    setInterval(() => {


        // ------------------------------------------------------
        /**FIN PARTIE BIRD */
        // ------------------------------------------------------

        // x est la position bottom du bird
        x += valeur
        // ma variable css prend en valeur x 
        root.style.setProperty('--position-', x + 'px')

        // cette condition me sert à délimiter la hauteur limite des sauts du bird 
        if (x < 0 || x > 500) {
            window.location.reload(true)
        }



        // ------------------------------------------------------
        /**PARTIE OBSTACLE */
        // ------------------------------------------------------


        // mon piege se déplace de 15px vers la gauche toutes les 0.020s
        positionpiege += 15
        // ma variable css prend la valeur de positionpiege 
        root.style.setProperty('--right-', positionpiege + 'px')

        let mouv = document.querySelectorAll('.mouv')
        let bird = document.querySelector('#bird')

        let birdG = bird.offsetLeft
        let birdTop = bird.offsetTop
        let div1G = mouv[0].offsetLeft
        let div1T = mouv[0].offsetTop
        let div1H=mouv[0].offsetHeight
        let div2G = mouv[1].offsetLeft
        let div2T = mouv[1].offsetTop
        let div2H=mouv[1].offsetHeight
        
// console.log(birdG);
// console.log(birdTop);
// console.log(div1G);

        if (birdG + 25 >= div1G &&
            birdG <= div1G + div1H &&
            birdTop + 25 >= div1T &&
            birdTop <= div1T + div1H
        ){
            window.location.reload(true)
        }

        if (birdG + 25 >= div2G &&
            birdG <= div2G + div2H &&
            birdTop + 25 >= div2T &&
            birdTop <= div2T + div2H
        ){
            window.location.reload(true)
        }

            // creation du nouveau piege aleatoir
            if (positionpiege === 900) {
                // les variables tailles renvoie une valeurs random qui sera les height de mes pieges 
                let taille = random(80, 200) /**= height du piege du haut */
                let taille2 = random(80, 200) /**=height du piege du bas  */

                // ma boucle while supprime les pieges après chaque passage
                while (fond.firstChild) {
                    fond.removeChild(fond.firstChild)
                }
                // ma fonction newpiege créer un couple de pieges avec comme parametre les valeurs aléatoires pour définir la hauteur
                newpiege(taille, taille2)

                // je remet positionpiege à 0 pour recommencer l'animation à droite
                positionpiege = 0

            }

    }, 20);





    newpiege()

}

