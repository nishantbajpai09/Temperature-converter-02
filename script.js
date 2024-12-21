let cvtBtn = document.querySelector(".convert");


cvtBtn.addEventListener("click", ()=>{



    let fromUnit = document.querySelector("#fromUnit").value;
    // console.log(fromUnit.value);

    let toUnit = document.querySelector("#toUnit").value;
    // console.log(toUnit.value);
    let temperature = parseInt(document.querySelector("#temperature").value);
    let convertedValue;
    // console.log(temperature);
    let resultUnit;


    switch (fromUnit) {
        case 'C':
            if (toUnit === 'F') {
                convertedValue = (temperature * 9 / 5) + 32;
                resultUnit = "F";
                // console.log("click");

            } else if (toUnit === 'K') {
                convertedValue = temperature + 273.15;
                resultUnit = 'k';

            }
            else {
                convertedValue = temperature;
                resultUnit = "C";
            }
            break;

        case 'F':
            if (toUnit === 'C') {
                convertedValue = (temperature - 32) * 5 / 9;
                resultUnit = "C"
            }
            else if (toUnit === "K") {
                convertedValue = (temperature - 32) * 5 / 9 + 273.15;
                resultUnit = "K"
            } else {
                convertedValue = temperature;
                resultUnit = "F";
            }
            break;
        case 'K':

            if (toUnit === "C") {
                convertedValue = temperature - 273.15;
                resultUnit = "C";
            }
            else if (toUnit === 'F') {
                convertedValue = (temperature- 273.15) * 9 / 5 + 32;
                resultUnit = "F";
            }
            else {
                convertedValue = temperature;
                resultUnit = "K";
            }
            break;


    }
    
    let result = document.querySelector("#result").value=convertedValue.toFixed(2)+' ' +resultUnit;
    console.log(result);


});





