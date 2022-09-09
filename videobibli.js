let mouse = document.querySelector(".cursor");
window.addEventListener('mousemove', cursor);

function cursor(e){
    mouse.style.top = e.pageY + 'px'
    mouse.style.left = e.pageX +'px'
}


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


document.getElementById('vid').addEventListener('click',() =>{

    window.location.href='video.html'
})

document.getElementById('acceuil').addEventListener('click',() =>{

    window.location.href='index.html'
})

document.getElementById('cv').addEventListener('click',() =>{

    window.location.href='cv.html'
})



var montage = document.getElementById('video');

montage.innerHTML = 
`<iframe
  width="654"
  height="491"
  src="https://www.youtube.com/embed/1taPBveYX4A"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>`;
