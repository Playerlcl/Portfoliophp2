

let mouse = document.querySelector(".cursor");
window.addEventListener('mousemove', cursor);

function cursor(e){
    mouse.style.top = e.pageY + 'px'
    mouse.style.left = e.pageX +'px'
}

//cursor grossis

let navlinks = document.querySelectorAll(".nav-link li")


navlinks.forEach(link => {
    link.addEventListener('mouseover', () =>{
        mouse.classList.add("link-grow");
        link.classList.add("hoverd-link")
        console.log("c est ajouter")
    });
    link.addEventListener('mouseleave', () =>{
        mouse.classList.remove("link-grow");
        link.classList.remove("hovered-link")
        
    });



});



/*const changeLink = (linkToChange) => {
  embed = linkToChange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
};*/


document.getElementById('vid').addEventListener('click',() =>{

    window.location.href='video.html'
})

document.getElementById('acceuil').addEventListener('click',() =>{

    window.location.href='index.html'
})

document.getElementById('cv').addEventListener('click',() =>{

    window.location.href='cv.html'
})

document.getElementById('butonco').addEventListener('click',() =>{

    window.location.href='conexion.html'
})

