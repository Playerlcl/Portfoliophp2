const identifan = document.querySelector('#identifiant')
const motdepasse = document.querySelector('#mdp')


let verifid = "admin"
let mdpverif = "admin"

let resultmdp
let resultid


identifan.addEventListener('input', (e) =>{
    console.log(e.target.value)
    resultid= e.target.value

})

motdepasse.addEventListener('input', (e) =>{
    console.log(e.target.value)
    resultmdp = e.target.value
    console.log(resultmdp)
})

document.getElementById('bouton').addEventListener('click',() =>{

    window.location.href='recapinscri.html'
})

/*document.getElementById('bouton').addEventListener('click', () =>{
    console.log(resultid)
    if(resultid == verifid && resultmdp == mdpverif)
    {
        window.location.href='/Users/mac/Desktop/Projet apprenti web dev/aprenti javascript/boutonsouris/index.html';

    }
    else {
        alert("le mot de passe ou l'identifiant sont mauvais")
    }

})*/

/*document.getElementById('bouton').addEventListener('click', () =>{
    console.log(resultid)
    if(resultid == verifid && resultmdp == mdpverif)
    {
        window.location.href='index.html'
    }
    else {
        alert("le mot de passe ou l'identifiant sont mauvais")
    }

})

*/


