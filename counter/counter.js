function init() {
    add_listener = (id, event, func) => {
        let ele = document.getElementById(id);
        ele.addEventListener(event, func);
    };

    add_listener("increment-button", "click", add_stitches);
    add_listener("reset-button", "click", reset_count);

    redraw();
}

let count = 0;

function redraw() {
    let count_label = document.getElementById("increment-label");
    count_label.textContent = count;
}

function add_stitches() {
    let stitch_element = document.getElementById("stitch-count");
    let stitch_count = stitch_element.value;
    count += parseInt(stitch_count);

    redraw();
}

function reset_count() {
    count = 0;

    redraw();
}

init();
