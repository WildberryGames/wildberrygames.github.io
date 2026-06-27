window.onscroll = function() { scrollEvent() };

function scrollEvent() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("subheader-2").classList.add("scrolled");
        document.getElementById("mainNav").classList.add("scrolled");
        var links = document.getElementsByClassName("top-link");
        for (let item of links) changeScrollOn(item);
    }
    else {
        document.getElementById("subheader-2").classList.remove("scrolled");
        document.getElementById("mainNav").classList.remove("scrolled");
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