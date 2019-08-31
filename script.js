function set(num) {
    console.log("asd");

    var bar = document.getElementsByClassName("inner")[0];
    // bar.style.color = "blue";
    var number = bar.style.width;
    bar.style.width = num + "px";
}

function func() {

    var size = 0;

    var maxBarSize = document.getElementsByClassName("outer")[0].offsetWidth;

    var id = setInterval( () => {

        size += maxBarSize/10;

        if (size > maxBarSize) {
            clearInterval(id);
        }
        else {
            set(size);
        }

    }, 1000);

}