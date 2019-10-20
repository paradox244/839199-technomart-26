var mapBlock = document.querySelector(".map-popap");
var mapLink = document.querySelector(".company-contacts-maps");
var mapClose = document.querySelector(".close-map");

if (mapLink) {
    mapLink.addEventListener("click", function (event) {
        event.preventDefault(event);
        mapBlock.classList.add("show-block");
    });
}

mapClose.addEventListener("click", function (event) {
    event.preventDefault(event);
    mapBlock.classList.remove("show-block");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (mapBlock.classList.contains("show-block")) {
            mapBlock.classList.remove("show-block");
        }
    }
});