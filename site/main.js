function displayNotice(index) {
    document.getElementsByClassName("in-development")[index].style.display = "block";
}

window.onload = function() {
    new Vivus("ecosystem-graphic", {
        file: "/images/simulators-graphic.svg",
        duration: 400,
        type: "oneByOne"
    }).play();
};