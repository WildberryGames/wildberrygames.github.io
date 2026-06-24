window.onscroll = function() { scrollEvent() };

function scrollEvent() {
    console.log("hello world");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("subheader-1").classList.add("scrolled");
        document.getElementById("subheader-2").classList.add("scrolled");
    }
    else {
        document.getElementById("subheader-1").classList.remove("scrolled");
        document.getElementById("subheader-2").classList.remove("scrolled");
    }
}