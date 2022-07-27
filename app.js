const body = document.querySelector('body')
const fond = document.querySelector('#fond')

const bird = document.querySelector('#bird')
const root = document.documentElement



window.addEventListener("keydown", function (event) {




    if (event.key == "z") {
        console.log('ça part');
        gopartie()

    }

})

function gopartie() {

    // ------------------------------------------------------
    /*PARTIE BIRD */
    // ------------------------------------------------------
    let x = 350
    let valeur = -7
    let vrai = 0



    setInterval(() => {

        x += valeur

        root.style.setProperty('--position-', x + 'px')
        if (x < 0 || x > 500) {
            window.location.reload(true)
        }

        return x
    }, 20);


    window.addEventListener("keydown", function (event) {



        if (event.key == " ") {

            valeur = 17

        }

    })
    window.addEventListener("keyup", function (event) {



        if (event.key == " ") {

            valeur = -7


        }

    })

    // ------------------------------------------------------
    /**FIN PARTIE BIRD */
    // ------------------------------------------------------


    // ------------------------------------------------------
    /**PARTIE OBSTACLE */
    // ------------------------------------------------------
    let positionpiege = 0

    setInterval(() => {

        
        positionpiege += 15

        root.style.setProperty('--right-', positionpiege + 'px')
        // console.log(vrai);
        // console.log(positionpiege);




        // si bird touche le piege         
        // if (positionpiege > 350 && positionpiege < 450 && x > divH || x <divB) {
        //     window.location.reload(true)
        // }

        // creation du nouveau piege aleatoir
        if (positionpiege === 900) {

            let taille = random(80, 210)
            let taille2 = random(80, 210)

            while (fond.firstChild) {
                fond.removeChild(fond.firstChild)
            }
            newpiege(taille, taille2)
            positionpiege = 0
         }

        

        


        if (positionpiege > 20 && positionpiege <800) {
            let mouv=document.querySelectorAll('.mouv')

            let div =[ mouv[0].offsetHeight , mouv[1].offsetHeight]

                //   si bird touche le piege         
                
            //  si bird touche le piege         
                //  if (positionpiege < 400 && positionpiege > 450 &&   x <div[1]) {
                //     //  window.location.reload(true)
                //     console.log('true');
                //  }

                 if (positionpiege < 400 && positionpiege > 450 &&  x > div[0] || x <div[1]) {
                     window.location.reload(true)
                    // console.log('true');
                 }

        }


    }, 20);



}


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// function monheight(){
//     if (positionpiege === 0) {
//         console.log('1 :', taille);
//         console.log('2 :', taille2);

//         let height = [taille, taille2] }

//         return height

// }





function newpiege(taille, taille2) {


    // let taille = random(80,210)
    // let taille2 = random(80,210)
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




newpiege()