const tempC = document.getElementById("tempC"),
    tempF = document.getElementById("tempF"),
    tempK = document.getElementById("tempK"),
    form = document.getElementById("form"),
    submitButton = document.getElementById("submit-btn"),
    select = document.getElementById("inputTemp-unit"),
    inputTemp = document.getElementById("inputTemp");



// default set to celsius
let input = select.value;

const roundOff = inputTemp => {
    return Math.round(inputTemp * 100) / 100;
}

select.addEventListener("change", (e) => {
    input = e.target.value;
});



// temperature handle
const tempConvHandle = () => {

    // error handling
    if (inputTemp.value == "") {
        inputTemp.classList.add("error");
        inputTemp.nextElementSibling.classList.add("error-on-txt");
    }
    else {
        inputTemp.classList.remove("error");
        inputTemp.nextElementSibling.classList.remove("error-on-txt");
    }
    switch (input) {
        case "°C":
            tempC.value = inputTemp.value + " °C";

            let fahren1 = inputTemp.value * 1.8 + 32;
            tempF.value = roundOff(fahren1) + " °F";

            let kelvin1 = parseInt(inputTemp.value) + 273.15;
            tempK.value = roundOff(kelvin1) + " K";

            break;

        case "°F":
            tempF.value = inputTemp.value + " °F";

            let celsius1 = (inputTemp.value - 32) * 5 / 9;
            tempC.value = roundOff(celsius1) + " °C";

            let kelvin2 = celsius1 + 273.15;
            tempK.value = roundOff(kelvin2) + " K";

            break;

        case "K":
            tempK.value = inputTemp.value + " K";

            let celsius2 = inputTemp.value - 273.15;
            tempC.value = roundOff(celsius2) + " °C";

            let fahren2 = (inputTemp.value - 273.15) * 1.8 + 32;
            tempF.value = roundOff(fahren2) + " °F";

            break;
    }
}


// form listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    tempConvHandle();
});



// aria-pressed toggle
let isSubmitted;
submitButton.addEventListener("click", (e) => {
    isSubmitted = !isSubmitted;
    isSubmitted ? e.currentTarget.setAttribute("aria-pressed", "true") : e.currentTarget.setAttribute("aria-pressed", "false");
});









