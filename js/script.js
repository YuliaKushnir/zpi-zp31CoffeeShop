let searchForm = document.querySelector('.content .search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

function readMore(){
    let more = document.getElementById("more");
    let btnReadMore = document.getElementById("btnReadMore");

    if(more.style.display === "inline"){
        btnReadMore.innerHTML = "читати далі...";
        more.style.display="none";
    } else {
        btnReadMore.innerHTML = "приховати";
        more.style.display="inline";
    }
}
