const display = document.getElementById("display");
function append(input) {
    display.value += input;
}
function back() {
    if (display.value != 0) {
        displaylength = display.value.length;
        remove(display.value[displaylength - 1]);
    }
}
function calculate(input) {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "error";
    }
}
function clearDisplay() {
    display.value = "";
}

//# sourceMappingURL=index.ac3b4b31.js.map
