document.querySelector(".menuitem").addEventListener("click", function() {
    let state = getComputedStyle(document.querySelector(".submenu")).display;
    if (state === 'none') {
        console.log("none to block");
        document.querySelector(".submenu").style.display = 'block';
    } else {
        console.log("block to none");
        document.querySelector(".submenu").style.display = 'none';
    }
})