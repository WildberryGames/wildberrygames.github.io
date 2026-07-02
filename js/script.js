window.onscroll = function() { scrollEvent() };

function scrollEvent() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("subheaderBar").classList.add("scrolled");
        document.getElementById("mainNav").classList.add("scrolled");
        document.getElementById("homeButton").classList.add("scrolled");
        var links = document.getElementsByClassName("top-link");
        for (let item of links) changeScrollOn(item);
    }
    else {
        document.getElementById("subheaderBar").classList.remove("scrolled");
        document.getElementById("mainNav").classList.remove("scrolled");
        document.getElementById("homeButton").classList.remove("scrolled");
        var links = document.getElementsByClassName("top-link");
        for (let item of links) changeScrollOff(item);
    }
}

function changeScrollOn(item) {
    item.classList.add("scrolled");
}

function changeScrollOff(item) {
    item.classList.remove("scrolled");
}